<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Emploi>
 */
class EmploiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {

        return [
            // 'group' => fake()->address() . " ?",
            // 'day_of_week' => '',
            // 'quarter' => '',
            'subject' => 'Subject' . fake()->name(),
            'trainer' => 'Mr. ' . fake()->name(),
            'salle' => 'Salle' . random_int(1, 10),
        ];
    }
}
