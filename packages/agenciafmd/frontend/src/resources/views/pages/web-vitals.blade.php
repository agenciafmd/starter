@extends('agenciafmd/frontend::master', [
'critical' => 'web-vitals.css',
'bodyClass' => 'web-vitals'
])

@section('title', 'Título')
@section('description', 'Descrição curta.')

@push('head')
<style>
    :root {
        --bs-body-bg: #EFEFEF;
        --bs-border-color: #7C7C7C;
        --bs-border-radius: 8px;

        --bs-success-rgb: 124, 204, 87;
        --bs-info-rgb: 107, 181, 249;
        --bs-warning-rgb: 249, 200, 107;
        --bs-danger-rgb: 249, 107, 107;
    }
</style>
@endpush

@section('content')
<main class="py-block-small py-md-block">
  <div class="container">
    <div class="row gy-1 justify-content-md-between align-items-md-end">
      <div class="col-md-4">
        <h1 class="fs-3 fs-md-1 mb-0">
          Web Vitals
        </h1>
        <p class="fs-small">
          entenda como está a saúde do seu site.
        </p>
      </div>
      <div class="col-md-3">
        <div class="form-floating">
          <select class="form-select js-onchange"
                  id="allPages"
                  aria-label="Páginas">
            <option selected>todas</option>
            @foreach($pages as $page)
            <option value="{{ url()->current() . '?' .'page=' . $page }}">{{ $page }}</option>
            @endforeach
          </select>
          <label for="allPages">Páginas</label>
        </div>
      </div>
    </div>
    <section class="pt-block-small pt-md-block">
      <div class="d-flex flex-column gap-2">
        @forelse($webvitals as $webvital)
        <div>
          <h2 class="fs-5 fs-md-4 fw-normal">
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
              <x-frontend::icon class="ic-status text-{{ $category['status'] }}"
                                name="ic-web-vitals-{{ $category['status'] }}"/>
            </div>

            <div class="col-6 col-md-auto align-self-end order-md-2">
              <div class="d-grid">
                <a href="/web-vitals/{{ $webvital['pageName'] }}.report.html"
                   class="btn btn-outline-dark">
                  ver detalhes
                </a>
              </div>
            </div>
          </div>
        </div>
        @empty
        <div class="alert alert-warning">
          Nenhum dado encontrado.
        </div>
      @endforelse
      </div>
    </section>
  </div>
</main>

@endsection
