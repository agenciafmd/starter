@extends('frontend::html.master', [
'bodyClass' => 'blog-result -header-overlap',
'critical' => 'blog-resultado.css',
])

@section('title', 'Título de página')
@section('description', 'Descrição de página.')

@section('content')
<main>

  <section class="pb-block-small pb-md-block">

    <div class="container">

      <div class="mb-block-small">
        <div class="row align-items-center">
          <div class="col-md">
            @php
            $breadcrumb = [
            'Home' => '/html',
            'Blog' => '/html/blog',
            'Resultado de busca: “empreendimento”' => '',
            ];
            @endphp

            <x-frontend::breadcrumb :list="$breadcrumb"
                                    class="mb-0h my-md-0h"/>
          </div>
          <div class="col-12">
            <h1 class="h3 text-break">
              Resultado de busca: “empreendimento”
            </h1>
          </div>
        </div>
      </div>

      {{-- @formatter:off --}}
      @php
      $articles = [

      (object)[
        'name' => Str::squish('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        'subtitle' => 'Categoria',
        'date' => '01 de janeiro de 2025',
        'route' => '/html/blog-detalhe',
        'image' => (object)[
          'src' => 'ratios/img-4x3.jpg',
          'name' => 'Imagem 4x3',
          'pictureClass' => 'ratio ratio-4x3',
          'imageClass' => 'img-cover',
        ],
      ],

      (object)[
        'name' => Str::squish('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        'subtitle' => 'Categoria',
        'date' => '01 de janeiro de 2025',
        'route' => '/html/blog-detalhe',
        'image' => (object)[
          'src' => 'ratios/img-4x3.jpg',
          'name' => 'Imagem 4x3',
          'pictureClass' => 'ratio ratio-4x3',
          'imageClass' => 'img-cover',
        ],
      ],

      (object)[
        'name' => Str::squish('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        'subtitle' => 'Categoria',
        'date' => '01 de janeiro de 2025',
        'route' => '/html/blog-detalhe',
        'image' => (object)[
          'src' => 'ratios/img-4x3.jpg',
          'name' => 'Imagem 4x3',
          'pictureClass' => 'ratio ratio-4x3',
          'imageClass' => 'img-cover',
        ],
      ],

      (object)[
        'name' => Str::squish('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        'subtitle' => 'Categoria',
        'date' => '01 de janeiro de 2025',
        'route' => '/html/blog-detalhe',
        'image' => (object)[
          'src' => 'ratios/img-4x3.jpg',
          'name' => 'Imagem 4x3',
          'pictureClass' => 'ratio ratio-4x3',
          'imageClass' => 'img-cover',
        ],
      ],

      (object)[
        'name' => Str::squish('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        'subtitle' => 'Categoria',
        'date' => '01 de janeiro de 2025',
        'route' => '/html/blog-detalhe',
        'image' => (object)[
          'src' => 'ratios/img-4x3.jpg',
          'name' => 'Imagem 4x3',
          'pictureClass' => 'ratio ratio-4x3',
          'imageClass' => 'img-cover',
        ],
      ],

      (object)[
        'name' => Str::squish('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
        'subtitle' => 'Categoria',
        'date' => '01 de janeiro de 2025',
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

      @if(!count($articles))

      <x-frontend::alert message="Não foi encontrado nenhum artigo no momento"
                         class="alert-primary hstack justify-content-center"/>

      @else

      <div class="row gy-2h infinite-scroll">
        @foreach($articles as $article)

        @if(!Str::of(request()->getRequestUri())->startsWith('/html'))

        <div class="col-sm-6 col-md-4">

          {{--
          Resolução das imagens para utilização:
          mobile: 360x270 - ratio 3x4
          notebook: 348x261 - ratio 3x4
          desktop: 475x356 - ratio 3x4
          --}}

          <x-frontend::articles.item :article="$article"/>

        </div>

        @else

        <div class="col-sm-6 col-md-4">

          {{--
          Resolução das imagens para utilização:
          mobile: 360x270 - ratio 3x4
          notebook: 348x261 - ratio 3x4
          desktop: 475x356 - ratio 3x4
          --}}

          <x-frontend::articles.item :article="$article"/>

        </div>

        @endif
        @endforeach
      </div>

      {{--
      $articles->appends(request()->except('page'))->links('agenciafmd/frontend::partials.pagination')
      --}}

      {{-- para exemplo, isso já vem da partials.pagination acima --}}
      <div class="page-load-status mx-auto">
        <div class="infinite-scroll-request text-center">
          <x-frontend-icon name="ic-loading"
                           class="animation-spin-right ic-xl text-primary"/>
        </div>
        <p class="infinite-scroll-last"></p>
        <p class="infinite-scroll-error"></p>
      </div>

      @endif
    </div>

  </section>

</main>
@endsection
