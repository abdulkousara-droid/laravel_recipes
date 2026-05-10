<?php

namespace App\Http\Controllers;

use App\Models\Recipes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index(Request $request)
    {

            $q = $request->get('q');

            $recipes = Recipes::when(request()->has('q') && $q, function (Builder $query) use ($q) {
                $query->where('title', 'like', "%{$q}%")
                    ->orWhere('notes', 'like', "%{$q}%")
                    ->orWhere('instructions', 'like', "%{$q}%")
                    ->orWhere('description', 'like', "%{$q}%")
                    ->orWhere('excerpt', 'like', "%{$q}%");

            });

            if($request->has('featured') && $request->get('featured')){
                $recipes = $recipes->whereNotNull('featured_at');
            }

            $recipes = $recipes
                            ->paginate(12)
                            ->withQueryString();
            $flags = Recipes::FLAGS;

        return inertia('recipes-index', compact( 'recipes', 'flags'));
    }

    public function show(Recipes $recipe)
    {

        $flags = Recipes::FLAGS;
        $recipe->load('category');
        $recipe->viewed();

        $featuredRecipes = Recipes::where('id', '!=', $recipe->id)
                                    ->where('category_id', $recipe->id)
                                    ->whereNotNull('featured_at')
                                    ->take(3)
                                    ->get();

        return inertia('recipes-show', compact( 'recipe', 'flags', 'featuredRecipes'));
    }
}
