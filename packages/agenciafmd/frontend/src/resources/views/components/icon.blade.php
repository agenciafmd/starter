<svg role="img" {{ $attributes->merge(['class' => 'ic']) }}>
  <use xlink:href="{{ !Str::startsWith(request()->route()->getName(), ['frontend.html']) ? mix('/svg/sprite.svg') : '/svg/sprite.svg' }}#{{ $name }}"></use>
</svg>