use candid::{CandidType, Deserialize, Principal};
use ic_cdk::{init, post_upgrade, pre_upgrade, query, update};
use ic_cdk::management_canister::{VetKDCurve, VetKDKeyId};
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    storable::{Blob, Bound, Storable},
    DefaultMemoryImpl, StableBTreeMap, StableCell,
};
use ic_vetkeys::key_manager::KeyManager;
use ic_vetkeys::types::{AccessRights, ByteBuf};
use serde::Serialize;
use std::borrow::Cow;
use std::cell::{Cell, RefCell};
use std::collections::BTreeMap;

type Memory = VirtualMemory<DefaultMemoryImpl>;

// ─── Security Constants ─────────────────────────────────────────────
// These limits prevent abuse and protect the canister's stable memory.

/// Maximum size of an encrypted data blob (64 KiB). A single vault entry
/// (title, username, password, url, notes) serialized + AES-GCM overhead
/// should never approach this. Reject anything larger.
const MAX_ENCRYPTED_DATA_SIZE: usize = 65_536;

/// AES-GCM IV must be exactly 12 bytes. Reject anything else.
const REQUIRED_IV_SIZE: usize = 12;

/// Maximum number of vault entries per user. Prevents a single principal
/// from exhausting canister stable memory.
const MAX_ENTRIES_PER_USER: u64 = 500;

/// Maximum write operations per user per minute. Prevents spam attacks
/// that could drain cycles.
const RATE_LIMIT_WRITES_PER_MINUTE: u64 = 30;

/// Rate limit window in nanoseconds (60 seconds).
const RATE_LIMIT_WINDOW_NS: u64 = 60_000_000_000;

/// Deduplication window for idempotency keys (5 minutes in nanoseconds).
const DEDUP_WINDOW_NS: u64 = 5 * 60 * 1_000_000_000;

/// Maximum number of dedup entries before oldest are evicted.
const MAX_DEDUP_ENTRIES: usize = 500;

// ─── Memory IDs ─────────────────────────────────────────────────────
const KM_CONFIG_MEM: MemoryId = MemoryId::new(0);
const KM_ACCESS_MEM: MemoryId = MemoryId::new(1);
const KM_SHARED_MEM: MemoryId = MemoryId::new(2);
const VAULT_MEM: MemoryId = MemoryId::new(3);
const ENTRY_COUNTER_MEM: MemoryId = MemoryId::new(4);
const SHARES_MEM: MemoryId = MemoryId::new(5);
const SHARE_COUNTER_MEM: MemoryId = MemoryId::new(6);

/// Maximum number of active shares per user. Prevents memory abuse.
const MAX_SHARES_PER_USER: usize = 50;

/// Maximum share expiry duration (30 days in nanoseconds).
const MAX_SHARE_EXPIRY_NS: u64 = 30 * 24 * 3600 * 1_000_000_000;

// ─── Types ──────────────────────────────────────────────────────────

/// A vault entry stored on-chain. All sensitive fields are encrypted
/// client-side before being sent here. The canister only ever sees
/// ciphertext. No plaintext passwords, usernames, or URLs are stored.
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct VaultEntry {
    pub id: u64,
    pub owner: Principal,
    /// Encrypted blob: contains { title, username, password, url, notes }
    /// encrypted with AES-256-GCM using a vetKey-derived key.
    pub encrypted_data: ByteBuf,
    /// AES-GCM initialization vector (exactly 12 bytes).
    pub iv: ByteBuf,
    pub created_at: u64,
    pub updated_at: u64,
}

/// Composite key: (owner_principal_bytes, entry_id).
/// This ensures each user can only access their own entries at the
/// storage layer. Range scans are bounded by the owner prefix.
#[derive(Clone, PartialEq, Eq, PartialOrd, Ord)]
struct VaultKey {
    owner: Vec<u8>,
    id: u64,
}

impl Storable for VaultKey {
    const BOUND: Bound = Bound::Bounded {
        max_size: 38, // 1 (len byte) + 29 (max principal) + 8 (u64)
        is_fixed_size: false,
    };

    fn to_bytes(&self) -> Cow<'_, [u8]> {
        let mut buf = Vec::with_capacity(1 + self.owner.len() + 8);
        buf.push(self.owner.len() as u8);
        buf.extend_from_slice(&self.owner);
        buf.extend_from_slice(&self.id.to_be_bytes());
        Cow::Owned(buf)
    }

    fn from_bytes(bytes: Cow<'_, [u8]>) -> Self {
        let owner_len = bytes[0] as usize;
        let owner = bytes[1..1 + owner_len].to_vec();
        let mut id_bytes = [0u8; 8];
        id_bytes.copy_from_slice(&bytes[1 + owner_len..1 + owner_len + 8]);
        VaultKey {
            owner,
            id: u64::from_be_bytes(id_bytes),
        }
    }

    fn into_bytes(self) -> Vec<u8> {
        self.to_bytes().into_owned()
    }
}

impl Storable for VaultEntry {
    const BOUND: Bound = Bound::Bounded {
        // Upper bound: 8 (id) + 29 (principal) + 65536 (data) + 12 (iv)
        // + 8 (created_at) + 8 (updated_at) + CBOR overhead (~100 bytes)
        max_size: 65_700,
        is_fixed_size: false,
    };

    fn to_bytes(&self) -> Cow<'_, [u8]> {
        let mut buf = vec![];
        ciborium::into_writer(self, &mut buf).expect("Failed to encode VaultEntry");
        Cow::Owned(buf)
    }

    fn from_bytes(bytes: Cow<'_, [u8]>) -> Self {
        ciborium::from_reader(bytes.as_ref()).expect("Failed to decode VaultEntry")
    }

    fn into_bytes(self) -> Vec<u8> {
        self.to_bytes().into_owned()
    }
}

/// A shared credential entry stored on-chain. The actual credential data
/// is encrypted with a one-time share key that exists only in the URL fragment.
/// The canister never has access to the plaintext.
#[derive(CandidType, Serialize, Deserialize, Clone, Debug)]
pub struct SharedEntry {
    pub id: String,              // Random hex ID (16 bytes = 32 hex chars)
    pub creator: Principal,
    pub encrypted_data: ByteBuf, // Encrypted with the share key (NOT the user's vetKey)
    pub iv: ByteBuf,
    pub expires_at: u64,         // Nanosecond timestamp
    pub self_destruct: bool,     // Delete after first view
    pub created_at: u64,
    pub viewed: bool,            // Track if it's been viewed (for self-destruct)
}

impl Storable for SharedEntry {
    const BOUND: Bound = Bound::Bounded {
        // Upper bound: similar to VaultEntry plus extra fields
        max_size: 66_000,
        is_fixed_size: false,
    };

    fn to_bytes(&self) -> Cow<'_, [u8]> {
        let mut buf = vec![];
        ciborium::into_writer(self, &mut buf).expect("Failed to encode SharedEntry");
        Cow::Owned(buf)
    }

    fn from_bytes(bytes: Cow<'_, [u8]>) -> Self {
        ciborium::from_reader(bytes.as_ref()).expect("Failed to decode SharedEntry")
    }

    fn into_bytes(self) -> Vec<u8> {
        self.to_bytes().into_owned()
    }
}

// ─── Rate Limiter ───────────────────────────────────────────────────
/// Per-principal rate limiter tracking write operations.
/// Stored in heap memory (not stable) so it resets on upgrade, which
/// is acceptable for rate limiting.
struct RateLimitEntry {
    count: u64,
    window_start: u64,
}

/// Deduplication entry for idempotency keys.
struct DedupEntry {
    created_at: u64,
    result_id: u64, // The entry/share ID returned on first call
}

// ─── Stable State ───────────────────────────────────────────────────

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static KEY_MANAGER: RefCell<Option<KeyManager<AccessRights>>> =
        RefCell::new(None);

    static VAULT: RefCell<StableBTreeMap<VaultKey, VaultEntry, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(VAULT_MEM))
        ));

    static ENTRY_COUNTER: RefCell<StableCell<u64, Memory>> =
        RefCell::new(StableCell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(ENTRY_COUNTER_MEM)),
            0u64,
        ));

    /// Heap-based rate limiter. Resets on canister upgrade (acceptable).
    static RATE_LIMITER: RefCell<BTreeMap<Principal, RateLimitEntry>> =
        RefCell::new(BTreeMap::new());

    /// Maintenance mode flag. When true, vetKD endpoints are rejected
    /// so inflight calls can drain before a canister upgrade.
    static MAINTENANCE_MODE: Cell<bool> = Cell::new(false);

    /// Deduplication store for idempotency keys. Maps (caller, dedup_key) -> DedupEntry.
    /// Heap-based, resets on upgrade (acceptable — clients generate new keys after timeout).
    static DEDUP_STORE: RefCell<BTreeMap<(Principal, String), DedupEntry>> =
        RefCell::new(BTreeMap::new());

    /// Per-user share count. Heap-based, rebuilt from SHARES on init/post_upgrade.
    /// Avoids O(n) full-table scan on every create_share.
    static USER_SHARE_COUNTS: RefCell<BTreeMap<Principal, usize>> =
        RefCell::new(BTreeMap::new());

    static SHARES: RefCell<StableBTreeMap<Blob<16>, SharedEntry, Memory>> =
        RefCell::new(StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(SHARES_MEM))
        ));

    static SHARE_COUNTER: RefCell<StableCell<u64, Memory>> =
        RefCell::new(StableCell::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(SHARE_COUNTER_MEM)),
            0u64,
        ));
}

/// Rebuild the per-user share count from the SHARES StableBTreeMap.
fn rebuild_share_counts() {
    SHARES.with(|s| {
        let shares = s.borrow();
        let mut counts: BTreeMap<Principal, usize> = BTreeMap::new();
        for entry in shares.iter() {
            *counts.entry(entry.value().creator).or_insert(0) += 1;
        }
        USER_SHARE_COUNTS.with(|c| *c.borrow_mut() = counts);
    });
}

fn init_key_manager() {
    // ── Production key selection ─────────────────────────────────
    // Use "test_key_1" for local development and testing.
    // Switch to "key_1" for production deployment with real user data.
    // key_1 uses the production threshold infrastructure on subnet pzp6e.
    let key_id = VetKDKeyId {
        curve: VetKDCurve::Bls12_381_G2,
        name: "key_1".to_string(),
    };
    MEMORY_MANAGER.with(|mm| {
        let mm = mm.borrow();
        KEY_MANAGER.with(|km| {
            *km.borrow_mut() = Some(KeyManager::init(
                "ic_vault_v1",
                key_id,
                mm.get(KM_CONFIG_MEM),
                mm.get(KM_ACCESS_MEM),
                mm.get(KM_SHARED_MEM),
            ));
        });
    });
}

#[init]
fn init() {
    init_key_manager();
    rebuild_share_counts();
}

#[pre_upgrade]
fn pre_upgrade() {
    // No heap state needs serialization — all critical data uses StableBTreeMap/StableCell.
    // This hook exists as a safety checkpoint and extension point.
}

#[post_upgrade]
fn post_upgrade() {
    init_key_manager();
    rebuild_share_counts();
}

// ─── Security: inspect_message ──────────────────────────────────────
// Pre-filter to reject anonymous callers before Candid decoding.
// Saves cycles on spam. NOT a security boundary (runs on one replica,
// can be bypassed by a malicious boundary node). Real auth checks are
// duplicated inside every update/query method via require_auth().

#[ic_cdk::inspect_message]
fn inspect_message() {
    let caller = ic_cdk::api::msg_caller();
    let method = ic_cdk::api::msg_method_name();

    match method.as_str() {
        // whoami and get_share accept anonymous callers
        // (share link IS the authentication for get_share)
        "whoami" | "get_share" => ic_cdk::api::accept_message(),
        // All other methods require authentication
        _ => {
            if caller != Principal::anonymous() {
                ic_cdk::api::accept_message();
            }
            // Silent reject for anonymous on protected methods.
            // Saves cycles by not deserializing the Candid payload.
        }
    }
}

// ─── Auth & Validation Helpers ──────────────────────────────────────

/// Reject calls when maintenance mode is active (used to drain inflight
/// vetKD calls before canister upgrade).
fn require_not_maintenance() {
    if MAINTENANCE_MODE.with(|m| m.get()) {
        ic_cdk::trap("Canister is in maintenance mode. Please try again shortly.");
    }
}

/// Check dedup store for an existing idempotency key. Returns Some(result_id)
/// if this key was already processed within the dedup window.
fn check_dedup(caller: &Principal, dedup_key: &str) -> Option<u64> {
    let now = ic_cdk::api::time();
    DEDUP_STORE.with(|ds| {
        let store = ds.borrow();
        if let Some(entry) = store.get(&(*caller, dedup_key.to_string())) {
            if now - entry.created_at < DEDUP_WINDOW_NS {
                return Some(entry.result_id);
            }
        }
        None
    })
}

/// Record a dedup key with its result. Evicts expired entries if store is full.
fn record_dedup(caller: &Principal, dedup_key: &str, result_id: u64) {
    let now = ic_cdk::api::time();
    DEDUP_STORE.with(|ds| {
        let mut store = ds.borrow_mut();
        // Evict expired entries if at capacity
        if store.len() >= MAX_DEDUP_ENTRIES {
            store.retain(|_, v| now - v.created_at < DEDUP_WINDOW_NS);
        }
        store.insert(
            (*caller, dedup_key.to_string()),
            DedupEntry { created_at: now, result_id },
        );
    });
}

/// Reject anonymous principal. Every endpoint except whoami must call this.
fn require_auth() -> Principal {
    let caller = ic_cdk::api::msg_caller();
    if caller == Principal::anonymous() {
        ic_cdk::trap("Anonymous principal not allowed. Please authenticate with Internet Identity.");
    }
    caller
}

/// Validate encrypted data size. Rejects payloads that exceed the maximum
/// allowed size, preventing memory exhaustion attacks.
fn validate_encrypted_data(data: &ByteBuf, iv: &ByteBuf) {
    let data_bytes: &[u8] = data.as_ref();
    let iv_bytes: &[u8] = iv.as_ref();
    if data_bytes.len() > MAX_ENCRYPTED_DATA_SIZE {
        ic_cdk::trap(&format!(
            "Encrypted data too large: {} bytes (max {})",
            data_bytes.len(),
            MAX_ENCRYPTED_DATA_SIZE
        ));
    }
    if data_bytes.is_empty() {
        ic_cdk::trap("Encrypted data cannot be empty");
    }
    if iv_bytes.len() != REQUIRED_IV_SIZE {
        ic_cdk::trap(&format!(
            "IV must be exactly {} bytes, got {}",
            REQUIRED_IV_SIZE,
            iv_bytes.len()
        ));
    }
}

/// Count entries for a given principal.
fn count_user_entries(caller: &Principal) -> u64 {
    let owner_bytes = caller.as_slice().to_vec();
    VAULT.with(|v| {
        let vault = v.borrow();
        let start = VaultKey { owner: owner_bytes.clone(), id: 0 };
        let end = VaultKey { owner: owner_bytes, id: u64::MAX };
        vault.range(start..=end).count() as u64
    })
}

/// Enforce per-user entry limit.
fn enforce_entry_limit(caller: &Principal) {
    let count = count_user_entries(caller);
    if count >= MAX_ENTRIES_PER_USER {
        ic_cdk::trap(&format!(
            "Entry limit reached: {} entries (max {}). Delete unused entries to add new ones.",
            count, MAX_ENTRIES_PER_USER
        ));
    }
}

/// Enforce per-principal write rate limit.
/// Returns Ok(()) if under limit, traps if exceeded.
fn enforce_rate_limit(caller: &Principal) {
    let now = ic_cdk::api::time();
    RATE_LIMITER.with(|rl| {
        let mut limiter = rl.borrow_mut();
        let entry = limiter.entry(*caller).or_insert(RateLimitEntry {
            count: 0,
            window_start: now,
        });

        // Reset window if it has expired
        if now - entry.window_start > RATE_LIMIT_WINDOW_NS {
            entry.count = 0;
            entry.window_start = now;
        }

        // Check BEFORE incrementing
        if entry.count >= RATE_LIMIT_WRITES_PER_MINUTE {
            ic_cdk::trap(&format!(
                "Rate limit exceeded: max {} writes per minute. Please wait before retrying.",
                RATE_LIMIT_WRITES_PER_MINUTE
            ));
        }

        entry.count += 1;
    });
}

// ─── vetKey Endpoints ───────────────────────────────────────────────

/// Get the user's encrypted vetkey for client-side encryption/decryption.
/// The key is derived for the caller's principal. Only the caller can
/// request their own key (enforced by KeyManager access control).
/// The returned key is encrypted under the caller's transport public key,
/// so no node or canister ever sees the raw key material.
#[update]
async fn get_encrypted_vetkey(transport_public_key: ByteBuf) -> ByteBuf {
    let caller = require_auth();
    require_not_maintenance();
    enforce_rate_limit(&caller);

    // Validate transport public key size (BLS12-381 G1 point = 48 bytes)
    let tpk_bytes: &[u8] = transport_public_key.as_ref();
    if tpk_bytes.len() != 48 {
        ic_cdk::trap(&format!(
            "Transport public key must be 48 bytes, got {}",
            tpk_bytes.len()
        ));
    }

    let key_name: Blob<32> = {
        let mut bytes = [0u8; 32];
        let src = b"vault_key";
        bytes[..src.len()].copy_from_slice(src);
        Blob::try_from(bytes.as_ref()).unwrap()
    };
    let subkey_id = (caller, key_name);

    let future = KEY_MANAGER.with(|km| {
        let km = km.borrow();
        let km = km.as_ref().expect("KeyManager not initialized");
        km.get_encrypted_vetkey(caller, subkey_id, transport_public_key)
            .expect("Access denied: cannot derive key for this caller")
    });
    let vet_key = future.await;
    vet_key.into()
}

/// Get the verification key for verifying derived keys.
#[update]
async fn get_vetkey_verification_key() -> ByteBuf {
    let caller = require_auth();
    require_not_maintenance();
    enforce_rate_limit(&caller);

    let future = KEY_MANAGER.with(|km| {
        let km = km.borrow();
        let km = km.as_ref().expect("KeyManager not initialized");
        km.get_vetkey_verification_key()
    });
    future.await
}

// ─── Vault CRUD ─────────────────────────────────────────────────────

/// Add an encrypted vault entry. Accepts an optional dedup_key for
/// idempotent retries. If the same (caller, dedup_key) is seen within
/// 5 minutes, returns the original entry ID without creating a duplicate.
#[update]
fn add_entry(encrypted_data: ByteBuf, iv: ByteBuf, dedup_key: Option<String>) -> u64 {
    let caller = require_auth();

    // ── Idempotency check ───────────────────────────────────────
    if let Some(ref dk) = dedup_key {
        if let Some(existing_id) = check_dedup(&caller, dk) {
            return existing_id;
        }
    }

    // ── Security checks ─────────────────────────────────────────
    validate_encrypted_data(&encrypted_data, &iv);
    enforce_entry_limit(&caller);
    enforce_rate_limit(&caller);

    let id = ENTRY_COUNTER.with(|c| {
        let mut cell = c.borrow_mut();
        let current = *cell.get();
        // StableCell::set() returns the previous value (not Result).
        // Internally it calls .expect() on the memory write, so a
        // stable memory failure will trap the canister.
        let _ = cell.set(current + 1);
        current
    });

    let entry = VaultEntry {
        id,
        owner: caller,
        encrypted_data,
        iv,
        created_at: ic_cdk::api::time(),
        updated_at: ic_cdk::api::time(),
    };

    let key = VaultKey {
        owner: caller.as_slice().to_vec(),
        id,
    };

    VAULT.with(|v| {
        v.borrow_mut().insert(key, entry);
    });

    // Record dedup key if provided
    if let Some(ref dk) = dedup_key {
        record_dedup(&caller, dk, id);
    }

    id
}

/// Update an existing encrypted vault entry. Only the owner can update
/// their own entries (enforced by the composite VaultKey).
#[update]
fn update_entry(id: u64, encrypted_data: ByteBuf, iv: ByteBuf) -> bool {
    let caller = require_auth();

    // ── Security checks ─────────────────────────────────────────
    validate_encrypted_data(&encrypted_data, &iv);
    enforce_rate_limit(&caller);

    let key = VaultKey {
        owner: caller.as_slice().to_vec(),
        id,
    };

    VAULT.with(|v| {
        let mut vault = v.borrow_mut();
        if let Some(mut entry) = vault.get(&key) {
            entry.encrypted_data = encrypted_data;
            entry.iv = iv;
            entry.updated_at = ic_cdk::api::time();
            vault.insert(key, entry);
            true
        } else {
            false
        }
    })
}

/// Delete a vault entry. Only the owner can delete their own entries.
#[update]
fn delete_entry(id: u64) -> bool {
    let caller = require_auth();
    enforce_rate_limit(&caller);

    let key = VaultKey {
        owner: caller.as_slice().to_vec(),
        id,
    };

    VAULT.with(|v| v.borrow_mut().remove(&key).is_some())
}

/// Get all encrypted vault entries for the caller. Returns only entries
/// owned by the authenticated caller (enforced by range scan on the
/// owner-prefixed composite key).
#[query]
fn get_entries() -> Vec<VaultEntry> {
    let caller = require_auth();
    let owner_bytes = caller.as_slice().to_vec();

    VAULT.with(|v| {
        let vault = v.borrow();
        let start = VaultKey { owner: owner_bytes.clone(), id: 0 };
        let end = VaultKey { owner: owner_bytes, id: u64::MAX };
        vault
            .range(start..=end)
            .map(|entry| entry.value())
            .collect()
    })
}

/// Get count of entries for the caller.
#[query]
fn get_entry_count() -> u64 {
    let caller = require_auth();
    count_user_entries(&caller)
}

// ─── Share ID Helpers ───────────────────────────────────────────────

fn generate_share_id(caller: &Principal) -> String {
    let counter = SHARE_COUNTER.with(|c| {
        let mut cell = c.borrow_mut();
        let current = *cell.get();
        // StableCell::set() returns the previous value (not Result).
        // Internally it calls .expect() on the memory write, so a
        // stable memory failure will trap the canister.
        let _ = cell.set(current + 1);
        current
    });
    let time = ic_cdk::api::time();
    let mut bytes = Vec::new();
    bytes.extend_from_slice(caller.as_slice());
    bytes.extend_from_slice(&counter.to_be_bytes());
    bytes.extend_from_slice(&time.to_be_bytes());
    let hash = simple_hash(&bytes);
    hex_encode(&hash[..16])
}

fn simple_hash(data: &[u8]) -> [u8; 32] {
    let mut state = [0u8; 32];
    for (i, &byte) in data.iter().enumerate() {
        state[i % 32] ^= byte;
        state[(i + 7) % 32] = state[(i + 7) % 32].wrapping_add(byte);
        state[(i + 13) % 32] = state[(i + 13) % 32].wrapping_mul(byte.wrapping_add(1));
    }
    state
}

fn hex_encode(bytes: &[u8]) -> String {
    bytes.iter().map(|b| format!("{:02x}", b)).collect()
}

fn share_key_from_id(id: &str) -> Result<Blob<16>, String> {
    let bytes = hex_decode(id)?;
    if bytes.len() < 16 {
        return Err("Share ID too short".to_string());
    }
    let mut arr = [0u8; 16];
    arr.copy_from_slice(&bytes[..16]);
    Ok(Blob::try_from(arr.as_ref()).unwrap())
}

fn hex_decode(hex: &str) -> Result<Vec<u8>, String> {
    if hex.len() % 2 != 0 {
        return Err("Invalid hex: odd length".to_string());
    }
    hex.as_bytes()
        .chunks(2)
        .map(|chunk| {
            let s = std::str::from_utf8(chunk).map_err(|_| "Invalid UTF-8 in hex".to_string())?;
            u8::from_str_radix(s, 16).map_err(|_| format!("Invalid hex char: {}", s))
        })
        .collect()
}

// ─── Sharing Endpoints ──────────────────────────────────────────────

/// Create a shared credential link. Caller must be authenticated.
/// Returns the share ID (hex string).
/// The caller is responsible for encrypting the entry data with a random
/// one-time share key (AES-256-GCM) BEFORE calling this. The canister
/// only stores ciphertext and never sees the share key.
#[update]
fn create_share(
    encrypted_data: ByteBuf,
    iv: ByteBuf,
    expires_in_ns: u64,
    self_destruct: bool,
) -> String {
    let caller = require_auth();
    validate_encrypted_data(&encrypted_data, &iv);
    enforce_rate_limit(&caller);

    // Validate share expiry
    if expires_in_ns == 0 {
        ic_cdk::trap("Share expiry must be greater than zero.");
    }
    if expires_in_ns > MAX_SHARE_EXPIRY_NS {
        ic_cdk::trap(&format!(
            "Share expiry too large: max {} ns (30 days).",
            MAX_SHARE_EXPIRY_NS
        ));
    }

    // Enforce per-user share limit using O(1) counter instead of O(n) scan
    let user_share_count = USER_SHARE_COUNTS.with(|c| {
        *c.borrow().get(&caller).unwrap_or(&0)
    });
    if user_share_count >= MAX_SHARES_PER_USER {
        ic_cdk::trap(&format!(
            "Share limit reached: {} active shares (max {}). Delete old shares first.",
            user_share_count, MAX_SHARES_PER_USER
        ));
    }

    let id = generate_share_id(&caller);
    let now = ic_cdk::api::time();

    let entry = SharedEntry {
        id: id.clone(),
        creator: caller,
        encrypted_data,
        iv,
        expires_at: now + expires_in_ns,
        self_destruct,
        created_at: now,
        viewed: false,
    };

    let key = match share_key_from_id(&id) {
        Ok(k) => k,
        Err(e) => ic_cdk::trap(&format!("Failed to generate share key: {}", e)),
    };

    SHARES.with(|s| {
        s.borrow_mut().insert(key, entry);
    });

    // Increment per-user share counter
    USER_SHARE_COUNTS.with(|c| {
        *c.borrow_mut().entry(caller).or_insert(0) += 1;
    });

    id
}

/// Get a shared credential. No authentication required.
/// Returns the encrypted data, or error if expired/not found.
/// If self_destruct is true, deletes the share after returning it.
/// Must be an update call (not query) because self_destruct mutates state.
#[update]
fn get_share(id: String) -> Result<SharedEntry, String> {
    let key = share_key_from_id(&id)?;
    let now = ic_cdk::api::time();

    SHARES.with(|s| {
        let mut shares = s.borrow_mut();

        if let Some(entry) = shares.get(&key) {
            // Check expiry
            if now > entry.expires_at {
                let creator = entry.creator;
                shares.remove(&key);
                // Decrement per-user share counter
                USER_SHARE_COUNTS.with(|c| {
                    let mut counts = c.borrow_mut();
                    if let Some(count) = counts.get_mut(&creator) {
                        *count = count.saturating_sub(1);
                    }
                });
                return Err("This shared credential has expired.".to_string());
            }

            // Check if already viewed and destroyed
            if entry.self_destruct && entry.viewed {
                shares.remove(&key);
                return Err(
                    "This shared credential has already been viewed and was destroyed."
                        .to_string(),
                );
            }

            let result = entry.clone();

            if entry.self_destruct {
                // Delete immediately for self-destruct
                let creator = entry.creator;
                shares.remove(&key);
                // Decrement per-user share counter
                USER_SHARE_COUNTS.with(|c| {
                    let mut counts = c.borrow_mut();
                    if let Some(count) = counts.get_mut(&creator) {
                        *count = count.saturating_sub(1);
                    }
                });
            } else {
                // Mark as viewed (for tracking)
                let mut updated = entry.clone();
                updated.viewed = true;
                shares.insert(key, updated);
            }

            Ok(result)
        } else {
            Err("Shared credential not found. It may have expired or been destroyed.".to_string())
        }
    })
}

/// Delete a share. Only the creator can delete their own shares.
#[update]
fn delete_share(id: String) -> bool {
    let caller = require_auth();
    let key = match share_key_from_id(&id) {
        Ok(k) => k,
        Err(_) => return false,
    };

    SHARES.with(|s| {
        let mut shares = s.borrow_mut();
        if let Some(entry) = shares.get(&key) {
            if entry.creator == caller {
                shares.remove(&key);
                // Decrement per-user share counter
                USER_SHARE_COUNTS.with(|c| {
                    let mut counts = c.borrow_mut();
                    if let Some(count) = counts.get_mut(&caller) {
                        *count = count.saturating_sub(1);
                    }
                });
                return true;
            }
        }
        false
    })
}

/// List all active shares created by the caller.
#[query]
fn get_my_shares() -> Vec<SharedEntry> {
    let caller = require_auth();
    let now = ic_cdk::api::time();
    SHARES.with(|s| {
        s.borrow()
            .iter()
            .filter(|entry| {
                let e = entry.value();
                e.creator == caller && e.expires_at > now
            })
            .map(|entry| entry.value())
            .collect()
    })
}

// ─── Health Check ───────────────────────────────────────────────────

/// Health check. Accepts anonymous callers for diagnostics.
#[query]
fn whoami() -> String {
    let caller = ic_cdk::api::msg_caller();
    if caller == Principal::anonymous() {
        "anonymous".to_string()
    } else {
        caller.to_text()
    }
}

/// Get the current entry limit for the caller.
#[query]
fn get_limits() -> (u64, u64) {
    let caller = require_auth();
    let count = count_user_entries(&caller);
    (count, MAX_ENTRIES_PER_USER)
}

// ─── Admin: Maintenance Mode ────────────────────────────────────────

/// Enable or disable maintenance mode. Only callable by the canister
/// controller. Use before upgrading to drain inflight vetKD calls:
///   1. set_maintenance_mode(true)   — blocks new vetKD requests
///   2. Wait ~10 seconds for inflight calls to complete
///   3. Deploy the upgrade
///   4. Maintenance mode auto-resets on upgrade (heap state)
#[update]
fn set_maintenance_mode(enabled: bool) {
    let caller = require_auth();
    // Only the controller can toggle maintenance mode.
    // ic_cdk::api::is_controller() checks the canister settings.
    if !ic_cdk::api::is_controller(&caller) {
        ic_cdk::trap("Only the canister controller can set maintenance mode.");
    }
    MAINTENANCE_MODE.with(|m| m.set(enabled));
}

/// Check if maintenance mode is active.
#[query]
fn is_maintenance_mode() -> bool {
    MAINTENANCE_MODE.with(|m| m.get())
}

ic_cdk::export_candid!();
