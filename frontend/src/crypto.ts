/**
 * IC Vault: Client-side encryption using vetKeys.
 *
 * Flow:
 * 1. User authenticates with Internet Identity
 * 2. Frontend generates a transport key pair
 * 3. Frontend requests encrypted vetKey from the canister
 * 4. Canister calls vetkd_derive_key (keyed on caller principal)
 * 5. Frontend decrypts the vetKey using the transport secret
 * 6. Frontend derives an AES-256-GCM key from the vetKey material
 * 7. All vault data is encrypted/decrypted locally with this AES key
 */

import {
  TransportSecretKey,
  DerivedPublicKey,
  EncryptedVetKey,
} from "@dfinity/vetkeys";

export interface VaultData {
  title: string;
  username: string;
  password: string;
  url: string;
  notes: string;
}

// ByteBuf wrapper as used by the canister Candid interface
interface ByteBufWire {
  inner: Uint8Array | number[];
}

// The backend actor interface (matches our Candid with ByteBuf = record { inner : blob })
export interface BackendActor {
  get_encrypted_vetkey: (transport_public_key: ByteBufWire) => Promise<ByteBufWire>;
  get_vetkey_verification_key: () => Promise<ByteBufWire>;
  add_entry: (encrypted_data: ByteBufWire, iv: ByteBufWire) => Promise<bigint>;
  update_entry: (id: bigint, encrypted_data: ByteBufWire, iv: ByteBufWire) => Promise<boolean>;
  delete_entry: (id: bigint) => Promise<boolean>;
  get_entries: () => Promise<Array<{
    id: bigint;
    owner: any;
    encrypted_data: ByteBufWire;
    iv: ByteBufWire;
    created_at: bigint;
    updated_at: bigint;
  }>>;
  get_entry_count: () => Promise<bigint>;
  whoami: () => Promise<string>;
}

/** Wrap raw bytes into ByteBuf wire format */
export function toByteBuf(bytes: Uint8Array): ByteBufWire {
  return { inner: Array.from(bytes) };
}

/** Unwrap ByteBuf wire format to Uint8Array */
export function fromByteBuf(buf: ByteBufWire): Uint8Array {
  return new Uint8Array(buf.inner);
}

let cachedAesKey: CryptoKey | null = null;

/**
 * Derive the user's AES-256-GCM encryption key from their vetKey.
 * The key is cached in memory for the session.
 */
export async function deriveEncryptionKey(
  actor: BackendActor
): Promise<CryptoKey> {
  if (cachedAesKey) return cachedAesKey;

  // 1. Generate ephemeral transport key pair
  const transportSecretKey = TransportSecretKey.random();
  const transportPublicKey = transportSecretKey.publicKeyBytes();

  // 2. Request encrypted vetkey and verification key from canister
  const [encryptedKeyBuf, verificationKeyBuf] = await Promise.all([
    actor.get_encrypted_vetkey(toByteBuf(transportPublicKey)),
    actor.get_vetkey_verification_key(),
  ]);

  // 3. Decrypt and verify the vetKey
  const verificationKey = DerivedPublicKey.deserialize(
    fromByteBuf(verificationKeyBuf)
  );
  const encryptedVetKey = EncryptedVetKey.deserialize(
    fromByteBuf(encryptedKeyBuf)
  );

  // The input used in the canister is: key_id_to_vetkd_input(caller, key_name_bytes)
  // which concatenates the principal bytes and the key name.
  // For verification, we need the same input derivation.
  const principalText = await actor.whoami();
  const { Principal } = await import("@icp-sdk/core/principal");
  const principal = Principal.fromText(principalText);
  const principalBytes = principal.toUint8Array();

  // The key_name is "vault_key" padded to 32 bytes (Blob<32>)
  const keyNameBytes = new Uint8Array(32);
  const keyNameStr = new TextEncoder().encode("vault_key");
  keyNameBytes.set(keyNameStr);

  // Reconstruct the vetkd_input the same way the canister does:
  // key_id_to_vetkd_input concatenates principal bytes + key_name bytes
  const input = new Uint8Array(principalBytes.length + keyNameBytes.length);
  input.set(principalBytes, 0);
  input.set(keyNameBytes, principalBytes.length);

  const vetKey = encryptedVetKey.decryptAndVerify(
    transportSecretKey,
    verificationKey,
    input
  );

  // 4. Derive AES-GCM key from the vetKey using the built-in HKDF derivation
  const derivedKeyMaterial = await vetKey.asDerivedKeyMaterial();
  cachedAesKey = await derivedKeyMaterial.deriveAesGcmCryptoKey("ic-vault-v1");

  return cachedAesKey;
}

/**
 * Encrypt vault data for storage on-chain.
 */
export async function encryptVaultData(
  aesKey: CryptoKey,
  data: VaultData
): Promise<{ encrypted: Uint8Array; iv: Uint8Array }> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = new TextEncoder().encode(JSON.stringify(data));

  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    aesKey,
    plaintext
  );

  return {
    encrypted: new Uint8Array(ciphertext),
    iv,
  };
}

/**
 * Decrypt vault data retrieved from the canister.
 */
export async function decryptVaultData(
  aesKey: CryptoKey,
  encrypted: Uint8Array,
  iv: Uint8Array
): Promise<VaultData> {
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: new Uint8Array(iv) },
    aesKey,
    new Uint8Array(encrypted)
  );

  return JSON.parse(new TextDecoder().decode(plaintext));
}

/**
 * Clear the cached key on logout.
 */
export function clearKeyCache() {
  cachedAesKey = null;
}

/**
 * Generate a random password.
 */
export function generatePassword(
  length: number = 20,
  options: {
    uppercase?: boolean;
    lowercase?: boolean;
    numbers?: boolean;
    symbols?: boolean;
  } = {}
): string {
  const {
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = true,
  } = options;

  let chars = "";
  if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) chars += "0123456789";
  if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  if (!chars) chars = "abcdefghijklmnopqrstuvwxyz0123456789";

  const array = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(array, (byte) => chars[byte % chars.length]).join("");
}
