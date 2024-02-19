const applicationName = 'cache-v1';
const assets = [
  '/',
  '/html',
  '/css/frontend.css',
  '/js/frontend.js',
];

self.addEventListener('install', (e) => {

  console.log('[Service Worker] Install');

  e.waitUntil(
      (async () => {
        const cache = await caches.open(applicationName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(assets);
      })(),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
      (async () => {
        const resource = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${ e.request.url }`);
        if (resource) {
          return resource;
        }
        const response = await fetch(e.request);
        const cache = await caches.open(applicationName);
        console.log(`[Service Worker] Caching new resource: ${ e.request.url }`);
        await cache.put(e.request, response.clone());
        return response;
      })(),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(
            keyList.map((key) => {
              if (key === applicationName) {
                return;
              }
              return caches.delete(key);
            }),
        );
      }),
  );
});

//https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers

// self.addEventListener("install", installEvent => {
//   installEvent.waitUntil(
//       caches.open(applicationName).then(cache => {
//         cache.addAll(assets)
//       }),
//   );
// });
//
// self.addEventListener("fetch", fetchEvent => {
//   fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//       }),
//   );
// });
