<?php

namespace Agenciafmd\Frontend\Providers;

use Agenciafmd\Frontend\Livewire\Contact;
use Illuminate\Support\ServiceProvider;
use Livewire\Livewire;

class LivewireServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        Livewire::component('frontend::contact', Contact::class);
    }

    public function register(): void
    {
        //
    }
}
