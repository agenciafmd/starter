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
  @if(!Str::startsWith(request()->route()->getName(), ['frontend.html']))
    <x-dynamic-component :component="$hasBreakpoints ? 'frontend::sources' : 'frontend::single-source'"
                         :image="mix($image)"
                         :title="$title"
                         :alt="$alt"
                         :breakpointDesktopWidth="$breakpointDesktopWidth"
                         :breakpointDesktopSuffix="$breakpointDesktopSuffix"
                         :breakpointNotebookWidth="$breakpointNotebookWidth"
                         :breakpointNotebookSuffix="$breakpointNotebookSuffix"

            {{ $attributes }}></x-dynamic-component>
  @else
    <x-dynamic-component :component="$hasBreakpoints ? 'frontend::sources' : 'frontend::single-source'"
                         :image="$image"
                         :title="$title"
                         :alt="$alt"
                         :breakpointDesktopWidth="$breakpointDesktopWidth"
                         :breakpointDesktopSuffix="$breakpointDesktopSuffix"
                         :breakpointNotebookWidth="$breakpointNotebookWidth"
                         :breakpointNotebookSuffix="$breakpointNotebookSuffix"

            {{ $attributes }}></x-dynamic-component>
  @endif
</picture>