@props([
'id',
'provider' => 'youtube',
'link',
'image' => '',
'title' => '',
'aspectRatio' => '',
'alt' => '',
'picture' => '',
'iconClass' => '',
])

<div class="position-relative js-player-embed-container {{ $aspectRatio }}">
  @if($picture)

  {!! $picture !!}

  @elseif($image)
    <x-frontend::picture image="{{ $image }}"
                         title="{{ $title }}"
                         alt="{{ $alt }}"
                         pictureClass="{{ $aspectRatio }}"
                         hasBreakpoints
                         breakpointDesktopWidth="1400px"
                         breakpointDesktopSuffix="xl"
                         breakpointNotebookWidth="768px"
                         breakpointNotebookSuffix="lg"
                         {{ $attributes->merge(['class' => 'img-cover']) }}/>
  @elseif($link)
    <x-frontend::image is-single-image="true"
                       image="https://i3.ytimg.com/vi/{{ \Agenciafmd\Support\Helper::youtubeId($link) }}/maxresdefault.jpg"
                       alt="Thumb do vídeo"
                       title="Thumb do vídeo"
                       class="img-cover rounded-1"
    />
  @endif

  <x-frontend::link link="#"
                    data-plyr-provider="{{ $provider }}"
                    data-plyr-embed-id="{{ $link }}"
                    id="player-{{ $id }}"
                    class="stretched-link {{ $iconClass }} js-player-embed-link ic-play"
                    aria-label="Clique para assistir o vídeo"
                    title="Ver vídeo">
    <x-frontend-icon class="vstack align-items-center justify-content-center rounded-circle icon position-absolute top-50 start-50 translate-middle z-1"
                     name="ic-ui-play"/>
  </x-frontend::link>

</div>
