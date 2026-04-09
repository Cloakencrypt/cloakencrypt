// Minimal service worker — enables PWA install prompt.
// Does NOT intercept fetch requests. IC's asset canister
// handles response certification and caching.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
