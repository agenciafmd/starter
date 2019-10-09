<?php

use Agenciafmd\Products\Product;

$factory->define(Product::class, function (\Faker\Generator $faker) {

    // exemplo de relacionamento
    //$differentials = \Mixdinternet\Differentials\Differential::all()->pluck('id');

    return [
        'is_active' => $faker->optional(0.3, 1)->randomElement([0]),
        'star' => $faker->optional(0.3, 1)->randomElement([0]),
        'name' => ucfirst($faker->sentence()),
        'weight' => $faker->numberBetween(100, 900) . ' gramas',
        'description' => '<p>' . collect($faker->paragraphs($nb = 20, $asText = false))->implode('</p><p>') . '</p>',
        'ingredients' => '<p>' . collect($faker->paragraphs($nb = 20, $asText = false))->implode('</p><p>') . '</p>',
        'information' => '<p>' . collect($faker->paragraphs($nb = 20, $asText = false))->implode('</p><p>') . '</p>',
    ];
});
