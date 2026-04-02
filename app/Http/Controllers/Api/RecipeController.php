<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RecipeController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Recipe::with(['category', 'tags', 'ingredients', 'steps'])
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

        return response()->json($recipes);
    }

    public function show(string $slug): JsonResponse
    {
        $recipe = Recipe::with([
            'category',
            'tags',
            'ingredients',
            'steps',
            'topLevelComments.author',
        ])->where('slug', $slug)->where('published', true)->first();

        if (! $recipe) {
            return response()->json(['message' => 'Рецептата не е намерена.'], 404);
        }

        $ratings = $recipe->comments()->whereNotNull('rating')->pluck('rating');
        $averageRating = $ratings->isNotEmpty() ? round($ratings->avg(), 1) : null;

        return response()->json([
            'recipe' => $recipe,
            'averageRating' => $averageRating,
            'ratingsCount' => $ratings->count(),
            'favoriteCount' => $recipe->favoritedBy()->count(),
        ]);
    }

    public function featured(): JsonResponse
    {
        $recipes = Recipe::with(['category'])
            ->where('published', true)
            ->orderByDesc('published_at')
            ->limit(3)
            ->get();

        return response()->json($recipes);
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

        return response()->json($related);
    }

    public function categories(): JsonResponse
    {
        $categories = Category::withCount(['recipes' => fn ($q) => $q->where('published', true)])
            ->orderBy('name')
            ->get();

        return response()->json($categories);
    }

    // ── Dashboard endpoints (auth required) ──

    public function dashboardIndex(Request $request): JsonResponse
    {
        $recipes = Recipe::with(['category'])
            ->orderByDesc('updated_at')
            ->get();

        return response()->json($recipes);
    }

    public function store(Request $request): JsonResponse
    {
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
            'ingredients' => 'array',
            'ingredients.*.amount' => 'required|string',
            'ingredients.*.name' => 'required|string',
            'steps' => 'array',
            'steps.*.title' => 'required|string',
            'steps.*.description' => 'required|string',
            'tags' => 'array',
            'tags.*' => 'string',
            'hero_image' => 'nullable|image|mimes:jpeg,png,webp,svg|max:5120',
        ]);

        $slug = Str::slug($validated['title']);
        $originalSlug = $slug;
        $counter = 1;
        while (Recipe::where('slug', $slug)->exists()) {
            $slug = $originalSlug . '-' . $counter++;
        }

        $imagePath = null;
        if ($request->hasFile('hero_image')) {
            $imagePath = '/storage/' . $request->file('hero_image')->store('recipes', 'public');
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
            'ingredients' => 'array',
            'ingredients.*.amount' => 'required|string',
            'ingredients.*.name' => 'required|string',
            'steps' => 'array',
            'steps.*.title' => 'required|string',
            'steps.*.description' => 'required|string',
            'tags' => 'array',
            'tags.*' => 'string',
            'hero_image' => 'nullable|image|mimes:jpeg,png,webp,svg|max:5120',
        ]);

        if ($request->hasFile('hero_image')) {
            $validated['hero_image'] = '/storage/' . $request->file('hero_image')->store('recipes', 'public');
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

    public function destroy(string $slug): JsonResponse
    {
        $recipe = Recipe::where('slug', $slug)->firstOrFail();
        $recipe->delete();

        return response()->json(['message' => 'Рецептата е изтрита.']);
    }
}
