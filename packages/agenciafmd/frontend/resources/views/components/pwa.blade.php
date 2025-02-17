<!-- PWA Configuration -->
@if(file_exists(public_path('manifest.json')))
<link rel="manifest" href="{{ asset('/manifest.json') }}">
@endif
<link rel="apple-touch-icon" sizes="192x192" href="{{ Vite::image('icons/apple-touch-icon.png') }}">
<link rel="shortcut icon" href="{{ Vite::image('icons/favicon.ico') }}" type="image/x-icon">
<link rel="mask-icon" href="{{ Vite::image('icons/safari-pinned-tab.svg') }}" color="#FFFFFF">
<meta name="msapplication-TileColor" content="#FFFFFF">
<meta name="theme-color" content="#FFFFFF">

<!-- IOS -->
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-title" content="{{ config('app.name') }}"/>
<meta name="apple-mobile-web-app-status-bar-style" content="default"/>
<!-- End PWA Configuration -->
