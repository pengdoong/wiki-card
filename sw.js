// The web build's service worker (see vite.config.ts), which makes it an installable PWA for the Microsoft Store.
// The game needs its server anyway, so it keeps only the built app shell: pages come from the network first, and the
// build's own files from the cache. The build fills in the version and the file list.
const CACHE = 'wiki-card-mukzlvar';
const FILES = ["./","./assets/index-CDvcuYo1.css","./assets/index-BXGQrt-s.js","./assets/web-vKGTwotn.js","./manifest.webmanifest","./icon-192.png","./icon-512.png","./privacy.html"];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match('./')));
    return;
  }
  event.respondWith(caches.match(event.request).then((hit) => hit ?? fetch(event.request)));
});
