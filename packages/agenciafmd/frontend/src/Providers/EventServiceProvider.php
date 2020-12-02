<?php

namespace Agenciafmd\Frontend\Providers;

use Agenciafmd\Frontend\Listeners\PageCacheEventSubscriber;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        //
    ];

    protected $subscribe = [
        PageCacheEventSubscriber::class,
    ];
}
