<!doctype html>
<html lang="{{ strtolower(str_replace('_', '-', app()->getLocale())) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title', '') | {{ config('app.name') }}</title>
    <meta name="description" content="@yield('description', '')">
    <meta name="author" content="@yield('author', 'F&MD')">

    <meta property="og:title" content="@yield('title', '') | {{ config('app.name') }}"/>
    <meta property="og:url" content="@yield('url', request()->fullUrl())"/>
    <meta property="og:image" content="@yield('image', url('/images/logo.png'))"/>
    <meta property="og:site_name" content="{{ config('app.name') }}"/>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- inicio PWA -->
    <link rel="manifest" href="/manifest.json">
    <link rel="apple-touch-icon" sizes="192x192" href="/images/apple-touch-icon.png">
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
    <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#FFFFFF">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="theme-color" content="{{ config('pwa.manifest.theme_color') }}">

    <!-- IOS -->
    <meta name="mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-title" content="{{ config('pwa.manifest.name') }}"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
    <!-- fim PWA -->

    <link rel="preload" href="/css/frontend.css" as="style"
          onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet" href="/css/frontend.css">
    </noscript>
    <script>
        /*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
        !function(t){"use strict";t.loadCSS||(t.loadCSS=function(){});var e=loadCSS.relpreload={};if(e.support=function(){var e;try{e=t.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),e.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.addEventListener?t.removeEventListener("load",a):t.attachEvent&&t.detachEvent("onload",a),t.setAttribute("onload",null),t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},e.poly=function(){if(!e.support())for(var a=t.document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n];"preload"!==o.rel||"style"!==o.getAttribute("as")||o.getAttribute("data-loadcss")||(o.setAttribute("data-loadcss",!0),e.bindMediaToggle(o))}},!e.support()){e.poly();var a=t.setInterval(e.poly,500);t.addEventListener?t.addEventListener("load",function(){e.poly(),t.clearInterval(a)}):t.attachEvent&&t.attachEvent("onload",function(){e.poly(),t.clearInterval(a)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:t.loadCSS=loadCSS}("undefined"!=typeof global?global:this);
    </script>

    @livewireStyles

    @stack('head')
</head>
<body class="{{ ($bodyClass) ?? '' }}">

@stack('header')

@yield('header', View::make('agenciafmd/frontend::html.partials.header'))

@yield('content')

@yield('footer', View::make('agenciafmd/frontend::html.partials.footer'))

@stack('footer')

<script src="/js/frontend.js"></script>

@livewireScripts

@include('agenciafmd/frontend::html.partials.message')

@stack('scripts')

@if (config('app.env') === 'local')
    <script id="__bs_script__">//<![CDATA[
        document.write("<script async src='//HOST:3000/browser-sync/browser-sync-client.js?v=2.18.6'><\/script>".replace("HOST", location.hostname));
        //]]>
    </script>
@endif
</body>
</html>
