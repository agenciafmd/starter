<?php

use Agenciafmd\Postal\Postal;
use Illuminate\Database\Seeder;

class PostalTableSeeder extends Seeder
{
    public function run()
    {
        Postal::withTrashed()
            ->get()->each->forceDelete();

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
