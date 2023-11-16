<svg role="img" {{ $attributes->merge(['class' => 'ic']) }}>
  @if(!Str::startsWith(request()->route()->getName(), ['frontend.html']))
  <use xlink:href="{{ mix('/svg/sprite.svg') }}#{{ $name }}"></use>
  @else
  <use xlink:href="/svg/sprite.svg#{{ $name }}"></use>
  @endif
</svg>