@props([
'link' => '#',
'isExtern' => false,
'icon' => false,
'iconClass' => false,
'iconChangePosition' => false,
'label' => false,
'ariaLabel' => false,
'title' => false,
])
<a href="{{ $link }}"
   aria-label="{{ ($ariaLabel ? $ariaLabel : $label) }}"
   title="{{ ($title ? $title : $label) }}"
   @if($isExtern)
     target="_blank"
     rel="noopener"
   @endif
   {{ $attributes->merge(['class' => ($icon ? 'icon-link icon-link-hover' : '') . ($iconChangePosition ? ' flex-row-reverse' : '')]) }}>

      @if($icon)
          <x-frontend-icon class="bi {{ $iconClass }}"
                           name="{{ $icon }}"/>
      @endif

      @if($label)
          {{ $label }}
      @endif

      {{ $slot }}

</a>