# Cloak

Encrypted credential storage. Your passwords, cards, and secrets are encrypted on your device before they ever leave it. Only your passkey can unlock them.

**Live:** [cloakencrypt.com](https://www.cloakencrypt.com)

## How it works

Cloak runs entirely on the [Internet Computer](https://internetcomputer.org). There is no traditional server. Your vault is stored as encrypted data on a tamper-proof network that no single entity controls.

- **Passkey authentication** via Internet Identity. No master password to remember or lose.
- **Client-side encryption** using AES-256-GCM. The backend only ever sees ciphertext.
- **Threshold key derivation** via vetKeys. Your encryption key is derived on-demand by the network and delivered encrypted to your device. No node ever sees the raw key.

## Features

- Store logins, credit cards, secure notes, and images
- Password generator with strength meter
- TOTP authenticator with QR code scanning
- Secure sharing via time-limited, encrypted links
- CSV import (1Password, Bitwarden, Chrome, generic)
- Internationalization (English, German, French, Italian)
- Chrome extension
- Privacy mode (keyboard shortcut: P)
- PWA installable on desktop and mobile
- 15-minute idle timeout with full session teardown
- Search and filtering across all entry types

## Security

- AES-256-GCM encryption, client-side only
- vetKeys threshold key derivation (production `key_1`)
- Anonymous principal rejection on all endpoints
- Rate limiting (30 writes/minute per principal)
- Per-user entry limits (500 entries)
- 24-hour session TTL
- Maintenance mode for safe canister upgrades
- Idempotency keys on write endpoints
- CSP headers: no external scripts, no external fonts, no CDN dependencies
- All JavaScript dependencies bundled locally (zero runtime CDN loads)
- 90-day freezing threshold on both canisters

## Canisters

| Canister | ID |
|----------|----|
| Backend  | `gdwim-7aaaa-aaaad-qln5q-cai` |
| Frontend | `gexoy-syaaa-aaaad-qln5a-cai` |

## Build

### Backend

```bash
icp build backend
icp deploy backend -e ic
```

### Frontend

The frontend is a single HTML file with self-hosted fonts and a bundled JS dependency file.

To rebuild the dependency bundle:

```bash
cd frontend/bundler
npm install
npm run build
```

This outputs `frontend/dist/assets/dfinity-bundle.js`.

### Chrome Extension

```bash
cd cloak-extension
node build.js
```

Outputs to `cloak-extension/dist/`.

## License

MIT
