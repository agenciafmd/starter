<?php

use Agenciafmd\Products\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('products')->truncate();
        DB::table('media')->where('model_type', 'Agenciafmd\\Products\\Product')->delete();

        $faker = Faker\Factory::create();

        factory(Product::class, 20)->create()->each(function ($product) use ($faker) {
            $product->doUpload($faker->file(__DIR__ . '/../faker/image', storage_path('admix/tmp')), 'image');
        });
    }
}
