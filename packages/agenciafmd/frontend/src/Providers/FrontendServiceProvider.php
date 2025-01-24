<?php

namespace Agenciafmd\Frontend\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class FrontendServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->providers();

        $this->loadViteMacros();

        $this->publish();
    }

    public function register(): void
    {
        $this->loadConfigs();
    }

    private function providers(): void
    {
        $this->app->register(BladeServiceProvider::class);
        $this->app->register(RouteServiceProvider::class);
    }

    private function publish(): void
    {
        //
    }

    private function loadConfigs(): void
    {
        $this->mergeConfigFrom(__DIR__ . '/../../config/frontend.php', 'frontend');
    }

    private function loadViteMacros(): void
    {
        Vite::macro('image', fn (string $asset) => $this->asset("resources/images/{$asset}"));
        Vite::macro('font', fn (string $asset) => $this->asset("resources/fonts/{$asset}"));
        Vite::macro('sprite', fn (string $asset) => $this->asset('spritemap.svg') . "#sprite-{$asset}");
    }
}
