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

        // HTML shell and API responses — must revalidate so Angular updates are picked up
        $response->headers->set('Cache-Control', 'no-cache, must-revalidate');
        $response->headers->set('Vary', 'Accept-Encoding');

        return $response;
    }
}
