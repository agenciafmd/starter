@props([
'listClass' => null,
'icon' => null,
'iconClass' => null,
'content' => [],
'sanitizeList' => null,
])

<ul {{ $attributes->merge(['class' => ($sanitizeList ? 'list-unstyled' : '' )]) }}>
  @foreach($content as $list)
    <li class="{{ $listClass }}">
      @if($icon)
      <span>
        <x-frontend::icon class="mw-unset {{ $iconClass }}"
                          name="{{ $icon }}" />
      </span>
      @endif
      {!! $list !!}
    </li>
  @endforeach
</ul>