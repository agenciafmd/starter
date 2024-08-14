<ul class="pagination m-0 ms-auto">
    @if ($paginator->hasPages())
        @php(isset($this->numberOfPaginatorsRendered[$paginator->getPageName()]) ? $this->numberOfPaginatorsRendered[$paginator->getPageName()]++ : $this->numberOfPaginatorsRendered[$paginator->getPageName()] = 1)
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="page-item px-1 disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                <span class="page-link" aria-hidden="true">
                    <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24"
                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg>
{{--                    @lang('pagination.previous')--}}
                </span>
            </li>
        @else
            <li class="page-item px-1">
                <button type="button"
                        dusk="previousPage{{ $paginator->getPageName() === 'page' ? '' : '.' . $paginator->getPageName() }}"
                        class="page-link"
                        wire:click="previousPage('{{ $paginator->getPageName() }}')"
                        wire:loading.attr="disabled"
                        rel="prev"
                        aria-label="@lang('pagination.previous')"
                >
                    <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                    {{--                    @lang('pagination.previous')--}}
                </button>
            </li>
        @endif

        {{-- Pagination Elements --}}
        @if ($elements ?? null)
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <li class="page-item px-1 disabled" aria-disabled="true">
                        <span class="page-link">{{ $element }}</span>
                    </li>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page === $paginator->currentPage())
                            <li class="page-item px-1 active"
                                wire:key="paginator-{{ $paginator->getPageName() }}-{{ $this->numberOfPaginatorsRendered[$paginator->getPageName()] }}-page-{{ $page }}"
                                aria-current="page"><span class="page-link">{{ $page }}</span></li>
                        @else
                            <li class="page-item px-1"
                                wire:key="paginator-{{ $paginator->getPageName() }}-{{ $this->numberOfPaginatorsRendered[$paginator->getPageName()] }}-page-{{ $page }}">
                                <button type="button" class="page-link"
                                        wire:click="gotoPage({{ $page }}, '{{ $paginator->getPageName() }}')">{{ $page }}</button>
                            </li>
                        @endif
                    @endforeach
                @endif
            @endforeach
        @endif

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class="page-item px-1">
                <button type="button"
                        dusk="nextPage{{ $paginator->getPageName() === 'page' ? '' : '.' . $paginator->getPageName() }}"
                        class="page-link" wire:click="nextPage('{{ $paginator->getPageName() }}')"
                        wire:loading.attr="disabled" rel="next" aria-label="@lang('pagination.next')">
                    <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                </button>
            </li>
        @else
            <li class="page-item px-1 disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                <span class="page-link" aria-hidden="true">
{{--                    @lang('pagination.next')--}}
                    <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                         stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                </span>
            </li>
        @endif
    @endif
</ul>
