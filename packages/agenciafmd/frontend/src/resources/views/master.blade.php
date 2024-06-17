<!doctype html>
<html lang="{{ strtolower(str_replace('_', '-', app()->getLocale())) }}">
<head>
    <x-admix-analytics::gtm.head/>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5.0">
    <meta name="format-detection" content="telephone=no">

    @if(config('app.env') !== 'production')
        <meta name="robots" content="noindex,nofollow">
        <meta name="googlebot" content="noindex,nofollow">
    @endif

    <x-social-meta
        title="{{ $__env->yieldContent('title', 'A cultura come a estratégia no café da manhã') }} | {{ config('app.name') }}"
        description="{{ $__env->yieldContent('description') }}"
    />

    <meta name="csrf-token" content="{{ csrf_token() }}">

    @include('agenciafmd/frontend::partials.pwa')

    @if(config('app.env') === 'production')
        <script>
            console.log = function () {
            };
        </script>
    @endif

    <x-admix-analytics::site-verification/>

    {{-- refatorar --}}
    @if(isset($critical) && ($critical))
        <style>
            {!! @file_get_contents(public_path('/css/critical/' . $critical)) !!}
        </style>
    @endif

    @include('agenciafmd/frontend::partials.fonts-preload')

    <link rel="preload" href="{{ mix('/css/frontend.css') }}" as="style"
          onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet" href="{{ mix('/css/frontend.css') }}">
    </noscript>
    <script>
        /*! loadCSS rel=preload polyfill. [c]2017 Filament Group, Inc. MIT License */
        !function (t) {
            "use strict";
            t.loadCSS || (t.loadCSS = function () {
            });
            var e = loadCSS.relpreload = {};
            if (e.support = function () {
                var e;
                try {
                    e = t.document.createElement("link").relList.supports("preload")
                } catch (t) {
                    e = !1
                }
                return function () {
                    return e
                }
            }(), e.bindMediaToggle = function (t) {
                var e = t.media || "all";

                function a() {
                    t.addEventListener ? t.removeEventListener("load", a) : t.attachEvent && t.detachEvent("onload", a), t.setAttribute("onload", null), t.media = e
                }

                t.addEventListener ? t.addEventListener("load", a) : t.attachEvent && t.attachEvent("onload", a), setTimeout(function () {
                    t.rel = "stylesheet", t.media = "only x"
                }), setTimeout(a, 3e3)
            }, e.poly = function () {
                if (!e.support()) for (var a = t.document.getElementsByTagName("link"), n = 0; n < a.length; n++) {
                    var o = a[n];
                    "preload" !== o.rel || "style" !== o.getAttribute("as") || o.getAttribute("data-loadcss") || (o.setAttribute("data-loadcss", !0), e.bindMediaToggle(o))
                }
            }, !e.support()) {
                e.poly();
                var a = t.setInterval(e.poly, 500);
                t.addEventListener ? t.addEventListener("load", function () {
                    e.poly(), t.clearInterval(a)
                }) : t.attachEvent && t.attachEvent("onload", function () {
                    e.poly(), t.clearInterval(a)
                })
            }
            "undefined" != typeof exports ? exports.loadCSS = loadCSS : t.loadCSS = loadCSS
        }("undefined" != typeof global ? global : this);
    </script>

    <livewire:styles/>

    @stack('head')
</head>
<body class="{{ ($bodyClass) ?? '' }}">

<x-admix-analytics::gtm.body/>

@stack('header')

@yield('header', View::make('agenciafmd/frontend::partials.header'))

@yield('content')

@yield('footer', View::make('agenciafmd/frontend::partials.footer'))

@stack('footer')

<script src="{{ mix('/js/frontend.js') }}"></script>

<livewire:scripts/>

@include('agenciafmd/frontend::partials.message')

@stack('scripts')

@if (config('app.env') === 'local')
    <script id="__bs_script__">//<![CDATA[
        document.write("<script async src='//HOST:3000/browser-sync/browser-sync-client.js?v=2.18.6'><\/script>".replace("HOST", location.hostname));
        //]]>
    </script>
@endif

{{--
@if(config('app.env') !== 'local')
<script>
    pwaManager();
</script>
@endif
--}}

</body>
</html>
