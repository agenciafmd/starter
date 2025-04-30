<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\TrustProxies;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: [
            'cid',
            'gclid',
            'hubspotutk',
            'utm_campaign',
            'utm_content',
            'utm_medium',
            'utm_source',
            'utm_term',
            'utm_today',
        ]);
        $middleware->append(TrustProxies::class);
        $middleware->trustProxies('*');
        $middleware->validateCsrfTokens(except: [
            'livewire/message/*',
            'livewire/update*',
            'livewire/upload-file*',
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
