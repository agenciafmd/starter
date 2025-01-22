@php
    $file = pathinfo($file);
    $filename = $file['filename'];
    $extension = $file['extension'];
@endphp

<picture>
    <source media="(min-width: 1600px)"
            srcset="/images/{{ $filename }}-xl.{{ $extension }},
                    /images/{{ $filename }}-xl@2x.{{ $extension }} 2x">
    <source media="(min-width: 1024px)"
            srcset="/images/{{ $filename }}-md.{{ $extension }},
                    /images/{{ $filename }}-md@2x.{{ $extension }} 2x">
    <source media="(max-width: 1023px)"
            srcset="/images/{{ $filename }}.{{ $extension }},
                    /images/{{ $filename }}@2x.{{ $extension }} 2x">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
         loading="lazy"
         width="1"
         height="1"
         alt="{{ $alt }}"
         title="{{($title) ?? $file}}"
         class="img-sanitize {{($classes) ?? ''}}">
</picture>
