@extends('agenciafmd/frontend::html.master', [
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
        --bs-dark-rgb: 72, 72, 72;

        --bs-nav-link-color: rgb(108 108 108);
        --bs-nav-link-hover-bg: rgb(219, 219, 219);
    }
</style>
@endpush

@section('content')
<main class="py-block-small py-md-block">
  <div class="container">
    <div class="row gy-2 justify-content-md-between align-items-md-end">
      <div class="col-md-4">
        <h1 class="mb-0">
          Web Vitals
        </h1>
        <p>
          entenda como está a saúde do seu site.
        </p>
      </div>
      <div class="col-md-3">
        <div class="form-floating">
          <select class="form-select"
                  id="allPages"
                  aria-label="Páginas">
            <option selected>todas</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="allPages">Páginas</label>
        </div>
      </div>
    </div>
    <section class="pt-block pt-block-md-large">
      <h2 class="h4 fw-normal">
        /home
      </h2>
      <div class="row justify-content-md-between gx-md-3 gy-1h">
        <div class="col-md order-md-1">
          <div class="row gy-1">
            <div class="col-md-3">
              <h3 class="fw-normal fs-base mb-0q">
                Performance
              </h3>
              <div class="d-flex gap-0h align-items-center">
            <span class="fs-small fw-bold">
              20%
            </span>
                <div class="progress flex-grow-1"
                     role="progressbar"
                     aria-valuenow="20"
                     aria-valuemin="0"
                     aria-valuemax="100">
                  <div class="progress-bar bg-danger"
                       style="width: 20%"></div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <h3 class="fw-normal fs-base mb-0q">
                Melhores práticas
              </h3>
              <div class="d-flex gap-0h align-items-center">
            <span class="fs-small fw-bold">
              28%
            </span>
                <div class="progress flex-grow-1"
                     role="progressbar"
                     aria-valuenow="28"
                     aria-valuemin="0"
                     aria-valuemax="100">
                  <div class="progress-bar bg-warning"
                       style="width: 28%"></div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <h3 class="fw-normal fs-base mb-0q">
                SEO
              </h3>
              <div class="d-flex gap-0h align-items-center">
            <span class="fs-small fw-bold">
              50%
            </span>
                <div class="progress flex-grow-1"
                     role="progressbar"
                     aria-valuenow="50"
                     aria-valuemin="0"
                     aria-valuemax="100">
                  <div class="progress-bar bg-info"
                       style="width: 50%"></div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <h3 class="fw-normal fs-base mb-0q">
                Acessibilidade
              </h3>
              <div class="d-flex gap-0h align-items-center">
            <span class="fs-small fw-bold">
              90%
            </span>
                <div class="progress flex-grow-1"
                     role="progressbar"
                     aria-valuenow="90"
                     aria-valuemin="0"
                     aria-valuemax="100">
                  <div class="progress-bar bg-success"
                       style="width: 90%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-auto order-md-0">
          <h3 class="fw-normal fs-base mb-0">
            PWA
          </h3>
          <x-frontend::icon class="ic-status text-success"
                            name="ic-web-vitals-success"/>
          <x-frontend::icon class="ic-status text-danger"
                            name="ic-web-vitals-error"/>
        </div>
        <div class="col-6 col-md-auto align-self-end order-md-2">
          <div class="d-grid">
            <a href="#" class="btn btn-outline-dark">
              ver detalhes
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>

@endsection
