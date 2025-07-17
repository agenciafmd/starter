@props([
'galleries' => [],
'galleryName' => '',
])

<div class="mb-block-small swiper js-slider-articles-gallery">
  <div class="swiper-wrapper">

    @foreach($galleries->video as $video)

    <div class="swiper-slide">
      {{--
      Resolução das imagens para utilização:
      mobile: 360x360 - ratio 1x1
      notebook: 633x356 - ratio 16x9
      desktop: 820x461 - ratio 16x9
      --}}

      <x-frontend::glightbox.player-embed id="video-{{ Str::slug($galleryName) }}"
                                          link="https://www.youtube.com/embed/lG7o0r-7coo?si=3Mha-V2mBcvJ536u"
                                          image="ratios/{{ $video->src }}.jpg"
                                          class="bg-gradient rounded"
                                          title="{{ $video->name }}"
                                          alt="Video: {{ $video->name }}"
                                          aspect-ratio="ratio ratio-1x1 ratio-md-16x9"/>

      <p class="mt-1 px-1 fs-small text-dark">
        {{ $video->name }}
      </p>
    </div>

    @endforeach

    @foreach($galleries->images as $image)

    <div class="swiper-slide">
      {{--
      Resolução das imagens para utilização:
      mobile: 360x360 - ratio 1x1
      notebook: 541x304 - ratio 16x9
      desktop: 703x395 - ratio 16x9
      --}}

      <x-frontend::glightbox.image description="{{ $image->name }}"
                                   gallery="galeria-{{ Str::slug($galleryName) }}"
                                   link="ratios/{{ $image->src }}-xl@2x.jpg">
        <x-frontend::picture image="ratios/{{ $image->src }}.jpg"
                             title="{{ $image->name }}"
                             alt="Galeria de imagem: {{ $image->name }}"
                             pictureClass="ratio ratio-1x1 ratio-md-16x9"
                             class="bg-gradient img-cover rounded"
                             has-breakpoints="true"
                             breakpointDesktopWidth="1400px"
                             breakpointDesktopSuffix="xl"
                             breakpointNotebookWidth="768px"
                             breakpointNotebookSuffix="lg"/>
        <p class="mt-1 px-1 fs-small text-dark">
          {{ $image->name }}
        </p>
      </x-frontend::glightbox.image>
    </div>

    @endforeach
  </div>
</div>

@push('scripts')

<script type="module"
        src="{{ Vite::asset('resources/js/components/sliders/articles.js') }}"></script>

@endpush