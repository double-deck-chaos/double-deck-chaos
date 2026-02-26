const CACHE_NAME = 'ddc-v1';
const ASSETS = [
  'index.html',
  'ddc.html',
  'cmm.html',
  'crjr.html',
  'wild-chaos.png',
  'joker-chaos.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
