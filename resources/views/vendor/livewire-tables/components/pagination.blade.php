@aware(['component','isTailwind','isBootstrap','isBootstrap4','isBootstrap5'])

@php
    $theme = $component->getTheme();
@endphp

@if ($this->hasConfigurableAreaFor('before-pagination'))
    @include(
        $this->getConfigurableAreaFor('before-pagination'),
        $this->getParametersForConfigurableArea('before-pagination'))
@endif

<div class="card-footer d-flex align-items-center">
    @if ($this->paginationVisibilityIsEnabled())
        @if ($this->paginationIsEnabled() && ($this->isPaginationMethod('simple') || ($this->isPaginationMethod('standard') && $this->getRows->lastPage() > 1)))
            <p class="m-0 text-secondary">
                @lang('Showing')
                <span>{{ $this->getRows->count() ? $rows->firstItem() : 0 }}</span>
                @lang('to')
                <span>{{ $this->getRows->count() ? $rows->lastItem() : 0 }}</span>
                @lang('of')
                <span><span x-text="paginationTotalItemCount"></span></span>
                @lang('results')
            </p>

            {{ $this->getRows->links('admix-ui::livewire-tables.includes.pagination-items') }}
        @else
            <p class="m-0 text-secondary">
                @lang('Showing')
                <span>{{ $this->getRows->count() }}</span>
                @lang('results')
            </p>
        @endif
    @endif
</div>

@if ($this->hasConfigurableAreaFor('after-pagination'))
    @include(
        $this->getConfigurableAreaFor('after-pagination'),
        $this->getParametersForConfigurableArea('after-pagination'))
@endif
