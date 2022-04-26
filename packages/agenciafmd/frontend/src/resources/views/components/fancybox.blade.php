@props([
    'link',
    'gallery',
    'title',
])

<a href="{{ $link }}"
   data-fancybox="{{ $gallery }}"
   title="{{ $title }}"
   data-caption="{{ $title }}"
   {{ $attributes }}>
    {{ $slot }}
</a>

