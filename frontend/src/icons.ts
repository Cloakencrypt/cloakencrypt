/**
 * SVG icons used throughout the app.
 */

export const icons = {
  vault: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="2" fill="none"/>
    <circle cx="24" cy="24" r="2" fill="currentColor"/>
    <line x1="24" y1="16" x2="24" y2="20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="24" y1="28" x2="24" y2="32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="16" y1="24" x2="20" y2="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="28" y1="24" x2="32" y2="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="4" y="8" width="40" height="6" rx="4" fill="currentColor" opacity="0.15"/>
  </svg>`,

  vaultSmall: `<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="24" height="20" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="14" cy="14" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/>
    <circle cx="14" cy="14" r="1.5" fill="currentColor"/>
  </svg>`,

  plus: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,

  search: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.5"/>
    <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  copy: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M3 11V3a1 1 0 011-1h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  eye: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/>
  </svg>`,

  eyeOff: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="currentColor" stroke-width="1.5"/>
    <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  trash: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4h10l-1 10H4L3 4z" stroke="currentColor" stroke-width="1.5"/>
    <line x1="1" y1="4" x2="15" y2="4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M6 4V2h4v2" stroke="currentColor" stroke-width="1.5"/>
  </svg>`,

  edit: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 1.5l3 3L5 14H2v-3L11.5 1.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  </svg>`,

  close: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="3" x2="13" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="13" y1="3" x2="3" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,

  lock: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5"/>
    <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <circle cx="8" cy="11" r="1" fill="currentColor"/>
  </svg>`,

  key: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="38" r="12" stroke="currentColor" stroke-width="2.5" fill="none"/>
    <line x1="31" y1="31" x2="52" y2="10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="52" y1="10" x2="52" y2="18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="46" y1="16" x2="46" y2="22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="22" cy="38" r="4" fill="currentColor" opacity="0.2"/>
  </svg>`,

  shield: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1L2 4v4c0 3.3 2.6 6.4 6 7 3.4-.6 6-3.7 6-7V4L8 1z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M6 8l2 2 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  globe: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
    <ellipse cx="8" cy="8" rx="3" ry="6" stroke="currentColor" stroke-width="1"/>
    <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" stroke-width="1"/>
  </svg>`,
};
