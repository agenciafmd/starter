@extends('agenciafmd/frontend::master', [
'critical' => 'web-vitals.css',
'bodyClass' => 'web-vitals'
])

@section('title', 'Web Vitals')
@section('description', 'Entenda como está a saúde do seu site.')

@section('content')
    <main class="py-block-small py-md-block text-dark">
        <div class="container">
            <div class="row gy-1 justify-content-md-between align-items-md-end">
                <div class="col-md-4">
                    <h1 class="fs-3 fs-md-1 mb-0">
                        Web Vitals
                    </h1>
                    <p class="fs-small fs-md-base">
                        entenda como está a saúde do seu site.
                    </p>
                </div>
                <div class="col-md-3">
                    <div class="form-floating">
                        <select class="form-select js-onchange"
                                id="allPages"
                                aria-label="Páginas">
                            <option selected
                                    value="{{ url()->current() . '?' . http_build_query(request()->except(['page'])) }}">
                                todas
                            </option>
                            @foreach($pages as $page)
                                <option @if(request()->page === $page) selected
                                        @endif value="{{ url()->current() . '?' . http_build_query(request()->except(['page']) + ['page' => $page]) }}">{{ $page }}
                                </option>
                            @endforeach
                        </select>
                        <label for="allPages">Páginas</label>
                    </div>
                </div>
            </div>
            <section class="pt-block-small pt-md-block">
                <ul class="nav nav-tabs"
                    role="tablist">
                    <li class="nav-item"
                        role="presentation">
                        <a class="nav-link @if($environment === 'local') active @endif"
                           aria-label="Link Local"
                           title="Local"
                           href="{{ route('frontend.webvitals', ['environment' => 'local' , http_build_query(request()->except(['environment']))]) }}">
                            Local
                        </a>
                    </li>
                    <li class="nav-item"
                        role="presentation">
                        <a class="nav-link @if($environment === 'dev') active @endif"
                           aria-label="Link Homologação (.dev)"
                           title="Homologação (.dev)"
                           href="{{ route('frontend.webvitals', ['environment' => 'dev' , http_build_query(request()->except(['environment']))]) }}">
                            Homologação (.dev)
                        </a>
                    </li>
                    {{--<li class="nav-item"
                        role="presentation">
                        <a class="nav-link @if($environment === 'prod') active @endif disabled"
                           aria-label="Link Produção"
                           title="Produção"
                           href="{{ route('frontend.webvitals', ['environment' => 'prod' , http_build_query(request()->except(['environment']))])}}">
                            Produção
                        </a>
                    </li>--}}
                </ul>
                <div id="myTabContent"
                     class="tab-content">
                    <div class="tab-pane pt-2 fade @if($environment === 'local') active show @endif"
                         id="local"
                         role="tabpanel">
                        <div class="d-flex flex-column gap-2">
                            @forelse($webvitals as $webvital)
                                <div>
                                    <h2 class="fs-6 fs-md-5">
                                        /{{ $webvital['pageName'] }}
                                    </h2>
                                    <div class="row justify-content-md-between gx-md-3 gy-1h">
                                        <div class="col-md order-md-1">
                                            <div class="row gy-1">
                                                @foreach($webvital['categories'] as $category)
                                                    <div class="col-md-3">
                                                        <h3 class="fw-normal fs-small fs-md-base mb-0q">
                                                            {{ $category['label'] }}
                                                        </h3>
                                                        <div class="d-flex gap-0h align-items-center">
                                                            <span class="fs-small fw-bold">
                                                                {{ $category['score'] }}%
                                                            </span>
                                                            <div class="progress flex-grow-1"
                                                                 role="progressbar"
                                                                 aria-valuenow="{{ $category['score'] }}"
                                                                 aria-valuemin="0"
                                                                 aria-valuemax="100">
                                                                <div class="progress-bar bg-{{ $category['status'] }}"
                                                                     style="width: {{ $category['score'] }}%"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endforeach
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-auto order-md-0">
                                            <h3 class="fw-normal fs-small fs-md-base mb-0">
                                                PWA
                                            </h3>
                                            <x-frontend::icon class="ic-status text-{{ $webvital['pwa'] }}"
                                                              name="ic-web-vitals-{{ $webvital['pwa'] }}"/>
                                        </div>

                                        <div class="col-6 col-md-auto align-self-end order-md-2">
                                            <div class="d-grid">
                                                <a href="/web-vitals/{{ $webvital['pageName'] }}-local.report.html"
                                                   class="btn btn-outline-dark">
                                                    ver detalhes
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @empty
                                <div class="bg-warning bg-opacity-25 p-1 rounded fs-small">
                                    Nenhum dado encontrado. Por favor, rode <code class="px-0q">npm run
                                        lighthouse</code> para gerar os dados
                                    necessários.
                                </div>
                            @endforelse
                        </div>
                    </div>
                    <div class="tab-pane pt-2 fade @if($environment === 'dev') active show @endif"
                         id="hml"
                         role="tabpanel">
                        <div class="d-flex flex-column gap-2">
                            @forelse($webvitals as $webvital)
                                <div>
                                    <h2 class="fs-6 fs-md-5">
                                        /{{ $webvital['pageName'] }}
                                    </h2>
                                    <div class="row justify-content-md-between gx-md-3 gy-1h">
                                        <div class="col-md order-md-1">
                                            <div class="row gy-1">
                                                @foreach($webvital['categories'] as $category)
                                                    <div class="col-md-3">
                                                        <h3 class="fw-normal fs-small fs-md-base mb-0q">
                                                            {{ $category['label'] }}
                                                        </h3>
                                                        <div class="d-flex gap-0h align-items-center">
                                                            <span class="fs-small fw-bold">
                                                                {{ $category['score'] }}%
                                                            </span>
                                                            <div class="progress flex-grow-1"
                                                                 role="progressbar"
                                                                 aria-valuenow="{{ $category['score'] }}"
                                                                 aria-valuemin="0"
                                                                 aria-valuemax="100">
                                                                <div class="progress-bar bg-{{ $category['status'] }}"
                                                                     style="width: {{ $category['score'] }}%"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endforeach
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-auto order-md-0">
                                            <h3 class="fw-normal fs-small fs-md-base mb-0">
                                                PWA
                                            </h3>
                                            <x-frontend::icon class="ic-status text-{{ $webvital['pwa'] }}"
                                                              name="ic-web-vitals-{{ $webvital['pwa'] }}"/>
                                        </div>

                                        <div class="col-6 col-md-auto align-self-end order-md-2">
                                            <div class="d-grid">
                                                <a href="/web-vitals/{{ $webvital['pageName'] }}-dev.report.html"
                                                   class="btn btn-outline-dark">
                                                    ver detalhes
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @empty
                                <div class="bg-warning bg-opacity-25 p-1 rounded fs-small">
                                    Nenhum dado encontrado. Por favor, rode <code class="px-0q">npm run
                                        lighthouse</code> para gerar os dados
                                    necessários.
                                </div>
                            @endforelse
                        </div>
                    </div>
                    <div class="tab-pane pt-2 fade @if($environment === 'prod') active show @endif"
                         id="prod"
                         role="tabpanel">
                        <div class="d-flex flex-column gap-2">
                            @forelse($webvitals as $webvital)
                                <div>
                                    <h2 class="fs-6 fs-md-5">
                                        /{{ $webvital['pageName'] }}
                                    </h2>
                                    <div class="row justify-content-md-between gx-md-3 gy-1h">
                                        <div class="col-md order-md-1">
                                            <div class="row gy-1">
                                                @foreach($webvital['categories'] as $category)
                                                    <div class="col-md-3">
                                                        <h3 class="fw-normal fs-small fs-md-base mb-0q">
                                                            {{ $category['label'] }}
                                                        </h3>
                                                        <div class="d-flex gap-0h align-items-center">
                                                            <span class="fs-small fw-bold">
                                                                {{ $category['score'] }}%
                                                            </span>
                                                            <div class="progress flex-grow-1"
                                                                 role="progressbar"
                                                                 aria-label="barra de progresso"
                                                                 aria-valuenow="{{ $category['score'] }}"
                                                                 aria-valuemin="0"
                                                                 aria-valuemax="100">
                                                                <div class="progress-bar bg-{{ $category['status'] }}"
                                                                     style="width: {{ $category['score'] }}%"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endforeach
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-auto order-md-0">
                                            <h3 class="fw-normal fs-small fs-md-base mb-0">
                                                PWA
                                            </h3>
                                            <x-frontend::icon class="ic-status text-{{ $webvital['pwa'] }}"
                                                              name="ic-web-vitals-{{ $webvital['pwa'] }}"/>
                                        </div>

                                        <div class="col-6 col-md-auto align-self-end order-md-2">
                                            <div class="d-grid">
                                                <a href="/web-vitals/{{ $webvital['pageName'] }}-prod.report.html"
                                                   class="btn btn-outline-dark">
                                                    ver detalhes
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @empty
                                <div class="bg-warning bg-opacity-25 p-1 rounded fs-small">
                                    Nenhum dado encontrado. Por favor, rode <code class="px-0q">npm run
                                        lighthouse</code> para gerar os dados
                                    necessários.
                                </div>
                            @endforelse
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
@endsection
