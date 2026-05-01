<?php

use App\Models\Recipes;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', function () {
    $carouselRecipes = Recipes::orderBy('view_count', 'DESC')->take(3)->get();
    $latestRecipes = Recipes::latest()->take(4)->get();

    return inertia('home', [
        'carouselRecipes' => $carouselRecipes
        'latestRecipes' => $latestRecipes
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
