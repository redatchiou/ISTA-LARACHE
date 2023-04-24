<?php

namespace Database\Factories;


use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Module>
 */
class ModuleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $n = Collection::make(101, 107)->random();
        return [
            'name' => "M{$n} " . Str::random(5),
            'description' => 'description ' . fake()->text(30),
        ];
    }
}
