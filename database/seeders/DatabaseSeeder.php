<?php

namespace Database\Seeders;

use Agenciafmd\Admix\Models\User;
use Illuminate\Database\Seeder;
use Database\Seeders\LeadsTableSeeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
//        User::factory(10)
//            ->create();
//        $this->call(PostalTableSeeder::class);
        $this->call(LeadsTableSeeder::class);
    }
}
