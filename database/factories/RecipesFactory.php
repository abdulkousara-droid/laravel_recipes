<?php

namespace Database\Factories;

use App\Models\Recipes;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Recipes>
 */
class RecipesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'category_id' => mt_rand(1, 10),
            'title' => fake()->sentence(mt_rand(3, 8)),
            'excerpt' => fake()->text(),
            'instructions' => fake()->realText(400),
            'instructions' => fake()->realText(800),
            'description' => fake()->realText(),
            'notes' => fake()->realText(),
            'prepare_time' => fake()->randomElement([0, 5, 10, 15, 20, 25, 30]),
            'cooking_time' => fake()->randomElement([15, 30, 45, 60, 75, 90]),
            'servings' => fake()->randomElement([4, 5, 6]),
            'youtube_url' => fake()->randomElement([
                    'https://www.youtube.com/watch?v=4kyTkEItmDc',
                    'https://www.youtube.com/watch?v=SMmEZTvDVHo',
                    'https://www.youtube.com/watch?v=Rfl7ZZu1lfk',
                    'https://www.youtube.com/watch?v=E4QTpcbV2_A',
                    'https://www.youtube.com/watch?v=Dkzt0T82epY',
                    'https://www.youtube.com/watch?v=GJrn18P71Rs'
            ]),
            'featured_at' => fake()->randomElement([true, false]) ? now() : null,
            'is_low_carb' => fake()->randomElement([true, false]),
            'is_high_protein' => fake()->randomElement([true, false]),
            'is_spicy' => fake()->randomElement([true, false]),
            'is_vegetarian' => fake()->randomElement([true, false]),
            'is_vegan' => fake()->randomElement([true, false]),
            'is_pescatarian' => fake()->randomElement([true, false]),
        ];
    }
}
