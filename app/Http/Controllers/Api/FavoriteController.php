<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function toggle(Request $request, string $slug): JsonResponse
    {
        $recipe = Recipe::where('slug', $slug)->firstOrFail();
        $user = $request->user();

        $isFavorite = $user->favoriteRecipes()->where('recipe_id', $recipe->id)->exists();

        if ($isFavorite) {
            $user->favoriteRecipes()->detach($recipe->id);
        } else {
            $user->favoriteRecipes()->attach($recipe->id);
        }

        return response()->json([
            'isFavorite' => ! $isFavorite,
            'favoriteCount' => $recipe->favoritedBy()->count(),
        ]);
    }

    public function status(Request $request, string $slug): JsonResponse
    {
        $recipe = Recipe::where('slug', $slug)->first();

        if (! $recipe) {
            return response()->json(['isFavorite' => false, 'favoriteCount' => 0]);
        }

        $isFavorite = false;
        if ($request->user()) {
            $isFavorite = $request->user()->favoriteRecipes()->where('recipe_id', $recipe->id)->exists();
        }

        return response()->json([
            'isFavorite' => $isFavorite,
            'favoriteCount' => $recipe->favoritedBy()->count(),
        ]);
    }

    public function index(Request $request): JsonResponse
    {
        $recipes = $request->user()
            ->favoriteRecipes()
            ->with(['category'])
            ->get();

        return response()->json($recipes);
    }
}
