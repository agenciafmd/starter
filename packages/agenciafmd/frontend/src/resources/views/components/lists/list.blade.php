@props([
'listClass' => null,
'icon' => null,
'iconClass' => null,
'content' => [],
'isUnstyled' => true,
])

<ul {{ $attributes->merge(['class' => ($isUnstyled ? 'list-unstyled' : '' )]) }}>
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