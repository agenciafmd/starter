<?php

namespace Agenciafmd\Frontend\Listeners;

use GuzzleHttp\Client as GuzzleClient;
use Illuminate\Support\Facades\Artisan;

class PageCacheEventSubscriber
{
    public function subscribe($events)
    {
        if (app()->runningInConsole()) {
            return false;
        }

//        $events->listen(
//            'eloquent.saved: Agenciafmd\Developments\Development',
//            'Agenciafmd\Frontend\Listeners\PageCacheEventSubscriber@homeHandler'
//        );
//
//        $events->listen(
//            'eloquent.saved: Agenciafmd\Banners\Banner',
//            'Agenciafmd\Frontend\Listeners\PageCacheEventSubscriber@homeHandler'
//        );
    }

    public function homeHandler()
    {
        dispatch(function () {
            Artisan::call('page-cache:clear', [
                'slug' => 'pc__index__pc',
            ]);

            with(new GuzzleClient())->request('GET', url('/'));
        })
            ->delay(now()->addSeconds(5))
            ->onQueue('low');
    }
}
