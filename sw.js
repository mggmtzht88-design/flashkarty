const CACHE = 'flashkarty-v1';
const FILES = [
  './flashkarty.html',
  'https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;700&family=JetBrains+Mono:wght@300;400&display=swap',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
