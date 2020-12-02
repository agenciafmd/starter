@if(config('app.env') === 'production')
    console.log = function() {};
@endif

//This is the service worker with the combined offline experience (Offline page + Offline copy of pages)
var CACHE_NAME = '{{ $name }}-{{ date("YmdHis", filemtime(public_path('mix-manifest.json'))) }}';
var urlsToCache = [
    '{!! implode("', '", $files) !!}'
];

//Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener('install', function(event) {
    event.waitUntil(preLoad());
});

var preLoad = function(){
    console.log('[PWA Builder] Install Event processing');
    return caches.open(CACHE_NAME).then(function(cache) {
        console.log('[PWA Builder] Cached index and offline page during Install');
        return cache.addAll(urlsToCache);
    });
}

self.addEventListener('fetch', function(event) {
    console.log('[PWA Builder] The service worker is serving the asset.');
    var clone = event.request.clone();
    if(clone.method !== 'GET') {
        return false;
    }
    event.respondWith(checkResponse(clone).catch(function() {
        return returnFromCache(event.request)}
    ));
    event.waitUntil(addToCache(event.request));
});

var checkResponse = function(request) {
    return new Promise(function(fulfill, reject) {
        fetch(request).then(function(response){
            if(response.status !== 404) {
                fulfill(response)
            } else {
                reject()
            }
        }, reject)
    });
};

var addToCache = function(request){
    return caches.open(CACHE_NAME).then(function (cache) {
        return fetch(request).then(function (response) {
            console.log('[PWA Builder] add page to offline ' + response.url)
            return cache.put(request, response);
        });
    });
};

var returnFromCache = function(request){
    return caches.open(CACHE_NAME).then(function (cache) {
        return cache.match(request).then(function (matching) {
            if(!matching || matching.status == 404) {
                return cache.match('/offline')
            } else {
                return matching
            }
        });
    });
};

self.addEventListener('activate', function (event) {
    event.waitUntil(function () {
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        });
    });
});
