<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Spatie\RobotsMiddleware\RobotsMiddleware;

class MyRobotsMiddleware extends RobotsMiddleware
{
    /**
     * @return string|bool
     */
    protected function shouldIndex(Request $request)
    {
        if ($request->segment(1) === 'admix') {
            return false;
        }

        if (config('app.env') === 'production') {
            return true;
        }

        return false;
    }
}
