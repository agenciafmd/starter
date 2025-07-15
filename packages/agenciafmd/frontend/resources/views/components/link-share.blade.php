@props([
'shareClass' => false,
])
<x-frontend::link href="#"
                  label="Compartilhe"
                  role="button"
                  data-fmd-share-btn-fbidentification=""
                  title="Compartilhe"
                  aria-label="Link para compartilhar"
                  iconChangePosition
                  icon="ic-ui-arrow-right"
                  class="btn btn-primary btn-lg justify-content-center w-100 js-btn-share {{ $shareClass }}"/>

@push('scripts')

<script type="module"
        src="{{ Vite::asset('resources/js/components/share-api.js') }}"></script>

@endpush