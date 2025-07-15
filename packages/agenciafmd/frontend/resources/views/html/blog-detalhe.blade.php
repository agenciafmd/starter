@extends('frontend::html.master', [
'bodyClass' => 'blog-detail',
'critical' => 'blog-detalhe.css',
])

@section('title', 'Título de página')
@section('description', 'Descrição de página.')

@section('content')
<main>
  <section class="mb-block-small mb-md-block">
    <div class="container">

      <div class="mb-block-small">
        @php
        $breadcrumb = [
        'Home' => '/html',
        'Blog' => '/html/blog',
        'Lorem ipsum dolor sit amet consectetur suspendisse lacus' => '',
        ];
        @endphp

        <x-frontend::breadcrumb :list="$breadcrumb"/>
      </div>

      <div class="row gy-block-small">
        <div class="col-md-5 col-xl-6 align-self-center">
          <div class="vstack">
            <span class="fw-semibold text-primary">
              Categoria
            </span>
            <h1 class="mb-block-small h2">
              Lorem ipsum dolor sit amet consectetur suspendisse lacus
            </h1>
            <p class="">01 de janeiro de 2025</p>
          </div>
        </div>
        <div class="col-md-7 col-xl-6">

          {{--
          Resolução das imagens para utilização:
          mobile: 360x270 - ratio 3x2
          notebook: 633x422 - ratio 3x2
          desktop: 728x485 - ratio 3x2
          --}}

          <x-frontend::picture image="ratios/img-3x2.jpg"
                               title="titulo da imagem"
                               alt="descrição da imagem"
                               pictureClass="ratio ratio-3x2"
                               class="img-cover rounded"
                               hasBreakpoints
                               breakpointDesktopWidth="1400px"
                               breakpointDesktopSuffix="xl"
                               breakpointNotebookWidth="768px"
                               breakpointNotebookSuffix="lg"/>
        </div>
      </div>
    </div>
  </section>

  <section class="mb-block-small mb-md-block">
    <div class="container">
      <div class="row g-block-small gx-xl-block-large justify-content-between">
        <div class="col-md-7">
          <div class="mb-block-small wysiwyg">
            <h2>Título grande</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mattis morbi tellus purus
              tincidunt sagittis. Pellentesque quis feugiat pellentesque eget
              interdum. Dui ut at dignissim neque praesent ridiculus. Lectus
              arcu mauris elementum sit id ut eu metus feugiat.
            </p>
            <p>
              Vulputate suscipit turpis ultrices tristique iaculis penatibus.
              Malesuada a sem eget id. Sed a consectetur eget feugiat. Sed
              tincidunt purus aliquam lectus. Urna orci at mattis non. Sed
              faucibus consectetur quis et id bibendum dictum orci morbi.
              Natoque sem et enim ligula neque amet. Id diam porta id diam leo.
            </p>
          </div>

          <div class="mb-block-small wysiwyg">
            <h3>Título médio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mattis morbi tellus purus
              tincidunt sagittis. Pellentesque quis feugiat pellentesque eget
              interdum. Dui ut at dignissim neque praesent ridiculus. Lectus
              arcu mauris elementum sit id ut eu metus feugiat.
            </p>
            <p>
              Vulputate suscipit turpis ultrices tristique iaculis penatibus.
              Malesuada a sem eget id. Sed a consectetur eget feugiat. Sed
              tincidunt purus aliquam lectus. Urna orci at mattis non. Sed
              faucibus consectetur quis et id bibendum dictum orci morbi.
              Natoque sem et enim ligula neque amet. Id diam porta id diam leo.
            </p>
          </div>

          <div>

            <span class="mb-block-small d-block h4">Confira as imagens:</span>

            <div class="swiper-container">

              {{-- @formatter:off --}}
              @php
              $gallery = (object)[

                'video' => (object)[

                  (object)[
                    'src' => 'img-16x9',
                    'name' => 'Vídeo sobre área de lazer',
                    'link' => 'https://www.youtube.com/embed/lG7o0r-7coo?si=3Mha-V2mBcvJ536u',
                  ],

                ],

                'images' => (object)[

                  (object)[
                    'src' => 'img-16x9',
                    'name' => 'Lazer',
                  ],

                  (object)[
                    'src' => 'img-16x9',
                    'name' => 'Piscina',
                  ],

                ],
              ];
              @endphp
              {{-- @formatter:on --}}

              <x-frontend::sliders.articles-gallery gallery-name="articles-gallery"
                                                    :galleries="$gallery"/>

              <div class="row gy-block-small gy-md-block-medium justify-content-between align-items-center">

                <div class="col-md-auto order-md-2">

                  <x-frontend::swiper-buttons swiper-button-class="hstack gap-0h justify-content-end swiper-button-block"/>

                </div>
                <div class="col-md-auto order-md-1">
                  <x-frontend::link-share/>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-md-4">
          {{-- @formatter:off --}}
          @php
          $articles = [

          (object)[
          'name' => Str::squish('Lorem ipsum dolor sit amet consectetur suspendisse lacus'),
          'date' => '01 de janeiro de 2025',
          'subtitle' => 'Categoria',
          'route' => '/html/blog-detalhe',

          'image' => (object)[
          'src' => 'ratios/img-4x3.jpg',
          'name' => 'Imagem 4x3',
          'pictureClass' => 'ratio ratio-4x3',
          'imageClass' => 'img-cover',
          ],
          ],

          (object)[
          'name' => Str::squish('Lorem ipsum dolor sit amet consectetur suspendisse lacus'),
          'date' => '01 de janeiro de 2025',
          'subtitle' => 'Categoria',
          'route' => '/html/blog-detalhe',

          'image' => (object)[
          'src' => 'ratios/img-4x3.jpg',
          'name' => 'Imagem 4x3',
          'pictureClass' => 'ratio ratio-4x3',
          'imageClass' => 'img-cover',
          ],
          ],

          (object)[
          'name' => Str::squish('Lorem ipsum dolor sit amet consectetur suspendisse lacus'),
          'date' => '01 de janeiro de 2025',
          'subtitle' => 'Categoria',
          'route' => '/html/blog-detalhe',

          'image' => (object)[
          'src' => 'ratios/img-4x3.jpg',
          'name' => 'Imagem 4x3',
          'pictureClass' => 'ratio ratio-4x3',
          'imageClass' => 'img-cover',
          ],
          ],

          ];
          @endphp
          {{-- @formatter:on --}}
          <x-frontend::cards.card class="position-sticky top-0 bg-gray-100 h-auto shadow"
                                  card-body-class="p-block-small">

            <h5 class="fs-7 mb-2">Leia também:</h5>

            @foreach($articles as $article)

            <x-frontend::articles.item-no-image :article="$article"/>

            @if(!$loop->last)
            <hr class="my-1h">
            @endif

            @endforeach
          </x-frontend::cards.card>
        </div>
      </div>
    </div>
  </section>
</main>
@endsection
