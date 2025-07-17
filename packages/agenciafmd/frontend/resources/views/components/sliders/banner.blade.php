@props([
'banners' => [],
])

<section id="banner"
         class="banner-slider overflow-hidden">

  <div class="swiper-container">

    <div id="js-slider-banners"
         class="swiper overflow-visible overflow-md-hidden">
      <div class="swiper-wrapper">
        @foreach($banners as $banner)

        <div class="swiper-slide">
          <div class="grid-default h-100">

            <div class="grid-default-background vstack flex-row banner-slider-img {{ $banner->content ? 'pseudo-gradient-banner' : '' }}">
              {{--
              Resolução das imagens para utilização:
              mobile: 360x584
              notebook: 1351x544
              desktop: 1905x1024
              --}}
              <x-frontend::picture image="{{ $banner->image->src }}"
                                   title="{{ $banner->image->name }}"
                                   alt="{{ $banner->image->name }}"
                                   pictureClass="ratio ratio-2x3 ratio-md-21x9"
                                   class="img-cover"
                                   has-breakpoints="true"
                                   breakpointDesktopWidth="1400px"
                                   breakpointDesktopSuffix="xl"
                                   breakpointNotebookWidth="768px"
                                   breakpointNotebookSuffix="lg"/>
            </div>
            @if($banner->content)
            <div class="grid-default-content position-relative vstack pe-none">

              <div class="vstack flex-grow-1 justify-content-end">
                <div class="container">
                  <div class="row">
                    <div class="col-md-7 col-xl-6">
                      <div class="mb-block-small pe-auto">

                        <h2 class="text-primary">
                          {{ $banner->content->name }}
                        </h2>
                        <p class="mb-block-small text-primary">
                          {{ $banner->content->subtitle }}
                        </p>
                        @if(!empty($banner->content->details))
                        <div class="row gy-2 align-items-center">
                          <div class="col-md-9">

                            <x-frontend::list-icon sanitizeList
                                                   icon-class="ic-xxsm text-primary"
                                                   class="mb-0 row gx-0 gy-1 fs-small text-primary"
                                                   list-class="col-md-6"
                                                   :content="$banner->content->details"/>
                          </div>
                          <div class="col-md-3">
                            <x-frontend::link link="{{ $banner->content->route }}"
                                              label="Confira"
                                              title="Ir para {{ $banner->content->name }}"
                                              aria-label="Link para {{ $banner->content->name }}"
                                              class="btn btn-primary"/>
                          </div>
                        </div>
                        @endif
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            @endif

          </div>
        </div>

        @endforeach

      </div>
      <div class="mb-block-small position-absolute bottom-0 start-0 end-0 pe-none">
        <div class="container">
          <x-frontend::swiper-buttons swiper-button-class="hstack gap-0h justify-content-end swiper-button-block pe-auto"
                                      color="swiper-button-invert"/>
        </div>
      </div>

    </div>
  </div>
</section>

@push('scripts')

<script type="module"
        src="{{ Vite::asset('resources/js/components/sliders/banners.js') }}"></script>

@endpush