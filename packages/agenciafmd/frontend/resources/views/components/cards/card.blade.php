@props([
    'id' => null,
    'cardBodyClass' => null,
    'content' => [],
    'hasShadow' => false,
])

<div id="{{ $id }}"
     {{ $attributes->merge(['class' => 'card' . ($hasShadow ? ' shadow' : '' )]) }}>
    <div class="card-body {{ $cardBodyClass }}">
        {{ $slot }}
    </div>
</div>
