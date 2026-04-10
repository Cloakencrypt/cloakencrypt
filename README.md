# Cloak

The password manager that can't betray you. Protected by math, not promises.

Your passwords, cards, and secrets are encrypted on your device before they ever leave it. The encryption key is derived on demand by a network of independent nodes and exists only for the moment you need it. No single entity, including the developers, can access your vault.

**Live:** [cloakencrypt.com](https://www.cloakencrypt.com)

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                         Browser (Frontend)                           │
│                                                                      │
│  ┌──────────────┐  ┌────────────────┐  ┌──────────────────────────┐ │
│  │  Internet     │  │  Transport     │  │  AES-256-GCM             │ │
│  │  Identity     │  │  Key Pair      │  │  Encrypt / Decrypt       │ │
│  │  (Passkey)    │  │  (Ephemeral)   │  │  (Client-side only)      │ │
│  └──────┬───────┘  └──────┬─────────┘  └──────────┬───────────────┘ │
│         │                 │                        │                 │
└─────────┼─────────────────┼────────────────────────┼─────────────────┘
          │                 │                        │
          ▼                 ▼                        ▼
┌──────────────────────────────────────────────────────────────────────┐
│                      Backend Canister (Rust)                         │
│                                                                      │
│  ┌──────────────┐  ┌────────────────┐  ┌──────────────────────────┐ │
│  │  Caller       │  │  vetKD API     │  │  Stable Memory           │ │
│  │  Validation   │  │  (key_1)       │  │  (Encrypted entries)     │ │
│  └──────────────┘  └────────────────┘  └──────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
```

### vetKeys: How Encryption Works

Cloak uses [vetKeys](https://internetcomputer.org/docs/building-apps/network-features/vetkeys/) (verifiable encrypted threshold key derivation) for on-chain key management. No master password. No stored keys. The flow:

1. **You authenticate** with a passkey (fingerprint, face, or device PIN) via Internet Identity
2. **The frontend generates** an ephemeral transport key pair
3. **The backend requests** a derived key from the network's threshold infrastructure via `vetkd_derive_key`
4. **The subnet nodes** collaboratively derive the key. No single node ever holds the complete key
5. **The key is delivered** encrypted under your transport public key. Only your browser can decrypt it
6. **Your browser derives** an AES-256-GCM symmetric key from the vetKey material
7. **All encryption and decryption** happens locally. The backend only ever stores ciphertext

The same `(canister_id, context, caller_principal)` always produces the same derived key. Your key is deterministic but never stored. It is reconstructed on demand each session.

### Internet Identity: Authentication Flow

1. User clicks "Authenticate with Passkey"
2. Frontend opens Internet Identity popup at `identity.ic0.app`
3. User authenticates with their passkey (biometric or PIN)
4. II returns a signed delegation to the frontend
5. Frontend creates an `HttpAgent` with the delegation identity
6. The agent signs all canister calls with the user's session principal
7. Session expires after 24 hours (`maxTimeToLive`)
8. 15-minute idle timeout clears the AES key from memory and forces re-authentication

Each user gets a unique principal per application (principal-per-app isolation). The backend rejects the anonymous principal on all authenticated endpoints.

## Features

- Store logins, credit cards, secure notes, and images
- Password generator with 5-level strength meter (Weak / Fair / Good / Strong / CLOAK)
- Standalone password generator accessible from the sidebar
- TOTP authenticator with QR code scanning
- Secure sharing via time-limited, encrypted links (with optional self-destruct)
- CSV import (1Password, Bitwarden, Chrome, generic)
- Internationalization (English, German, French, Italian)
- Chrome extension
- Privacy mode (keyboard shortcut: P)
- PWA installable on desktop and mobile
- 15-minute idle timeout with full session teardown

## Security

- AES-256-GCM encryption, client-side only
- vetKeys threshold key derivation (production `key_1`)
- Anonymous principal rejection on all authenticated endpoints
- Rate limiting (30 writes/minute per principal)
- Per-user entry limits (500 entries, 50 shares)
- Encrypted data capped at 64 KiB per entry, IV validated at 12 bytes
- 24-hour session TTL
- Maintenance mode for safe canister upgrades (drains inflight vetKD calls)
- Idempotency keys on add_entry (5-minute dedup window)
- O(1) per-user share counter (no full-table scans)
- All JavaScript dependencies bundled locally (zero runtime CDN loads)
- Self-hosted fonts (no external requests)
- CSP: `script-src 'self' 'unsafe-inline'; font-src 'self'; connect-src` limited to IC endpoints only
- 90-day freezing threshold on both canisters
- Empty `pre_upgrade` hook (all data in stable structures, zero bricking risk)

## Canisters (Mainnet)

| Canister | ID | URL |
|----------|----|-----|
| Backend  | `gdwim-7aaaa-aaaad-qln5q-cai` | [Candid UI](https://a4gq6-oaaaa-aaaab-qaa4q-cai.icp0.io/?id=gdwim-7aaaa-aaaad-qln5q-cai) |
| Frontend | `gexoy-syaaa-aaaad-qln5a-cai` | [cloakencrypt.com](https://www.cloakencrypt.com) |

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [Rust](https://rustup.rs/) with `wasm32-unknown-unknown` target
- [icp-cli](https://github.com/dfinity/icp-cli): `npm install -g @icp-sdk/icp-cli @icp-sdk/ic-wasm`

### Start the local network

```bash
icp network start -d
```

This provisions a local replica with Internet Identity, `test_key_1`, and `key_1` for vetKeys.

### Deploy locally

```bash
icp deploy
```

Builds the Rust backend and deploys both canisters. The frontend is available at `http://<frontend-canister-id>.localhost:8000`.

### Deploy to mainnet

```bash
icp deploy -e ic
```

### Rebuild the JavaScript bundle

The frontend loads `@dfinity/agent`, `@dfinity/auth-client`, `@dfinity/candid`, `@dfinity/principal`, and `@dfinity/vetkeys` from a single local bundle (no CDN).

```bash
cd frontend/bundler
npm install
npm run build
```

Outputs `frontend/dist/assets/dfinity-bundle.js` (358 KB, 105 KB gzipped).

### Build the Chrome extension

```bash
cd cloak-extension
node build.js
```

Outputs to `cloak-extension/dist/`. The extension has a pinned ID (`kbdmaopdnnlfncooiijgadbmehamjimo`) via the manifest key field.

## Backend API

| Method | Type | Auth | Description |
|--------|------|------|-------------|
| `add_entry` | update | yes | Add encrypted vault entry (optional `dedup_key` for idempotent retries) |
| `update_entry` | update | yes | Update an existing entry |
| `delete_entry` | update | yes | Delete an entry |
| `get_entries` | query | yes | Get all entries for the caller |
| `get_entry_count` | query | no | Total entry count across all users |
| `get_user_entry_count` | query | yes | Entry count for the caller |
| `create_share` | update | yes | Create a time-limited encrypted share link |
| `get_share` | update | no | Retrieve a shared credential (triggers self-destruct if enabled) |
| `delete_share` | update | yes | Delete a share you created |
| `get_encrypted_vetkey` | update | yes | Get encrypted vetKey for the caller's vault |
| `get_vetkey_verification_key` | update | yes | Get the verification key for derived keys |
| `set_maintenance_mode` | update | controller | Enable/disable maintenance mode before upgrades |
| `is_maintenance_mode` | query | no | Check if maintenance mode is active |
| `whoami` | query | no | Return the caller's principal |

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Backend | Rust, ic-cdk 0.19, ic-vetkeys 0.6, ic-stable-structures 0.7 |
| Frontend | Vanilla JS (single HTML file), self-hosted Inter + JetBrains Mono fonts |
| Auth | Internet Identity (passkeys) |
| Encryption | AES-256-GCM (client-side), vetKeys threshold key derivation |
| Storage | StableBTreeMap + StableCell (stable memory, no pre_upgrade serialization) |
| Deployment | icp-cli, @dfinity/asset-canister v2.1.0 |

## License

MIT
