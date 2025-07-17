@props([
'listClass' => null,
'iconClass' => null,
'content' => [],
'sanitizeList' => null,
])

<ul {{ $attributes->merge(['class' => ($sanitizeList ? 'list-unstyled' : '' )]) }}>
    @foreach($content as $list)
        <li class="{{ $listClass }}">
            @if(!empty($list->icon))
                <span>
                    <x-frontend-icon class="mw-unset {{ $iconClass }}"
                                     name="{{ $list->icon }}"/>
                </span>
            @endif
            {!! $list->text !!}
        </li>
    @endforeach
</ul>