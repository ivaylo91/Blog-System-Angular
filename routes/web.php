<?php

use Illuminate\Support\Facades\Route;

// Serve Angular SPA for all non-API routes
Route::get('/{any}', function () {
    return response()->file(public_path('index.html'));
})->where('any', '^(?!api|storage|sanctum).*$');
