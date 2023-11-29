@props([
'name',
'label',
'download' => false,
])

<a href="{{ Str::startsWith(request()->route()->getName(), 'frontend.html') ? '/pdf/' . $name . '.pdf' : mix('/pdf/' . $name . '.pdf') }}"
   @if($download) download @else target="_blank" @endif
   {{ $attributes }}>
  <span aria-hidden="true">
    {{ $label }}
  </span>
</a>