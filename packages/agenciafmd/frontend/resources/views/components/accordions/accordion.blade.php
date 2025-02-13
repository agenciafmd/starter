@props([
'id',
'accordionClass' => null,
'accordions' => [],
])

<div class="accordion {{ $accordionClass }}"
     id="{{ $id }}">
  @foreach ($accordions as $accordion)
  <div class="accordion-item">
    <h2 class="accordion-header"
        id="heading{{ $loop->iteration }}">
      <button class="accordion-button {{ (!$loop->first ? 'collapsed' : '' ) }}"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse{{ $loop->iteration }}"
              aria-expanded="{{ ($loop->first ? 'true' : 'false' ) }}"
              aria-controls="collapse{{ $loop->iteration }}">

        {{ $accordion['title'] }}

      </button>
    </h2>
    <div id="collapse{{ $loop->iteration }}"
         class="accordion-collapse collapse {{ ($loop->first ? 'show' : '' ) }}"
         aria-labelledby="heading{{ $loop->iteration }}"
         data-bs-parent="#{{ $id }}">
      <div class="accordion-body">
        <p>
          {!! $accordion['description'] !!}
        </p>
      </div>
    </div>
  </div>
  @endforeach
</div>
