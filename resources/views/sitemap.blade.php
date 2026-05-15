<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <!-- Static pages -->
    <url>
        <loc>https://cookingblogofivo.eu/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://cookingblogofivo.eu/recipes</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://cookingblogofivo.eu/categories</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>

    <!-- Recipe pages -->
    @foreach ($recipes as $recipe)
    <url>
        <loc>https://cookingblogofivo.eu/recipes/{{ $recipe->slug }}</loc>
        <lastmod>{{ $recipe->updated_at->toAtomString() }}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    @endforeach

</urlset>
