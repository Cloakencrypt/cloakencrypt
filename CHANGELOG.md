# Changelog

All notable changes to Cloak are documented here.

## v0.12.0 (2026-04-10)

### Added
- Password generator in sidebar menu (standalone, outside of item creation)
- Password generator inline under password field in add/edit modal
- 5-level password strength meter: Weak, Fair, Good, Strong, CLOAK
- Color-coded strength bars (red, orange, yellow, green, ink)
- Live password regeneration on every option change
- Trust badges on login screen
- Social links in footer (X, GitHub, Medium)
- PWA install icon in both login and app footers
- App logo on privacy lock screen
- App logo on login screen (top right) and app header bar
- Maintenance mode for safe canister upgrades
- Idempotency keys on add_entry (5-minute dedup window)
- O(1) per-user share counter (replaced O(n) full-table scan)
- Changelog

### Changed
- Settings and Generator views now use full width (hide entry list column)
- Modal scrolling moved to inner content (corner marks stay at card edges)
- Rotating taglines shortened to fit all viewport sizes
- Desktop breakpoint lowered from 1023px to 768px for full-bleed mobile layout
- Hex data panel font increased to fill header box
- All @dfinity dependencies bundled locally (removed esm.sh CDN)
- Google Fonts replaced with self-hosted woff2 files
- CSP tightened: no external scripts, fonts, or CDN sources
- Idle timeout now clears AES key, vault data, and forces full re-auth

### Fixed
- Modal corner registration marks appearing in middle of window on overflow
- Meta strip text overflow on narrow viewports
- Login screen layout breaking at 769-1023px viewport widths
- Favicon background color mismatch with app header

### Security
- Freezing threshold set to 90 days on both canisters
- worker-src and manifest-src added to CSP for PWA support
- StableCell error handling comments corrected
- All 11 ICP security skills audit completed (0 critical, 0 high)

## v0.11.0 (2026-04-02)

### Added
- Initial release
- Passkey authentication via Internet Identity
- Client-side AES-256-GCM encryption with vetKeys
- Vault entries: logins, credit cards, secure notes, images
- TOTP authenticator with QR scanning
- Secure sharing with time-limited encrypted links
- Self-destruct shares
- CSV import (1Password, Bitwarden, Chrome, generic)
- Chrome extension
- Privacy mode (P key)
- Internationalization (EN, DE, FR, IT)
- Rate limiting (30 writes/min per principal)
- Per-user entry limits (500 entries)
- Custom domain: cloakencrypt.com
