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
            srcset="{{ Str::replaceLast('.', "{$suffix}.", Str::replace(['.jpg', '.png'], '.webp', $image)) }}, {{ Str::replaceLast('.', "{$suffix}@2x.", Str::replace(['.jpg', '.png'], '.webp', $image)) }} 2x">
    <source media="({{ $breakpoint }})"
            srcset="{{ Str::replaceLast('.', "{$suffix}.", $image) }}, {{ Str::replaceLast('.', "{$suffix}@2x.", $image) }} 2x">
@endforeach

<x-frontend::single-source :image="$image"
                           :alt="$alt"
                           :title="$title"
        {{ $attributes }} />
