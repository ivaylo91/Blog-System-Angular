<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class RecipeController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Recipe::with(['category', 'tags'])
            ->where('published', true);

        if ($search = $request->input('q')) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('excerpt', 'like', "%{$search}%")
                  ->orWhereHas('ingredients', fn ($iq) => $iq->where('name', 'like', "%{$search}%"));
            });
        }

        if ($category = $request->input('category')) {
            $query->whereHas('category', fn ($q) => $q->where('slug', $category));
        }

        if ($difficulty = $request->input('difficulty')) {
            $query->where('difficulty', $difficulty);
        }

        $sort = $request->input('sort', 'newest');
        $query = match ($sort) {
            'fastest' => $query->orderByRaw('(prep_minutes + cook_minutes) ASC'),
            'easiest' => $query->orderByRaw("FIELD(difficulty, 'Лесно', 'Средно', 'За напреднали')"),
            default => $query->orderByDesc('published_at'),
        };

        $perPage = min((int) $request->input('per_page', 6), 50);
        $recipes = $query->paginate($perPage);

        return response()->json($recipes)
            ->header('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
    }

    public function show(string $slug): JsonResponse
    {
        $recipe = Recipe::with([
            'category',
            'tags',
            'ingredients',
            'steps',
            'topLevelComments.author',
        ])->withCount('favoritedBy')->where('slug', $slug)->where('published', true)->first();

        if (! $recipe) {
            return response()->json(['message' => 'Рецептата не е намерена.'], 404);
        }

        $ratingData = $recipe->comments()
            ->whereNotNull('rating')
            ->selectRaw('COUNT(*) as count, AVG(rating) as avg')
            ->first();

        $averageRating = $ratingData->count > 0 ? round($ratingData->avg, 1) : null;
        $ratingsCount  = (int) $ratingData->count;
        $favoriteCount = $recipe->favorited_by_count;

        $recipeData = $recipe->toArray();
        $recipeData['comments'] = $recipeData['top_level_comments'] ?? [];
        unset($recipeData['top_level_comments']);

        return response()->json([
            'recipe' => $recipeData,
            'averageRating' => $averageRating,
            'ratingsCount' => $ratingsCount,
            'favoriteCount' => $favoriteCount,
        ])->header('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
    }

    public function featured(): JsonResponse
    {
        $recipes = Cache::remember('featured_recipes', 300, function () {
            return Recipe::with(['category'])
                ->where('published', true)
                ->inRandomOrder()
                ->limit(7)
                ->get();
        });

        return response()->json($recipes)
            ->header('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
    }

    public function related(string $slug): JsonResponse
    {
        $recipe = Recipe::where('slug', $slug)->first();

        if (! $recipe) {
            return response()->json([]);
        }

        $related = Recipe::with(['category'])
            ->where('published', true)
            ->where('id', '!=', $recipe->id)
            ->where('category_id', $recipe->category_id)
            ->limit(3)
            ->get();

        return response()->json($related)
            ->header('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
    }

    public function categories(): JsonResponse
    {
        $categories = Category::withCount(['recipes' => fn ($q) => $q->where('published', true)])
            ->orderBy('name')
            ->get();

        return response()->json($categories)
            ->header('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    }

    // ── Dashboard endpoints (auth required) ──

    public function dashboardIndex(Request $request): JsonResponse
    {
        $user = $request->user();

        $query = Recipe::with(['category', 'user:id,name,email']);

        if (! $user->isAdmin()) {
            $query->where('user_id', $user->id);
        }

        $recipes = $query->orderByDesc('updated_at')->get();

        return response()->json($recipes);
    }

    public function store(Request $request): JsonResponse
    {
        $key = 'create-recipe:' . $request->user()->id;
        if (RateLimiter::tooManyAttempts($key, 10)) {
            return response()->json(['message' => 'Твърде много опити.'], 429);
        }
        RateLimiter::hit($key, 60);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'nullable|string',
            'description' => 'nullable|string',
            'prep_minutes' => 'integer|min:0',
            'cook_minutes' => 'integer|min:0',
            'servings' => 'integer|min:1',
            'difficulty' => 'in:Лесно,Средно,За напреднали',
            'published' => 'boolean',
            'category_id' => 'nullable|exists:categories,id',
            'ingredients' => 'array|max:100',
            'ingredients.*.amount' => 'required|string|max:50',
            'ingredients.*.name' => 'required|string|max:200',
            'steps' => 'array|max:50',
            'steps.*.title' => 'required|string|max:255',
            'steps.*.description' => 'required|string|max:5000',
            'tags' => 'array|max:20',
            'tags.*' => 'string|max:50',
            'hero_image' => 'nullable|image|mimes:jpeg,png,webp|max:5120',
        ]);

        $slug = Str::slug($validated['title']);
        $originalSlug = $slug;
        $counter = 1;
        while (Recipe::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        $imagePath = null;
        if ($request->hasFile('hero_image')) {
            $imagePath = $this->storeOptimizedImage($request->file('hero_image'));
        }

        $recipe = Recipe::create([
            'slug' => $slug,
            'title' => $validated['title'],
            'excerpt' => $validated['excerpt'] ?? null,
            'description' => $validated['description'] ?? null,
            'hero_image' => $imagePath,
            'prep_minutes' => $validated['prep_minutes'] ?? 0,
            'cook_minutes' => $validated['cook_minutes'] ?? 0,
            'servings' => $validated['servings'] ?? 4,
            'difficulty' => $validated['difficulty'] ?? 'Средно',
            'published' => $validated['published'] ?? false,
            'published_at' => ($validated['published'] ?? false) ? now() : null,
            'user_id' => $request->user()->id,
            'category_id' => $validated['category_id'] ?? null,
        ]);

        if (! empty($validated['ingredients'])) {
            foreach ($validated['ingredients'] as $i => $ing) {
                $recipe->ingredients()->create([...$ing, 'position' => $i]);
            }
        }

        if (! empty($validated['steps'])) {
            foreach ($validated['steps'] as $i => $step) {
                $recipe->steps()->create([...$step, 'position' => $i]);
            }
        }

        if (! empty($validated['tags'])) {
            $tagIds = [];
            foreach ($validated['tags'] as $tagName) {
                $tag = \App\Models\Tag::firstOrCreate(
                    ['slug' => Str::slug($tagName)],
                    ['name' => $tagName]
                );
                $tagIds[] = $tag->id;
            }
            $recipe->tags()->sync($tagIds);
        }

        return response()->json(
            $recipe->load(['category', 'tags', 'ingredients', 'steps']),
            201
        );
    }

    public function update(Request $request, string $slug): JsonResponse
    {
        $recipe = Recipe::where('slug', $slug)->firstOrFail();

        if (! $request->user()->isAdmin() && $recipe->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Нямаш права.'], 403);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'excerpt' => 'nullable|string',
            'description' => 'nullable|string',
            'prep_minutes' => 'integer|min:0',
            'cook_minutes' => 'integer|min:0',
            'servings' => 'integer|min:1',
            'difficulty' => 'in:Лесно,Средно,За напреднали',
            'published' => 'boolean',
            'category_id' => 'nullable|exists:categories,id',
            'ingredients' => 'array|max:100',
            'ingredients.*.amount' => 'required|string|max:50',
            'ingredients.*.name' => 'required|string|max:200',
            'steps' => 'array|max:50',
            'steps.*.title' => 'required|string|max:255',
            'steps.*.description' => 'required|string|max:5000',
            'tags' => 'array|max:20',
            'tags.*' => 'string|max:50',
            'hero_image' => 'nullable|image|mimes:jpeg,png,webp|max:5120',
        ]);

        if ($request->hasFile('hero_image')) {
            // Delete old image if exists
            if ($recipe->hero_image) {
                $oldPath = str_replace('/storage/', '', $recipe->hero_image);
                Storage::disk('public')->delete($oldPath);
            }
            $validated['hero_image'] = $this->storeOptimizedImage($request->file('hero_image'));
        }

        if (isset($validated['published']) && $validated['published'] && ! $recipe->published_at) {
            $validated['published_at'] = now();
        }

        $recipe->update(collect($validated)->except(['ingredients', 'steps', 'tags'])->toArray());

        if (isset($validated['ingredients'])) {
            $recipe->ingredients()->delete();
            foreach ($validated['ingredients'] as $i => $ing) {
                $recipe->ingredients()->create([...$ing, 'position' => $i]);
            }
        }

        if (isset($validated['steps'])) {
            $recipe->steps()->delete();
            foreach ($validated['steps'] as $i => $step) {
                $recipe->steps()->create([...$step, 'position' => $i]);
            }
        }

        if (isset($validated['tags'])) {
            $tagIds = [];
            foreach ($validated['tags'] as $tagName) {
                $tag = \App\Models\Tag::firstOrCreate(
                    ['slug' => Str::slug($tagName)],
                    ['name' => $tagName]
                );
                $tagIds[] = $tag->id;
            }
            $recipe->tags()->sync($tagIds);
        }

        return response()->json(
            $recipe->fresh()->load(['category', 'tags', 'ingredients', 'steps'])
        );
    }

    public function destroy(Request $request, string $slug): JsonResponse
    {
        $recipe = Recipe::where('slug', $slug)->firstOrFail();

        if (! $request->user()->isAdmin() && $recipe->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Нямаш права.'], 403);
        }

        $recipe->delete();

        return response()->json(['message' => 'Рецептата е изтрита.']);
    }

    private function storeOptimizedImage(\Illuminate\Http\UploadedFile $file): string
    {
        if (! function_exists('imagewebp') || ! function_exists('imagecreatefromjpeg')) {
            return '/storage/' . $file->store('recipes', 'public');
        }

        $source = match ($file->getMimeType()) {
            'image/jpeg' => @imagecreatefromjpeg($file->getRealPath()),
            'image/png'  => @imagecreatefrompng($file->getRealPath()),
            'image/webp' => @imagecreatefromwebp($file->getRealPath()),
            default      => false,
        };

        if (! $source) {
            return '/storage/' . $file->store('recipes', 'public');
        }

        $origW = imagesx($source);
        $origH = imagesy($source);

        $maxW  = 1200;
        $maxH  = 900;
        $ratio = min($maxW / $origW, $maxH / $origH, 1.0);
        $newW  = (int) round($origW * $ratio);
        $newH  = (int) round($origH * $ratio);

        $canvas = imagecreatetruecolor($newW, $newH);
        imagealphablending($canvas, false);
        imagesavealpha($canvas, true);
        imagecopyresampled($canvas, $source, 0, 0, 0, 0, $newW, $newH, $origW, $origH);
        imagedestroy($source);

        $filename = 'recipes/' . Str::random(20) . '.webp';
        Storage::disk('public')->makeDirectory('recipes');
        $fullPath = Storage::disk('public')->path($filename);

        imagewebp($canvas, $fullPath, 82);
        imagedestroy($canvas);

        return '/storage/' . $filename;
    }
}
