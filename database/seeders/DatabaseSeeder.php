<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        \App\Models\Filiere::factory(10)->create();

        for ($i = 1; $i < 11; $i++) {
            \App\Models\Module::factory(7)->create(['filiere_id' => $i]);
        }

        \App\Models\Admin::factory(3)->create();

        \App\Models\User::factory(100)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Activite::factory(20)->create();
        \App\Models\Faq::factory(20)->create();
    }
}
