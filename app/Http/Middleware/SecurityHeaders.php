<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecurityHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        $isHtml = str_contains($response->headers->get('Content-Type', 'text/html'), 'text/html');

        // ── HSTS ────────────────────────────────────────────────────────────────
        // 1 year, include subdomains, preload-ready
        $response->headers->set(
            'Strict-Transport-Security',
            'max-age=31536000; includeSubDomains; preload'
        );

        // ── X-Content-Type-Options ───────────────────────────────────────────
        $response->headers->set('X-Content-Type-Options', 'nosniff');

        // ── X-Frame-Options (clickjacking) ───────────────────────────────────
        $response->headers->set('X-Frame-Options', 'DENY');

        // ── Referrer-Policy ──────────────────────────────────────────────────
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');

        // ── Cross-Origin Opener Policy (COOP) ────────────────────────────────
        // Isolates the browsing context — prevents cross-origin window references
        $response->headers->set('Cross-Origin-Opener-Policy', 'same-origin');

        // ── Cross-Origin Resource Policy (CORP) ──────────────────────────────
        $response->headers->set('Cross-Origin-Resource-Policy', 'same-origin');

        // ── Permissions Policy ───────────────────────────────────────────────
        $response->headers->set(
            'Permissions-Policy',
            'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()'
        );

        // ── Content Security Policy + Trusted Types ──────────────────────────
        // Only apply to HTML responses (not API JSON, images, fonts, etc.)
        if ($isHtml) {
            $csp = implode('; ', [
                // Default: block everything not explicitly allowed
                "default-src 'self'",

                // Scripts: self only + Angular inline scripts need 'unsafe-inline' only for legacy
                // Use strict-dynamic with nonce for maximum security in production
                "script-src 'self'",

                // Styles: self + Angular inline styles + Google Fonts stylesheet
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

                // Fonts: self + Google Fonts static files
                "font-src 'self' https://fonts.gstatic.com",

                // Images: self + data URIs (for inline SVG/base64) + storage uploads
                "img-src 'self' data: blob: https:",

                // Connect: self API only
                "connect-src 'self'",

                // Media, objects, embeds — all blocked
                "media-src 'none'",
                "object-src 'none'",
                "base-uri 'self'",
                "form-action 'self'",

                // Clickjacking via CSP (complements X-Frame-Options)
                "frame-ancestors 'none'",

                // Trusted Types: prevent DOM XSS via sink injection
                "require-trusted-types-for 'script'",
                "trusted-types angular angular#unsafe-bypass",

                // Upgrade HTTP requests to HTTPS
                "upgrade-insecure-requests",
            ]);

            $response->headers->set('Content-Security-Policy', $csp);
        }

        return $response;
    }
}
