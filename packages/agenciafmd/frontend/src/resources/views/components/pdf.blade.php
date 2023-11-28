@props([
'name',
'class' => null,
'label',
'title' => 'Clique para acessar agora o pdf',
'arialabel' => 'Link para visualização do pdf',
'download' => false,
])

<a href="{{ Str::startsWith(request()->route()->getName(), 'frontend.html') ? '/pdf/' . $name : mix('/pdf/' . $name) }}"
   title="{{ $title }}"
   aria-label="{{ $arialabel }}"
   @if($download) download @else target="_blank" @endif
   class="{{ $class }}">
  <span aria-hidden="true">
    {{ $label }}
  </span>
</a>