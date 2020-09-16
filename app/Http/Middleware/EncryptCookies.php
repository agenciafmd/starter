<?php

namespace App\Http\Middleware;

use Illuminate\Cookie\Middleware\EncryptCookies as Middleware;

class EncryptCookies extends Middleware
{
    /**
     * The names of the cookies that should not be encrypted.
     *
     * @var array
     */
    protected $except = [
        'cid',
        'gclid',
        'hubspotutk',
        'utm_campaign',
        'utm_content',
        'utm_medium',
        'utm_medium',
        'utm_source',
        'utm_source',
        'utm_term',
        'utm_today',
    ];
}
