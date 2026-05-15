<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AddCacheHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        $path = $request->path();

        // Hashed static assets (JS, CSS, fonts, images) — immutable for 1 year
        if (preg_match('/\.[a-f0-9]{8,}\.(js|css|woff2?|ttf|svg|png|jpg|webp)$/i', $path)) {
            $response->headers->set('Cache-Control', 'public, max-age=31536000, immutable');
            return $response;
        }

        // Cookie-setting responses (CSRF, session) — let Laravel/Sanctum own the headers
        if ($response->headers->has('Set-Cookie')) {
            return $response;
        }

        // Angular SPA shell — never store so browsers always fetch fresh chunk references
        $response->headers->set('Cache-Control', 'no-store');

        return $response;
    }
}
