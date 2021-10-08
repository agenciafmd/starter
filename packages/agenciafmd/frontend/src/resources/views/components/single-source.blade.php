@props([
'title',
'image',
'alt' => $alt ?? $title,
])

<source srcset="{{ Str::replace(['.jpg', '.png'], '.webp', $image) }}, {{ Str::replaceLast('.', '@2x.', Str::replace(['.jpg', '.png'], '.webp', $image)) }} 2x">
<source srcset="{{ $image }}, {{ Str::replaceLast('.', '@2x.', $image) }} 2x">

<x-frontend::image :alt="$alt"
                   :title="$title"
        {{ $attributes }} />
