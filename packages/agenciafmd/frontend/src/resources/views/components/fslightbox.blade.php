@props([
'link',
'gallery' => 'gallery',
'title',
])

<a href="{{ $link }}"
   data-fslightbox="{{ $gallery }}"
   title="{{ $title }}"
        {{ $attributes }}>
    {{ $slot }}
</a>

