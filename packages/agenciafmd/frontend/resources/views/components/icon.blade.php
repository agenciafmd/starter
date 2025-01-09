<svg role="img" {{ $attributes->merge(['class' => 'ic']) }}>
  <use xlink:href="{{ @vite('/svg/sprite.svg') }}#{{ $name }}"></use>
</svg>
