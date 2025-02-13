@props([
    'id' => null,
    'cardBody' => null,
    'content' => [],
    'hasShadow' => false,
])

<div id="{{ $id }}"
     {{ $attributes->merge(['class' => 'card' . ($hasShadow ? ' shadow' : '' )]) }}>
    <div class="card-body {{ $cardBody }}">
        {{ $slot }}
    </div>
</div>
