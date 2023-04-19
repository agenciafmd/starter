const applicationName = "fmd-starter";
const assets = [
  "/",
  "/index.html",
  "/css/frontend.css",
  "/js/frontend.js",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
      caches.open(applicationName).then(cache => {
        cache.addAll(assets)
      }),
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      }),
  );
});
