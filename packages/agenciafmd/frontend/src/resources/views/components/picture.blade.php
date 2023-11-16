@props([
'image',
'title',
'alt' => $title,
'pictureClass' => null,
'hasBreakpoints' => false,
'breakpointDesktopWidth' => null,
'breakpointDesktopSuffix' => null,
'breakpointNotebookWidth' => null,
'breakpointNotebookSuffix' => null,
])

<picture class="{{ $pictureClass }}">
    <x-dynamic-component :component="$hasBreakpoints ? 'frontend::sources' : 'frontend::single-source'"
                         :image="Str::startsWith(request()->route()->getName(), ['frontend.html']) ? $image : mix($image)"
                         :title="$title"
                         :alt="$alt"
                         :breakpointDesktopWidth="$breakpointDesktopWidth"
                         :breakpointDesktopSuffix="$breakpointDesktopSuffix"
                         :breakpointNotebookWidth="$breakpointNotebookWidth"
                         :breakpointNotebookSuffix="$breakpointNotebookSuffix"

            {{ $attributes }}></x-dynamic-component>
</picture>