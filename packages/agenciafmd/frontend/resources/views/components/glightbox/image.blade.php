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
                  {{ $attributes->merge(['class' => 'position-relative text-decoration-none glightbox text-primary text-secondary-hover']) }}>
  {{ $slot }}

  <div class="m-0hq position-absolute top-0 end-0 ic-glightbox-zoom">
    <x-frontend-icon name="ic-ui-expand" class="" />
  </div>
</x-frontend::link>

