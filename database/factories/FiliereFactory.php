<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Filiere>
 */
class FiliereFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $nf = Collection::make(['Spe', 'Qualif', 'T', 'TS']);
        return [
            'name' => 'Filiere' . Str::random(4),
            'nf' => $nf->random(),
            'description' => fake()->text(100),
            'code' => 'CODE',
        ];
    }
}
