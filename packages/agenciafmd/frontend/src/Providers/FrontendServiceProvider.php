<?php

namespace Agenciafmd\Frontend\Providers;

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Route;
#use Agenciafmd\Categories\Category;
use Illuminate\Support\ServiceProvider;

class FrontendServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->setRoutes();

        $this->loadViews();

        $this->loadTranslations();

        $this->loadViewComposer();
    }

    public function register()
    {
    }

    protected function setRoutes()
    {
        if (!$this->app->routesAreCached()) {
            $namespace = 'Agenciafmd\Frontend\Http\Controllers';

            Route::middleware('web')
                ->namespace($namespace)
                ->group(__DIR__ . '/../routes/web.php');

            Route::middleware('api')
                ->namespace($namespace)
                ->group(__DIR__ . '/../routes/api.php');
        }
    }

    protected function loadViews()
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'agenciafmd/frontend');
    }

    protected function loadTranslations()
    {
        $this->loadJsonTranslationsFrom(__DIR__ . '/../resources/lang');
    }

    protected function loadViewComposer()
    {
//        View::composer('agenciafmd/frontend::master', function ($view) {
//            $view->with('categoriesViewComposer', Category::where('type', 'products')->isActive()->sort()->get());
//        });
    }
}
