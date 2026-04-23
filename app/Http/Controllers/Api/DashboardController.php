<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function stats(Request $request): JsonResponse
    {
        $user = $request->user();

        $recipeCounts = Recipe::where('user_id', $user->id)
            ->selectRaw('COUNT(*) as total, SUM(published = 1) as published, SUM(published = 0) as draft')
            ->first();

        $totalComments = DB::table('comments')
            ->join('recipes', 'comments.recipe_id', '=', 'recipes.id')
            ->where('recipes.user_id', $user->id)
            ->count();

        $totalFavorites = DB::table('favorites')
            ->join('recipes', 'favorites.recipe_id', '=', 'recipes.id')
            ->where('recipes.user_id', $user->id)
            ->count();

        $recentComments = Comment::with(['author', 'recipe'])
            ->whereHas('recipe', fn ($q) => $q->where('user_id', $user->id))
            ->orderByDesc('created_at')
            ->limit(5)
            ->get();

        return response()->json([
            'totalRecipes'     => (int) ($recipeCounts->total ?? 0),
            'publishedRecipes' => (int) ($recipeCounts->published ?? 0),
            'draftRecipes'     => (int) ($recipeCounts->draft ?? 0),
            'totalComments'    => $totalComments,
            'totalFavorites'   => $totalFavorites,
            'recentComments'   => CommentResource::collection($recentComments),
        ]);
    }
}
