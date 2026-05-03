<?php

use App\Models\Recipes;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', function () {
    $carouselRecipes = Recipes::orderBy('view_count', 'DESC')->take(3)->get();
    $latestRecipes = Recipes::latest()->take(4)->get();
    $categories = Category::withCount('recipes')
                            ->orderBy('recipes_count', 'DESC')
                            ->with('recipes')
                            ->take(3)
                            ->get();

    return inertia('home', [
        'carouselRecipes' => $carouselRecipes,
        'latestRecipes' => $latestRecipes,
        'categories' => $categories,
    ]);
})->name('home');

Route::get('categories', function () {
    $categories = Category::withCount('recipes')->paginate(8);
    
    return inertia('categories', ['categories' => $categories]);
})->name('categories');
