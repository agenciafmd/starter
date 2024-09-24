<?php

namespace Database\Seeders;

use Agenciafmd\Admix\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdmixUserSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        User::factory(100)
            ->create();

//        Removido momentaneamente pois quebra o layout do seed
//        $this->command->withProgressBar(range(1, 1000), function () {
//            User::factory()
//                ->create();
//        });
//
//        $this->command->getOutput()
//            ->writeln(''); // evita o % no final
    }
}
