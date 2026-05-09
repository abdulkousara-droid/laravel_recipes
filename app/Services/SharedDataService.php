<?php

namespace App\Services;

use App\Models\Category;
use App\Models\Recipes;
use Illuminate\Http\Request;

class SharedDataService
{

    public function getCategories(){
        return  Category::withCount('recipes')
            ->orderBy('recipes_count', 'desc')
            ->take(5)
            ->get();
    }
    public function getRelatedRecipes(Request $request){


        $recipe = $request->route('recipe');

        if (!($recipe instanceof Recipes)) {
            return [];
        }

        return Recipes::where('id', '!=', $recipe->id)
            ->where('category_id', $recipe->category_id)
            ->whereNull('featured_at')
            ->orderBy('view_count', 'desc')
            ->take(4)
            ->get();
    }

    public function getNavigationLinks()
    {
        return $navigationLinks = collect([
            [
                'title' => 'Home',
                'icon' => 'carrot',
                'routeName' => 'home',
                'cssClasses' => $this->getClasses('home')
            ],
            [
                'title' => 'Categories',
                'icon' => 'cubes-stacked',
                'routeName' => 'categories.index',
                'cssClasses' => $this->getClasses('categories.index')
            ],
            [
                'title' => 'Recipes Catalog',
                'icon' => 'bowl-food',
                'routeName' => 'recipes.index',
                'cssClasses' => $this->getClasses('recipes.index')
            ],
            [
                'title' => 'Contact Us',
                'icon' => 'utensils',
                'routeName' => 'pages.contact',
                'cssClasses' => $this->getClasses('pages.contact')
            ]
        ]);

    }

    private function getClasses(string $routeName): string
    {
        $activeRoute = match ($routeName){
            'home' => ['home'],
            'categories.index' => ['categories.index', 'categories.show'],
            'recipes.index' => ['recipes.index', 'recipes.show'],
            'pages.contact' => ['pages.contact'],
            default => [],
        };

        return in_array(request()->route()->getName(), $activeRoute) ? 'active' : '';
    }

    public function getFooterData()
    {
        $categories = Category::withCount('recipes')->orderBy('recipes_count', 'desc')->take(5)->get();
        $featuredRecipes = Recipes::whereNotNull('featured_at')->orderBy('featured_at')->take(5)->get();
        return compact('categories', 'featuredRecipes');
    }
}
