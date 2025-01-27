<!doctype html>
<html lang="{{ strtolower(str_replace('_', '-', app()->getLocale())) }}">
<head>
    <x-frontend::gtm-head/>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @if(config('app.env') !== 'production')
        <meta name="robots" content="noindex,nofollow">
        <meta name="googlebot" content="noindex,nofollow">
    @else
        <script>
            console.log = function () {
            };
        </script>
    @endif
    <x-social-meta
        title="{{ $__env->yieldContent('title', 'A cultura come a estratégia no café da manhã') }} | {{ config('app.name') }}"
        description="{{ $__env->yieldContent('description') }}"
    />
    <x-frontend::pwa/>
    <x-frontend::fonts-preload/>
    <x-frontend::site-verification/>
    <x-frontend::critical-css :$critical/>

    @vite('resources/scss/frontend.scss')

    <livewire:styles/>

    @stack('head')
</head>
<body class="{{ ($bodyClass) ?? '' }}">

<x-frontend::gtm-body/>

@stack('header')

@yield('header', View::make('frontend::partials.header'))

@yield('content')

@yield('footer', View::make('frontend::partials.footer'))

@stack('footer')

@vite('resources/js/frontend-imports.js')

<livewire:scripts/>

@include('frontend::partials.message')

@stack('scripts')

{{--
@if(config('app.env') !== 'local')
<script>
    pwaManager();
</script>
@endif
--}}

</body>
</html>
