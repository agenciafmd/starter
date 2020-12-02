@if($fancybox ?? false)
    <a href="{{ $image }}"
       data-fancybox="{{ $fancybox }}"
       aria-label="{{ $alt }}"
       data-caption="{{ $alt }}"
       class="{{ $fancyboxClass }}">
        @endif
        <picture class="{{ $pictureClass }}">
            @foreach($sources as $source)
                @if(!$loop->last)
                    <source media="(min-width: {{ $source['name'] }}px)"
                            srcset="{{ $source['default'] }}, {{ $source['retina'] }} 2x">
                @else
                    <source media="(max-width: {{ ($sources->take(-2)->first()['name']-1) }}px)"
                            srcset="{{ $source['default'] }}, {{ $source['retina'] }} 2x">
                @endif
            @endforeach
            <img loading="lazy"
                 width="{{ $w ?? '1' }}"
                 height="{{ $h ?? '1' }}"
                 src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                 class="{{ $imgClass ?: 'img-sanitize img-cover' }}"
                 alt="{{ $alt ?? 'sem imagem' }}"
                 title="{{ $alt ?? 'sem imagem' }}">
        </picture>
        @if($fancybox ?? false) </a> @endif
