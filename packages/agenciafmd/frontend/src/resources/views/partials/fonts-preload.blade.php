<link rel="preload"
      href="{{ !Str::startsWith(request()->route()->getName(), ['frontend.html']) ? mix('/fonts/Roboto-Light.woff2') : '/fonts/Roboto-Light.woff2' }}"
      as="font"
      type="font/woff2"
      crossorigin>

<link rel="preload"
      href="{{ !Str::startsWith(request()->route()->getName(), ['frontend.html']) ? mix('/fonts/Roboto-Regular.woff2') : '/fonts/Roboto-Regular.woff2' }}"
      as="font"
      type="font/woff2"
      crossorigin>

<link rel="preload"
      href="{{ !Str::startsWith(request()->route()->getName(), ['frontend.html']) ? mix('/fonts/Roboto-Bold.woff2') : '/fonts/Roboto-Bold.woff2' }}"
      as="font"
      type="font/woff2"
      crossorigin>