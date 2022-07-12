@props([
'image',
'title',
'alt' => $title,
])

<source type="image/webp"
        srcset="{{ Str::replace(['.jpg', '.png'], '.webp', $image) }}, {{ Str::replaceLast('.', '@2x.', Str::replace(['.jpg', '.png'], '.webp', $image)) }} 2x">
<source srcset="{{ $image }}, {{ Str::replaceLast('.', '@2x.', $image) }} 2x">

<x-frontend::image :image="$image"
                   :alt="$alt"
                   :title="$title"
        {{ $attributes }} />
