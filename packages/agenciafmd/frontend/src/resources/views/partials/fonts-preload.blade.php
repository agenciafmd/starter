@if(!Str::startsWith(request()->route()->getName(), ['frontend.html']))
  <link rel="preload"
        href="{{ mix('/fonts/Roboto-Light.woff2') }}"
        as="font"
        type="font/woff2"
        crossorigin>

  <link rel="preload"
        href="{{ mix('/fonts/Roboto-Regular.woff2') }}"
        as="font"
        type="font/woff2"
        crossorigin>

  <link rel="preload"
        href="{{ mix('/fonts/Roboto-Bold.woff2') }}"
        as="font"
        type="font/woff2"
        crossorigin>
@else
  <link rel="preload"
        href="/fonts/Roboto-Light.woff2"
        as="font"
        type="font/woff2"
        crossorigin>

  <link rel="preload"
        href="/fonts/Roboto-Regular.woff2"
        as="font"
        type="font/woff2"
        crossorigin>

  <link rel="preload"
        href="/fonts/Roboto-Bold.woff2"
        as="font"
        type="font/woff2"
        crossorigin>
@endif