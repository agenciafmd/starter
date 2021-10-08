@props([
'title',
'image' => $image ?? null,
'alt',
])

<img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
     @if($image)
        srcset="{{ $image }}, {{ Str::replaceLast('.', '@2x.', $image) }} 2x"
     @endif
     alt="{{ $alt ?? $title }}"
     title="{{ $title }}"
        {{ $attributes->merge([
           'loading' => 'lazy',
           'decoding' => 'async',
           'width' => '1',
           'height' => '1',
           'class' => '',
        ])
        }}>
