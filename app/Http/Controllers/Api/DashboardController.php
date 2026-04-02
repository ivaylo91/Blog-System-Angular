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
        $totalRecipes = Recipe::count();
        $publishedRecipes = Recipe::where('published', true)->count();
        $totalComments = Comment::count();
        $totalFavorites = \DB::table('favorites')->count();

        return response()->json([
            'totalRecipes' => $totalRecipes,
            'publishedRecipes' => $publishedRecipes,
            'totalComments' => $totalComments,
            'totalFavorites' => $totalFavorites,
        ]);
    }
}
