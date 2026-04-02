<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\FavoriteController;
use App\Http\Controllers\Api\RecipeController;
use Illuminate\Support\Facades\Route;

// ── Public routes ──
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/recipes', [RecipeController::class, 'index']);
Route::get('/recipes/featured', [RecipeController::class, 'featured']);
Route::get('/recipes/categories', [RecipeController::class, 'categories']);
Route::get('/recipes/{slug}', [RecipeController::class, 'show']);
Route::get('/recipes/{slug}/related', [RecipeController::class, 'related']);
Route::get('/recipes/{slug}/favorite-status', [FavoriteController::class, 'status']);

// ── Authenticated routes ──
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/user/profile', [AuthController::class, 'updateProfile']);

    // Favorites
    Route::post('/recipes/{slug}/favorite', [FavoriteController::class, 'toggle']);
    Route::get('/favorites', [FavoriteController::class, 'index']);

    // Comments & Ratings
    Route::post('/recipes/{slug}/comment', [CommentController::class, 'storeOrUpdate']);
    Route::post('/recipes/{slug}/rate', [CommentController::class, 'rate']);
    Route::delete('/comments/{id}', [CommentController::class, 'destroy']);

    // Dashboard
    Route::get('/dashboard/stats', [DashboardController::class, 'stats']);
    Route::get('/dashboard/recipes', [RecipeController::class, 'dashboardIndex']);
    Route::post('/dashboard/recipes', [RecipeController::class, 'store']);
    Route::put('/dashboard/recipes/{slug}', [RecipeController::class, 'update']);
    Route::delete('/dashboard/recipes/{slug}', [RecipeController::class, 'destroy']);

    // Admin comments
    Route::get('/admin/comments', [CommentController::class, 'adminIndex']);
    Route::post('/admin/comments/bulk-delete', [CommentController::class, 'bulkDestroy']);
});
