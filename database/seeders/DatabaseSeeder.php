<?php

namespace Database\Seeders;

use Agenciafmd\Postal\Database\Seeders\PostalTableSeeder;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            //            AdmixUserSeeder::class,
            PostalTableSeeder::class,
        ]);
    }
}
