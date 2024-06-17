@props([
'id',
'title',
])

<div class="modal fade"
     id="{{ $id }}"
     tabindex="-1"
     aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h5">
          {{ $title }}
        </h2>
        <button type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar modal"></button>
      </div>
      <div class="modal-body">
        {{ $slot }}
      </div>
    </div>
  </div>
</div>
