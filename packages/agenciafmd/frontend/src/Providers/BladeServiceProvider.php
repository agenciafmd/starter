<?php

namespace Agenciafmd\Frontend\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class BladeServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->loadBladeComponents();

        $this->loadBladeDirectives();

        $this->loadBladeComposers();

        $this->loadViews();

        $this->publish();
    }

    public function register(): void
    {
        //
    }

    private function loadBladeComponents(): void
    {
        Blade::componentNamespace('Agenciafmd\\Frontend\\View\\Components', 'frontend');
    }

    private function loadBladeComposers(): void
    {
        //
    }

    private function loadBladeDirectives(): void
    {
        //
    }

    private function loadViews(): void
    {
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'frontend');
        $this->loadViewsFrom(base_path('resources/views/errors'), 'errors');
        //        $this->loadViewsFrom(__DIR__ . '/../../resources/mail', 'frontend-mail');
    }

    private function publish(): void
    {
        //
    }
}
