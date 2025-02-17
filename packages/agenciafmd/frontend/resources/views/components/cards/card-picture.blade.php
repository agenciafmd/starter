@props([
'id' => null,
'cardClass' => null,
'cardBodyClass' => null,
'picture' => [],
'image' => [],
'hasShadow' => null,
'badge' => [],
])

<div id="{{ $id }}"
     {{ $attributes->merge(['class' => 'card ' . ($hasShadow ? 'shadow' : '' )]) }}>

      @if($badge)
           <x-frontend::link link="{{ $badge->url }}"
                                  title="Ir para filtro: {{ $badge->name }}"
                                  class="badge-property z-2 {{ ($badge->url === '#') ? 'pe-none':'' }}">
                <span class="badge align-self-start text-uppercase" style="background: {{ $badge->theme->background }}; color: {{ $badge->theme->color }}">
                    {{ $badge->name }}
                </span>
           </x-frontend::link>
      @endif

     {{-- para backend usa o picture --}}
     @if($picture && !$image)

        {!! $picture !!}

     @elseif(!$picture && $image)

     {{-- para front usa o image --}}

     <x-frontend::picture image="{{ $image->src }}"
                          title="{{ $image->name }}"
                          alt="{{ $image->name }}"
                          pictureClass="{{ $image->pictureClass }}"
                          class="{{ $image->imageClass }}"
                          has-breakpoints="true"
                          breakpointDesktopWidth="1400px"
                          breakpointDesktopSuffix="xl"
                          breakpointNotebookWidth="768px"
                          breakpointNotebookSuffix="lg"/>
     @endif

    <div class="card-body {{ $cardBodyClass }}">
        {{ $slot }}
    </div>
</div>
