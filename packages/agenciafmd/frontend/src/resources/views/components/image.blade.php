@props([
'image',
'title',
'alt' => $title,
'isSingleImage' => false,
])

<img loading="lazy"
     decoding="async"
     src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
     srcset="{{ $image.($isSingleImage ? '' : ', '.Str::replaceLast('.', '@2x.', $image).' 2x') }}"
     alt="{{ $alt ?? $title }}"
     title="{{ $title }}"
     width="1"
     height="1"
        {{ $attributes->merge(['class' => 'img-fluid']) }}>
