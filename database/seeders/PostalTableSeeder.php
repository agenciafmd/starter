<?php

namespace Database\Seeders;

use Agenciafmd\Postal\Models\Postal;
use Illuminate\Database\Seeder;

class PostalTableSeeder extends Seeder
{
    public function run()
    {
        Postal::query()
            ->truncate();

        $items = collect([
            [
                'name' => 'Contato',
                'subject' => 'Contato',
                'to_name' => 'Agência F&MD',
                'to' => 'irineu@fmd.ag',
            ],
        ]);

        $this->command->getOutput()
            ->progressStart($items->count());

        $items->each(function ($item) {
            Postal::create($item);

            $this->command->getOutput()
                ->progressAdvance();
        });

        $this->command->getOutput()
            ->progressFinish();
    }
}
