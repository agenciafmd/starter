<?php

$fill = '#f7f7f7';
$color = '#191919';
$height = 314;

return [
    'default' => [
        // http://image.intervention.io/api/canvas
        // http://image.intervention.io/api/fill
        'card' => [
            'width' => 600,
            'height' => $height,
            'fill' => $fill,
            'color' => $color,
        ],

        // http://image.intervention.io/api/insert
        'logo' => [
            'path' => resource_path('images/logo.png'),
            'position' => 'top-left',
            'x' => 30,
            'y' => 30,
        ],

        'title' => [
            // http://image.intervention.io/api/text
            'font' => [
                'file' => base_path('vendor/agenciafmd/laravel-social-meta/resources/fonts/open-sans-semi-bold.ttf'),
                'size' => 24,
                'color' => $color,
                'align' => 'left',
                'valign' => 'bottom',
            ],
            'x' => 30,
            'y' => 240,
            'maxlength' => 48,
            'line_height' => 30,
        ],

        'url' => [
            'font' => [
                'file' => base_path('vendor/agenciafmd/laravel-social-meta/resources/fonts/open-sans-regular.ttf'),
                'size' => 14,
                'color' => $color,
                'align' => 'left',
                'valign' => 'bottom',
            ],
            'x' => 30,
            'y' => $height - 30,
        ],
    ],
    'facebook' => [
        //
    ],
];
