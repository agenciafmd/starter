@aware(['component'])
@props(['displayMinimisedOnReorder' => false, 'hideUntilReorder' => false, 'customAttributes' => ['default' => true]])

<th x-cloak {{ $attributes }} scope="col"
    {{ $attributes->merge($customAttributes)->class([
            'laravel-livewire-tables-reorderingMinimised',
            'w-1',
            'pe-0',
        ]) }}
    @if($hideUntilReorder) :class="!reorderDisplayColumn && 'w-0 p-0 hidden'" @endif
>
    {{ $slot }}
</th>
