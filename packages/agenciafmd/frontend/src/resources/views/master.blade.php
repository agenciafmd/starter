<!doctype html>
<html lang="{{ strtolower(str_replace('_', '-', app()->getLocale())) }}">
<head>
    @if(config('services.google.tagmanager'))
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','{{ config('services.google.tagmanager') }}');</script>
        <!-- End Google Tag Manager -->
    @endif
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title', 'Home') | {{ config('app.name') }}</title>
    <meta name="description" content="@yield('description', 'Página ')">
    <meta name="author" content="@yield('author', 'FMD')">

    <meta property="og:title" content="@yield('title', '') | {{ config('app.name') }}" />
    <meta property="og:url" content="@yield('url', request()->fullUrl())" />
    <meta property="og:image" content="@yield('image', url('/images/logo.png'))" />
    <meta property="og:site_name" content="{{ config('app.name') }}" />

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="{{ config('pwa.manifest.name') }}">
    <link rel="apple-touch-startup-image" href="/images/launch-640x1136.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="/images/launch-750x1294.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="/images/launch-1242x2148.png"
          media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="/images/launch-1125x2436.png"
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="/images/launch-1536x2048.png"
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="/images/launch-1668x2224.png"
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-startup-image" href="/images/launch-2048x2732.png"
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">
    <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#6F6F6F">
    <meta name="theme-color" content="{{ config('pwa.manifest.theme_color') }}">

    <link href="{{ mix('/css/frontend.css') }}" rel="stylesheet">

    <script>
        @if(config('app.env') === 'production')
            console.log = function() {};
        @endif

            //TODO: mover para o js
        if ('serviceWorker' in navigator) {
          if (navigator.serviceWorker.controller) {
            console.log(
                '[PWA Builder] active service worker found, no need to register')
          } else {
            //Register the ServiceWorker
            navigator.serviceWorker.register('{{ route('frontend.pwa.sw') }}')
                .then(function (reg) {
                  console.log('Service worker has been registered for scope: ' + reg.scope);
                }).catch(function (err) {
              console.log('ServiceWorker registration failed: ', err);
            });
          }

          window.addEventListener('load', function () {
            if (!navigator.onLine) {
              $("<style type='text/css'>" +
                  " .is-online { display: none } " +
                  " .is-offline { display: block } " +
                  "</style>").appendTo("head");
            }
          });
        }
    </script>

    <link rel="manifest" href="{{ route('frontend.pwa.manifest') }}">

    @if(config('pwa.manifest.app_id') && config('app.env') === 'production')
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
        <script>
            var OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
                OneSignal.init({
                    appId: "{{ config('pwa.manifest.app_id') }}",
                });
            });
        </script>
    @endif

    @stack('head')
</head>
<body>
@if(config('services.google.tagmanager'))
    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id={{ config('services.google.tagmanager') }}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
@endif

@stack('header')

@include('agenciafmd/frontend::partials.header')

@yield('content')

@include('agenciafmd/frontend::partials.footer')

@stack('footer')

<script src="{{ mix('/js/frontend.js') }}"></script>

@include('agenciafmd/frontend::partials.message')

@stack('scripts')
@if (config('app.env') === 'local')
<script id="__bs_script__">//<![CDATA[
document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.6'><\/script>".replace("HOST", location.hostname));
//]]>
</script>
@endif
</body>
</html>
