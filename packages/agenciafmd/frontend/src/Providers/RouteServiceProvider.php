<?php

namespace Agenciafmd\Frontend\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->routes(function () {
            Route::middleware('web')
                ->group(__DIR__ . '/../../routes/web.php');
        });
    }

    public function register(): void
    {
        $this->loadBindings();

        parent::register();
    }

    private function loadBindings(): void
    {
        //
    }
}
