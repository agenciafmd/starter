@props([
'ariaLabel',
])
<a class="{{ $attributes['class'] }}"
   aria-label="{{ $ariaLabel }}"
   @if($attributes['href']) href="{{ $attributes['href'] }}" @else href="#" @endif
   @if($attributes['title']) title="{{ $attributes['title'] }}" @else title="{{ $slot }}" @endif
>
{{ $slot }}
</a>
