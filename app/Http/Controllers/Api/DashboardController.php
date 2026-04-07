<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use App\Models\Comment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function stats(Request $request): JsonResponse
    {
        $user = $request->user();

        $totalRecipes = Recipe::where('user_id', $user->id)->count();
        $publishedRecipes = Recipe::where('user_id', $user->id)->where('published', true)->count();
        $totalComments = Comment::whereHas('recipe', fn ($q) => $q->where('user_id', $user->id))->count();
        $totalFavorites = \DB::table('favorites')
            ->whereIn('recipe_id', Recipe::where('user_id', $user->id)->pluck('id'))
            ->count();

        $draftRecipes = Recipe::where('user_id', $user->id)->where('published', false)->count();

        $recentComments = Comment::with(['author', 'recipe'])
            ->whereHas('recipe', fn ($q) => $q->where('user_id', $user->id))
            ->orderByDesc('created_at')
            ->limit(5)
            ->get();

        return response()->json([
            'totalRecipes' => $totalRecipes,
            'publishedRecipes' => $publishedRecipes,
            'draftRecipes' => $draftRecipes,
            'totalComments' => $totalComments,
            'totalFavorites' => $totalFavorites,
            'recentComments' => $recentComments,
        ]);
    }
}
