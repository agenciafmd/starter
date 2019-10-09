<?php

return [
    'name' => 'Produtos',
    'icon' => 'icon fe-gift',
    'sort' => 20,
    'default_sort' => [
        '-is_active',
        '-star',
        'name',
    ]
];
