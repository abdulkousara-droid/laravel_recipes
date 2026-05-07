<?php

namespace App\Http\Controllers;

use App\Models\Recipes;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function show(Recipes $recipe)
    {

        $flags = Recipes::FLAGS;
        $recipe->load('category');

        $featuredRecipes = Recipes::where('id', '!=', $recipe->id)
                                    ->where('category_id', $recipe->id)
                                    ->whereNotNull('featured_at')
                                    ->take(3)
                                    ->get();

        return inertia('recipes-show', compact( 'recipe', 'flags', 'featuredRecipes'));
    }
}
