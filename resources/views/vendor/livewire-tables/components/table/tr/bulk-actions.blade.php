@aware(['component', 'tableName'])
@props(['rows'])

@if ($component->bulkActionsAreEnabled() && $component->hasBulkActions())
    @php
        $colspan = $component->getColspanCount();
        $selectAll = $component->selectAllIsEnabled();
        $simplePagination = $component->paginationMethod === 'simple' ? true : false;
    @endphp

    <x-livewire-tables::table.tr.plain
            wire:key="bulk-select-message-{{ $tableName }}"
            x-cloak
            x-show="selectedItems.length > 0"
    >
        <x-livewire-tables::table.td.plain :colspan="$colspan">
            <template x-if="selectedItems.length == paginationTotalItemCount">
                <div wire:key="all-selected-{{ $tableName }}" class="d-flex justify-content-between">
                    <span>
                        @lang('You are currently selecting all')
                        @if(!$simplePagination)
                            <strong><span x-text="paginationTotalItemCount"></span></strong>
                        @endif
                        @lang('rows').
                    </span>

                    <button
                            x-on:click="clearSelected"
                            wire:loading.attr="disabled"
                            type="button"
                            class="btn btn-link btn-sm text-secondary text-decoration-none"
                    >
                        @lang('Deselect All')
                    </button>
                </div>
            </template>
            <template x-if="selectedItems.length !== paginationTotalItemCount">
                <div wire:key="some-selected-{{ $tableName }}" class="d-flex justify-content-between">
                    <span>
                        @lang('You have selected')
                        <strong><span x-text="selectedItems.length"></span></strong>
                        @lang('rows.')
                        @lang('Do you want to select all')
                        @if(!$simplePagination)
                            <strong><span x-text="paginationTotalItemCount"></span></strong>
                        @endif
                        @lang('rows?')
                    </span>
                    <div>
                        <button
                                x-on:click="selectAllOnPage"
                                wire:loading.attr="disabled"
                                type="button"
                                class="btn btn-link btn-sm text-secondary text-decoration-none"
                        >
                            @lang('Select all on page')
                        </button>&nbsp;

                        <button
                                x-on:click="setAllSelected"
                                wire:loading.attr="disabled"
                                type="button"
                                class="btn btn-link btn-sm text-secondary text-decoration-none"
                        >
                            @lang('Select all')
                        </button>

                        <button
                                x-on:click="clearSelected"
                                wire:loading.attr="disabled"
                                type="button"
                                class="btn btn-link btn-sm text-secondary text-decoration-none"
                        >
                            @lang('Deselect all')
                        </button>
                    </div>
                </div>
            </template>
        </x-livewire-tables::table.td.plain>
    </x-livewire-tables::table.tr.plain>
@endif
