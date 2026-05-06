<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Recipes;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class CategoryController extends Controller
{
    public function index(Request $request){

           $q = $request->input('q');
           $categories = Category::withCount('recipes')
                            ->when($request->has('q') && $q, function(Builder $query) use ($q) {
                                $query->where('title', 'like', "%{$q}%");
                            })
                            ->paginate(8)
                            ->withQueryString();

            return inertia('categories', compact('categories'));
    }

    public function show(Category $category, Request $request){

        $q = $request->get('q');
        $recipes = Recipes::where('category_id', $category->id)
                            ->when($request->has('q') && $q, function(Builder $query) use ($q) {
                                $query->where('title', 'like', "%{$q}%")
                                      ->orWhere('excerpt', 'like', "%{$q}%");
                            })
                            ->paginate(4)
                            ->withQueryString();
        $flags = Recipes::FLAGS;
        return inertia('categories-show', compact('category', 'recipes', 'flags'));
    }
}
