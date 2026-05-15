<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Cache;
use App\Models\Recipe;

// Sitemap — must come before the SPA catch-all
Route::get('/sitemap.xml', function () {
    $recipes = Cache::remember('sitemap_recipes', 3600, fn () =>
        Recipe::where('published', true)
            ->select('slug', 'updated_at')
            ->orderByDesc('updated_at')
            ->get()
    );

    return response()
        ->view('sitemap', compact('recipes'))
        ->header('Content-Type', 'application/xml; charset=utf-8')
        ->header('Cache-Control', 'public, max-age=3600');
});

// Serve Angular SPA for all non-API routes
Route::get('/{any}', function () {
    return response()->file(public_path('index.html'));
})->where('any', '^(?!api|storage|sanctum).*$');
