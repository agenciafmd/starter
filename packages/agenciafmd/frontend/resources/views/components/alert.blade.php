@props([
'message' => null,
'icon' => null,
'iconClass' => null,
'hasDismissible' => null,
])
@php
    $alertClasses = 'alert';
    if ($hasDismissible) {
    $alertClasses .= ' alert-dismissible';
    }
@endphp

<div role="alert" {{ $attributes->merge(['class' => $alertClasses]) }}>

    @if($icon)
        <x-frontend-icon class="bi flex-shrink-0 {{ $iconClass }}"
                          name="{{ $icon }}"/>
    @endif

    @if($message)
        {!! $message !!}
    @endif

    {{ $slot }}

    @if($hasDismissible)
        <button type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"></button>
    @endif
</div>