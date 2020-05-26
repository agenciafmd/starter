<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            if ($request->is('admix*') || $request->is('telescope*')) {
                if (!$this->auth->guard('admix-web')
                    ->check()) {
                    return route('admix.login.form');
                }
            }

            return route('frontend.login.index');
        }

        return '';
    }
}
