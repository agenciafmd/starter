@if ($paginator->hasPages())
    <div class="pagination-custom desktop">
        <div class="pagination-actions">
            @if ($paginator->hasPages())
                <ul class="pagination">
                    @if ($paginator->onFirstPage())
                        <li class="disabled"><span>&laquo;</span></li>
                    @else
                        <li><a href="{{ $paginator->previousPageUrl() }}" rel="prev">&laquo;</a></li>
                    @endif

                    @if(isset($elements))
                        @foreach ($elements as $element)
                            @if (is_string($element))
                                <li class="disabled"><span>{{ $element }}</span></li>
                            @endif

                            @if (is_array($element))
                                @foreach ($element as $page => $url)
                                    @if ($page == $paginator->currentPage())
                                        <li class="active"><span>{{ $page }}</span></li>
                                    @else
                                        <li><a href="{{ $url }}">{{ $page }}</a></li>
                                    @endif
                                @endforeach
                            @endif
                        @endforeach
                    @endif

                    @if ($paginator->hasMorePages())
                        <li><a href="{{ $paginator->nextPageUrl() }}" rel="next">&raquo;</a></li>
                    @else
                        <li class="disabled"><span>&raquo;</span></li>
                    @endif
                </ul>
            @endif
        </div>
    </div>

    @push('head')
        @if (!$paginator->onFirstPage())
            <link rel="prev" href="{{ $paginator->previousPageUrl() }}">
        @endif
        @if ($paginator->hasMorePages())
            <link rel="next" href="{{ $paginator->nextPageUrl() }}">
        @endif
    @endpush
@endif
