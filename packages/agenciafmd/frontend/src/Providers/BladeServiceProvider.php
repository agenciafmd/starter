<?php

namespace Agenciafmd\Frontend\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class BladeServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->bootBladeComponents();

        $this->bootBladeDirectives();

        $this->bootBladeComposers();

        $this->bootViews();

        $this->bootPublish();
    }

    public function register(): void
    {
        //
    }

    private function bootBladeComponents(): void
    {
        Blade::componentNamespace('Agenciafmd\\Frontend\\View\\Components', 'frontend');
    }

    private function bootBladeComposers(): void
    {
        //
    }

    private function bootBladeDirectives(): void
    {
        //
    }

    private function bootViews(): void
    {
        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'frontend');
        $this->loadViewsFrom(base_path('resources/views/errors'), 'errors');
        //        $this->loadViewsFrom(__DIR__ . '/../../resources/mail', 'frontend-mail');
    }

    private function bootPublish(): void
    {
        //
    }
}
