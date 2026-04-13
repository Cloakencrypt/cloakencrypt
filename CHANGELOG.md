# Changelog

All notable changes to Cloak are documented here.

## v0.14.0 (2026-04-13)

### Added
- Canister Health section in Settings: cycle balance, estimated runway, stored entries count, active shares count
- Health progress bar with color coding (green, orange, red based on cycle balance)
- Canister ID with link to IC Dashboard for transparency
- Support Cloak: ICP donation address displayed with copy button
- Compact cycle health indicator in the app footer

### Changed
- Replaced drop shadow borders with thin ink borders on all containers
- Background color split: body #bfbbb3, app card #c8c4bc for better visual separation
- Removed decorative corner registration marks
- Removed Medium social link from footers

## v0.13.1 (2026-04-13)

### Added
- Export all vault entries as a CSV file from Settings
- Exported file includes all entry types (logins, cards, notes)
- File is decrypted and generated entirely in your browser
- Warning displayed about plaintext passwords in the export

## v0.13.0 (2026-04-13)

### Added
- Documentation site accessible at /docs/ within the app
- Book icon in footer linking to documentation
- Official Cloak logo (hooded lock) on login screen, app header, and privacy lock screen
- Social links in footer: X, GitHub, Medium
- Password generator available as a standalone view in the sidebar
- Password generator appears inline below the password field when adding or editing entries
- 5-level password strength indicator: Weak, Fair, Good, Strong, CLOAK
- Password auto-generates when opening the generator (no extra click needed)
- Changing length, characters, or mode instantly regenerates the password
- GitHub source link and "What's New" link in Settings
- Version number displayed in Settings

### Changed
- Sign in now uses id.ai (new Internet Identity URL)
- Settings and Generator views use the full screen width
- Privacy lock screen shows the Cloak logo instead of a generic lock icon
- Modal popups scroll content while keeping corner frames and buttons fixed at the edges

### Fixed
- Settings page showing a vault entry instead of settings content
- "New Item" button causing an error after recent updates
- Password generator not producing a result until a second click

## v0.12.0 (2026-04-10)

### Added
- PWA support: install Cloak as an app on desktop and mobile
- Download icon in footer with install prompt
- Maintenance mode for safe updates
- Duplicate entry prevention on network retries

### Changed
- All code libraries bundled locally (no external CDN loading)
- Fonts self-hosted (no requests to Google)
- Rotating taglines shortened to fit all screen sizes
- Improved layout on small desktop and tablet screens
- Hex data panel fills the full header area

### Fixed
- Layout breaking between 769px and 1023px screen widths
- Text overflowing in the rotating tagline area

### Security
- 90-day freezing threshold on both canisters
- Tightened content security policy
- Completed security audit (0 critical, 0 high findings)

## v0.11.0 (2026-04-02)

### Added
- Initial release
- Sign in with passkey (fingerprint, face, or PIN)
- Encrypted storage for logins, credit cards, secure notes, and images
- TOTP authenticator with QR code scanning
- Secure sharing with time-limited links and optional self-destruct
- Import from 1Password, Bitwarden, Chrome, or any CSV
- Chrome extension
- Privacy mode (press P to hide all data)
- Available in English, German, French, and Italian
- 15-minute auto-lock after inactivity
- Custom domain: cloakencrypt.com
