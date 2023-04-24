<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $nf = Collection::make(['Spe', 'Qualif', 'T', 'TS']);
        $filieres = Collection::make(['DD', 'TDI', 'TGE', 'TDI']);
        $groups = Collection::make(['101', '102', '201', '202']);
        return [
            'fname' => fake()->firstName(),
            'lname' => fake()->lastName(),
            'tel' => fake()->phoneNumber(),
            'nf' => $nf->random(),
            'filiere' => $filieres->random(),
            'group' => $filieres->random() . $groups->random(),
            'email' => fake()->unique()->userName() . '@ofppt-edu.ma',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
