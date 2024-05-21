const applicationName = `cache-fmd:versionPWA`;
const assets = [
  '/',
  '/css/frontend.css',
  '/js/frontend.js',
  '/vendor/livewire/livewire.js',
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

        if (e.request.method !== 'GET') {

          return fetch(e.request);
        }

        try {

          //usado para fazer uma solicitação de rede para a URL especificada na solicitação
          const networkResponse = await fetch(e.request);

          if (networkResponse && networkResponse.status === 200) {
            //usado para abrir um cache específico pelo seu nome
            const cache = await caches.open(applicationName);
            cache.put(e.request, networkResponse.clone());
            console.log(`[Service Worker] Caching new resource: ${ e.request.url }`);
            return networkResponse;
          }

        } catch (err) {
          //usado para verificar se existe uma resposta em cache para uma solicitação específica
          const cachedResponse = await caches.match(e.request);

          if (cachedResponse) {

            console.log(`[Service Worker] Returning cached resource: ${ e.request.url }`);
            return cachedResponse;
          }

          console.log(`[Service Worker] Resource not found in cache: ${ e.request.url }`);

          return new Response(
              'You are offline and this resource is not cached.',
              {
                status: 503,
                statusText: 'Service Unavailable',
              },
          );
        }
      })(),
  );
});

self.addEventListener('activate', (e) => {

  e.waitUntil(
      caches.keys().then((keyList) => {

        return Promise.all(
            keyList.map((key) => {

              if (key !== applicationName) {

                console.log(`[Service Worker] Deleting old cache: ${ key }`);
                return caches.delete(key);
              }
            }),
        );
      }),
  );
});

