@props([
'image',
'title',
'alt' => $title,
'breakpointDesktopWidth' => '1200px',
'breakpointDesktopSuffix' => 'lg',
'breakpointNotebookWidth' => '576px',
'breakpointNotebookSuffix' => 'md',
])

@foreach([
    'min-width: '.$breakpointDesktopWidth => '-'.$breakpointDesktopSuffix,
    'min-width: '.$breakpointNotebookWidth => '-'.$breakpointNotebookSuffix,
] as $breakpoint => $suffix)
    <source type="image/webp"
            media="({{ $breakpoint }})"
            srcset="{{ Vite::image( Str::replaceLast('.', "{$suffix}.", Str::replace(['.jpg', '.png'], '.webp', $image)) ) }}, {{ Vite::image(Str::replaceLast('.', "{$suffix}@2x.", Str::replace(['.jpg', '.png'], '.webp', $image)) ) }} 2x">
    <source media="({{ $breakpoint }})"
            srcset="{{ Vite::image( Str::replaceLast('.', "{$suffix}.", $image) ) }}, {{ Vite::image( Str::replaceLast('.', "{$suffix}@2x.", $image) ) }} 2x">
@endforeach

<x-frontend::single-source :image="$image"
                           :alt="$alt"
                           :title="$title"
        {{ $attributes }} />
