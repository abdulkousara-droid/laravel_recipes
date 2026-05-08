<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\Recipes;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $categories = Category::withCount('recipes')
            ->orderBy('recipes_count', 'desc')
            ->take(5)
            ->get();

        $relatedRecipes = [];
        $recipe = $request->route('recipe');

        if ($recipe instanceof Recipes) {

            $relatedRecipes = Recipes::where('id' , '!=', $recipe->id)
                                  ->where('category_id', $recipe->category_id)
                                  ->whereNull('featured_at')
                                  ->orderBy('view_count', 'DESC')
                                  ->take(4)
                                  ->get();
        }

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'auth' => [
                'user' => $request->user(),
            ],
            'categories' => $categories,
            'relatedRecipes' => $relatedRecipes,
            'sidebarOpen' => ! $request->hasCookie('sidebar_state') || $request->cookie('sidebar_state') === 'true',
        ];
    }
}
