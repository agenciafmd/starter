@props([
    'title',
    'image',
    'alt' => $alt ?? $title,
])

@foreach([
    'min-width: 1200px' => '-lg',
    'min-width: 576px' => '-md',
    'max-width: 576px' => '',
] as $breakpoint => $prefix)
    <source type="image/webp"
            media="({{ $breakpoint }})"
            srcset="{{ Str::replaceLast('.', "{$prefix}.", Str::replace(['.jpg', '.png'], '.webp', $image)) }}, {{ Str::replaceLast('.', "{$prefix}@2x.", Str::replace(['.jpg', '.png'], '.webp', $image)) }} 2x">
    <source media="({{ $breakpoint }})"
            srcset="{{ Str::replaceLast('.', "{$prefix}.", $image) }}, {{ Str::replaceLast('.', "{$prefix}@2x.", $image) }} 2x">
@endforeach

<x-frontend::image :alt="$alt"
                   :title="$title"
                   {{ $attributes }} />
