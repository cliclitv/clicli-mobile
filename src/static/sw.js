var cacheStorageKey = 'minimal-pwa-1';

var cacheList = [
  '/',
  'index.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheStorageKey)
      .then(cache => cache.addAll(cacheList))
      .then(() => self.skipWaiting())
  )
});


self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(function (response) {
          if (response) {
            return response
          }
          return fetch(e.request)
        }
      )
  )
})
