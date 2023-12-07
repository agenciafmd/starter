@props([
'name',
'label',
'download' => false,
])

@php
$filePath = '/pdf/' . $name . '.pdf';
$url = Str::startsWith(request()->route()->getName(), 'frontend.html') ? $filePath : mix($filePath);
@endphp

<a href="{{ $url }}"
   @if($download) download @else target="_blank" @endif
   {{ $attributes }}>
  <span aria-hidden="true">
    {{ $label }}
  </span>
</a>