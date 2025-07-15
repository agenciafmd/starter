@extends('frontend::html.master', [
'bodyClass' => 'blog',
'critical' => 'blog.css',
])

@section('title', 'Título de página')
@section('description', 'Descrição de página.')

@section('content')
<main>

  <section class="pb-block-small pb-md-block">

    <div class="py-block-small py-md-block bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h1 class="text-center">Blog</h1>
            <p class="mb-block-small text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus at cupiditate expedita inventore quam rem sit velit
              vitae voluptas voluptatum. Ad consequuntur dignissimos dolorem
              maiores minus quibusdam tenetur voluptate voluptatem.
            </p>
          </div>
          <div class="col-md-6">
            <form wire:submit.prevent="submit"
                  class="needs-validation"
                  novalidate>
              <div class="position-relative">

                <select wire:model.lazy="search"
                        type="text"
                        id="search-select"
                        placeholder="Pesquisar"
                        aria-label="busca"
                        class="ps-2hq pe-5hq @error('search-select') is-invalid @enderror form-control form-control-lg -bg-transparent -border-0 -shadow-none js-tom-select">
                  <option value=""></option>
                  @php
                  $articles = [

                  (object)[
                  'name' => 'Artigo 1',
                  ],

                  (object)[
                  'name' => 'Artigo 2',
                  ],

                  (object)[
                  'name' => 'Artigo 3',
                  ],
                  ]
                  @endphp
                  @foreach($articles as $search)
                  <option value="{{ $search->name }}"
                          data-name="{{ $search->name }}">
                    {{ $search->name }}
                  </option>
                  @endforeach
                </select>

                <x-frontend-icon name="ic-ui-search"
                                 class="ms-0hq text-primary ic-xxsm position-absolute top-50 translate-middle-y start-0 z-1"/>

                <button type="submit"
                        wire:loading.attr="disabled"
                        wire:target="submit"
                        aria-label="enviar formulário"
                        class="me-0q btn btn-primary position-absolute top-50 translate-middle-y end-0 z-1">
                  <span wire:loading.remove
                        wire:target="submit">Buscar
                  </span>
                  <span wire:loading
                        wire:target="submit">
                    <span class="spinner-grow spinner-grow-sm ms-0h"
                          role="status"
                          aria-hidden="true"></span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container">

      <div class="mb-block-small">
        <div class="row align-items-center">
          <div class="col-md">
            @php
            $breadcrumb = [
            'Home' => '/html',
            'Blog' => '',
            ];
            @endphp

            <x-frontend::breadcrumb :list="$breadcrumb"/>
          </div>
          <div class="col-md-auto">
            @php
            $links = [
            (object)[
            'label' => 'Todos',
            'link' => '/html/blog',
            ],

            (object)[
            'label' => 'Empreendimentos',
            'link' => '/html/blog',
            ],

            ];
            @endphp
            <ul class="nav nav-pills stretch-on-mobile">
              @foreach($links as $link)
              <li class="nav-item">
                <x-frontend::link link="{{ $link->link }}"
                                  class="nav-link {{ $loop->first ? 'active' : '' }}"
                                  label="{{ $link->label }}"/>
              </li>
              @endforeach
            </ul>
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
