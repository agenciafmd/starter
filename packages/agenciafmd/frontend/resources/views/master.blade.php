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

    @include('frontend::partials.pwa')

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

    @include('frontend::partials.fonts-preload')

    @vite('resources/scss/frontend.scss')

    <livewire:styles/>

    @stack('head')
</head>
<body class="{{ ($bodyClass) ?? '' }}">

<x-admix-analytics::gtm.body/>

@stack('header')

@yield('header', View::make('frontend::partials.header'))

@yield('content')

@yield('footer', View::make('frontend::partials.footer'))

@stack('footer')

@vite('resources/js/frontend-imports.js')

<livewire:scripts/>

@include('agenciafmd/frontend::partials.message')

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
