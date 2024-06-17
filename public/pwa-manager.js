function pwaManager() {

    if (!('serviceWorker' in navigator)) {

        return;
    }

    if (navigator.serviceWorker.controller) {

        console.log(
            '[PWA Builder] active service worker found, no need to register');
        return;
    }

    // Register the ServiceWorker
    navigator.serviceWorker
        .register('/service-worker.js')
        .then(function (reg) {
            console.log('Service worker has been registered for scope: ' + reg.scope);
        })
        .catch(function (err) {
            console.log('ServiceWorker registration failed: ', err);
        });
}
