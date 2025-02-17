@props([
'link',
'title' => false,
'description' => false,
'gallery' => 'gallery',
])

<x-frontend::link link="{{ Vite::image($link) }}"
                  data-glightbox=""
                  data-gallery="{{ $gallery }}"
                  data-description="{{ $description }}"
                  title="{{ $title ? $title : $description }}"
                  aria-label="Link: {{ $title ? $title : $description }}"
                  {{ $attributes->merge(['class' => 'position-relative glightbox']) }}>
  {{ $slot }}
</x-frontend::link>

