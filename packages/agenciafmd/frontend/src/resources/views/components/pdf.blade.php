@props([
'name' => null,
'class' => null,
'title' => null,
'download' => false,
])

<a href="/pdf/{{ $name }}"
   title="Clique e {{ $title }}"
   aria-label="Clique e {{ $title }}"
   @if($download) download @else target="_blank" @endif
   class="{{ $class }}">
  <span aria-hidden="true">
    {{ $title }}
  </span>
</a>