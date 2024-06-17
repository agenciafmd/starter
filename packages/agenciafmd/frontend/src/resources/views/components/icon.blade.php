<svg role="img" {{ $attributes->merge(['class' => 'ic']) }}>
  <use xlink:href="{{ mix('/svg/sprite.svg') }}#{{ $name }}"></use>
  <use xlink:href="/svg/sprite.svg#{{ $name }}"></use>
</svg>