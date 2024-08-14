@aware(['component'])
@props(['rows'])

@php
    $theme = $component->getTheme();
@endphp

@if ($component->hasConfigurableAreaFor('before-pagination'))
    @include(
        $component->getConfigurableAreaFor('before-pagination'),
        $component->getParametersForConfigurableArea('before-pagination'))
@endif

<div class="card-footer d-flex align-items-center">
    @if ($component->paginationVisibilityIsEnabled())
        @if ($component->paginationIsEnabled() && ($component->isPaginationMethod('simple') || ($component->isPaginationMethod('standard') && $rows->lastPage() > 1)))
            <p class="m-0 text-secondary">
                @lang('Showing')
                <span>{{ $rows->count() ? $rows->firstItem() : 0 }}</span>
                @lang('to')
                <span>{{ $rows->count() ? $rows->lastItem() : 0 }}</span>
                @lang('of')
                <span><span x-text="paginationTotalItemCount"></span></span>
                @lang('results')
            </p>

            {{ $rows->links('admix-ui::livewire-tables.includes.pagination-items') }}
        @else
            <p class="m-0 text-secondary">
                @lang('Showing')
                <span>{{ $rows->count() }}</span>
                @lang('results')
            </p>
        @endif
    @endif
</div>

@if ($component->hasConfigurableAreaFor('after-pagination'))
    @include(
        $component->getConfigurableAreaFor('after-pagination'),
        $component->getParametersForConfigurableArea('after-pagination'))
@endif
