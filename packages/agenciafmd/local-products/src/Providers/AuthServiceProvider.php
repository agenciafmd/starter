<?php

namespace Agenciafmd\Products\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        '\Agenciafmd\Products\Product' => '\Agenciafmd\Products\Policies\ProductPolicy',
    ];

    public function boot()
    {
        $this->registerPolicies();
    }
}
