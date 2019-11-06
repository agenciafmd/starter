<?php

return [
    'manifest' => [
        'name' => env('PWA_NAME', config('app.name')),
        'short_name' => env('PWA_SHORT_NAME', 'F&MD'),
        'description' => env('PWA_DESCRIPTION'),
        'scope' => '/',
        'start_url' => '/?utm_source=pwa',
        'display' => 'standalone',
        'background_color' => env('PWA_BACKGROUND_COLOR', '#FFFFFF'),
        'theme_color' => env('PWA_THEME_COLOR', '#000000'),
        'orientation' => env('PWA_ORIENTATION', 'portrait'),
        'sender_id' => env('PWA_SENDER_ID', ''),
        'app_id' => env('PWA_APP_ID', ''),
    ],
    'sw' => [
        'name' => env('PWA_SW_NAME', 'sw-frontend'),
        'files' => [
            '/favicon.ico',
            '/css/frontend.css',
            '/js/frontend.js',
            '/offline',
        ],
    ],
];
