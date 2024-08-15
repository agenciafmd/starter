<!-- PWA Configuration -->
<link rel="manifest" href="{{ asset('/manifest.json') }}">
<link rel="apple-touch-icon" sizes="192x192" href="{{ asset('/images/apple-touch-icon.png') }}">
<link rel="shortcut icon" href="{{ asset('/images/favicon.ico') }}" type="image/x-icon">
<link rel="mask-icon" href="{{ asset('/images/safari-pinned-tab.svg') }}" color="#FFFFFF">
<meta name="msapplication-TileColor" content="#FFFFFF">
<meta name="theme-color" content="#FFFFFF">

<!-- IOS -->
<meta name="mobile-web-app-capable" content="yes"/>
<meta name="apple-mobile-web-app-title" content="{{ config('app.name') }}"/>
<meta name="apple-mobile-web-app-status-bar-style" content="default"/>
<!-- End PWA Configuration -->
