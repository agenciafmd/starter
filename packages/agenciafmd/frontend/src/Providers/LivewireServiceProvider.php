<?php

namespace Agenciafmd\Frontend\Providers;

use Agenciafmd\Frontend\Http\Livewire\Search;
use Illuminate\Support\ServiceProvider;
use Livewire\Livewire;

class LivewireServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Livewire::component('frontend::contact', Search::class);
    }

    public function register()
    {
        //
    }
}
