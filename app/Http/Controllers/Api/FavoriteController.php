<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RecipeResource;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function toggle(Request $request, string $slug): JsonResponse
    {
        $recipe = Recipe::withCount('favoritedBy')
            ->where('slug', $slug)
            ->firstOrFail();

        $user       = $request->user();
        $isFavorite = $user->favoriteRecipes()->where('recipe_id', $recipe->id)->exists();

        if ($isFavorite) {
            $user->favoriteRecipes()->detach($recipe->id);
            $newCount = $recipe->favorited_by_count - 1;
        } else {
            $user->favoriteRecipes()->attach($recipe->id);
            $newCount = $recipe->favorited_by_count + 1;
        }

        return response()->json([
            'isFavorite'    => ! $isFavorite,
            'favoriteCount' => max(0, $newCount),
        ]);
    }

    public function status(Request $request, string $slug): JsonResponse
    {
        $recipe = Recipe::withCount('favoritedBy')
            ->where('slug', $slug)
            ->first();

        if (! $recipe) {
            return response()->json(['isFavorite' => false, 'favoriteCount' => 0]);
        }

        $isFavorite = $request->user()
            ? $request->user()->favoriteRecipes()->where('recipe_id', $recipe->id)->exists()
            : false;

        return response()->json([
            'isFavorite'    => $isFavorite,
            'favoriteCount' => (int) $recipe->favorited_by_count,
        ]);
    }

    public function index(Request $request): JsonResponse
    {
        $recipes = $request->user()
            ->favoriteRecipes()
            ->with(['category'])
            ->get();

        return response()->json(RecipeResource::collection($recipes));
    }
}
