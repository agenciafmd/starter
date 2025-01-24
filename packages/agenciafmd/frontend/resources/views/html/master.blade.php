<!doctype html>
<html lang="{{ strtolower(str_replace('_', '-', app()->getLocale())) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5.0">

    <title>@yield('title', '') | {{ config('app.name') }}</title>
    <meta name="description" content="@yield('description', '')">
    <meta name="author" content="@yield('author', 'F&MD')">

    <meta property="og:title" content="@yield('title', '') | {{ config('app.name') }}"/>
    <meta property="og:url" content="@yield('url', request()->fullUrl())"/>
    <meta property="og:image" content="@yield('image', url('/images/logo.png'))"/>
    <meta property="og:site_name" content="{{ config('app.name') }}"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <x-frontend::pwa/>
    <x-frontend::fonts-preload/>

    @vite('resources/scss/frontend.scss')

    <livewire:styles/>

    @stack('head')
</head>
<body class="{{ ($bodyClass) ?? '' }}">

@stack('header')

@yield('header', View::make('frontend::html.partials.header'))

@yield('content')

@yield('footer', View::make('frontend::html.partials.footer'))

@stack('footer')

@vite('resources/js/frontend-imports.js')

<livewire:scripts/>

@include('frontend::html.partials.message')

@stack('scripts')
</body>
</html>
