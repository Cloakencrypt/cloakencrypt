# IC Vault

A password manager built on the Internet Computer using Internet Identity for authentication and vetKeys for client-side encryption.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Browser (Frontend)                       │
│                                                                 │
│  ┌──────────────┐  ┌───────────────┐  ┌──────────────────────┐ │
│  │   Internet    │  │  Transport    │  │   AES-256-GCM        │ │
│  │   Identity    │  │  Key Pair     │  │   Encrypt/Decrypt    │ │
│  │   (Passkey)   │  │  (Ephemeral)  │  │   (Client-side only) │ │
│  └──────┬───────┘  └──────┬────────┘  └──────────┬───────────┘ │
│         │                 │                       │             │
└─────────┼─────────────────┼───────────────────────┼─────────────┘
          │                 │                       │
          ▼                 ▼                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Backend Canister (Rust)                      │
│                                                                 │
│  ┌──────────────┐  ┌───────────────┐  ┌──────────────────────┐ │
│  │  Auth Guard   │  │  KeyManager   │  │   StableBTreeMap     │ │
│  │  (Principal)  │  │  (vetKD API)  │  │   (Encrypted blobs)  │ │
│  └──────────────┘  └──────┬────────┘  └──────────────────────┘ │
│                           │                                     │
└───────────────────────────┼─────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│              IC Threshold Key Infrastructure                     │
│                                                                 │
│  13+ subnet nodes cooperate to derive keys via vetKD protocol.  │
│  No single node ever sees the raw key.                          │
└─────────────────────────────────────────────────────────────────┘
```

## How It Works

1. User authenticates with a passkey via Internet Identity (no master password)
2. Frontend generates an ephemeral transport key pair
3. Backend requests a vetKey derivation from the subnet, keyed on the user's principal
4. The derived key is encrypted under the transport public key and returned
5. Frontend decrypts the vetKey and derives an AES-256-GCM symmetric key
6. All vault entries are encrypted/decrypted locally in the browser
7. The canister only ever stores ciphertext

## Security Properties

- **Zero-knowledge storage:** The canister never sees plaintext passwords
- **No master password:** Authentication is passkey-based via Internet Identity
- **Threshold key derivation:** No single party holds the master key
- **Deterministic recovery:** Same principal always derives the same key (multi-device support)
- **Per-user isolation:** Different principals derive different keys

## Prerequisites

- [icp CLI](https://docs.internetcomputer.org/) (`npm install -g @icp-sdk/icp-cli @icp-sdk/ic-wasm`)
- Rust with `wasm32-unknown-unknown` target (`rustup target add wasm32-unknown-unknown`)
- Node.js >= 22

## Quick Start

```bash
# Start local network with Internet Identity
icp network start -d

# Deploy all canisters
icp deploy

# Open in browser
# Visit the frontend canister URL shown in the deploy output
```

## Project Structure

```
ic-vault/
├── icp.yaml              # ICP project configuration
├── Cargo.toml            # Rust workspace
├── backend/
│   ├── Cargo.toml        # Backend dependencies (ic-vetkeys, ic-stable-structures)
│   └── src/
│       └── lib.rs        # Canister: vetKey management + encrypted vault storage
└── frontend/
    ├── package.json      # Frontend dependencies (@dfinity/vetkeys, @icp-sdk/auth)
    ├── index.html        # Entry point
    └── src/
        ├── main.ts       # App shell, routing, UI rendering
        ├── crypto.ts     # vetKey derivation, AES encrypt/decrypt
        ├── icons.ts      # SVG icons
        └── styles.css    # Dark theme design system
```

## Production Deployment

For mainnet deployment, update the key name in `backend/src/lib.rs`:

```rust
// Change from test_key_1 to key_1
name: "key_1".to_string(),
```

Then deploy:

```bash
icp deploy -e ic
```
