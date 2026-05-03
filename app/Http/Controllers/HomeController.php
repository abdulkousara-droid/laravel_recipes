<?php

namespace App\Http\Controllers;

use App\Models\Recipes;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
            {
                $carouselRecipes = Recipes::orderBy('view_count', 'DESC')->take(3)->get();
                $latestRecipes = Recipes::latest()->take(4)->get();
                $categories = Category::withCount('recipes')
                                        ->orderBy('recipes_count', 'DESC')
                                        ->with('recipes')
                                        ->take(3)
                                        ->get();

                return inertia('home', compact('carouselRecipes', 'latestRecipes', 'categories'));
            }
    }
}
