<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\RecipeResource;
use App\Jobs\OptimizeRecipeImage;
use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class RecipeController extends Controller
{
    public function index(Request $request): \Symfony\Component\HttpFoundation\Response
    {
        $query = Recipe::with(['category', 'tags'])
            ->where('published', true);

        if ($search = $request->input('q')) {
            $query->where(function ($q) use ($search): void {
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
            default   => $query->orderByDesc('published_at'),
        };

        $perPage = min((int) $request->input('per_page', 6), 50);

        return RecipeResource::collection($query->paginate($perPage))
            ->response()
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
            'topLevelComments.replies.author',
        ])
        ->withCount(['favoritedBy', 'ratings'])
        ->withAvg('ratings', 'rating')
        ->where('slug', $slug)
        ->where('published', true)
        ->first();

        if (! $recipe) {
            return response()->json(['message' => 'Рецептата не е намерена.'], 404);
        }

        return response()->json([
            'recipe'        => new RecipeResource($recipe),
            'averageRating' => $recipe->ratings_avg_rating
                ? round((float) $recipe->ratings_avg_rating, 1)
                : null,
            'ratingsCount'  => (int) $recipe->ratings_count,
            'favoriteCount' => (int) $recipe->favorited_by_count,
        ])->header('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
    }

    public function featured(): JsonResponse
    {
        $data = Cache::remember('featured_recipes', 300, function () {
            $recipes = Recipe::with(['category'])
                ->where('published', true)
                ->inRandomOrder()
                ->limit(7)
                ->get();

            return json_decode(json_encode(RecipeResource::collection($recipes)), true);
        });

        return response()->json($data)
            ->header('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
    }

    public function related(string $slug): JsonResponse
    {
        $data = Cache::remember("related:{$slug}", 300, function () use ($slug) {
            $recipe = Recipe::select('id', 'category_id')->where('slug', $slug)->first();
            if (! $recipe) {
                return [];
            }

            $related = Recipe::with(['category'])
                ->where('published', true)
                ->where('id', '!=', $recipe->id)
                ->where('category_id', $recipe->category_id)
                ->limit(3)
                ->get();

            return json_decode(json_encode(RecipeResource::collection($related)), true);
        });

        return response()->json($data)
            ->header('Cache-Control', 'public, max-age=300, stale-while-revalidate=600');
    }

    public function categories(): JsonResponse
    {
        $data = Cache::remember('categories_list', 3600, function () {
            $categories = Category::withCount(['recipes' => fn ($q) => $q->where('published', true)])
                ->orderBy('name')
                ->get();

            return json_decode(json_encode(CategoryResource::collection($categories)), true);
        });

        return response()->json($data)
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

        return response()->json(RecipeResource::collection($recipes));
    }

    public function store(Request $request): JsonResponse
    {
        $key = 'create-recipe:' . $request->user()->id;
        if (RateLimiter::tooManyAttempts($key, 10)) {
            return response()->json(['message' => 'Твърде много опити.'], 429);
        }
        RateLimiter::hit($key, 60);

        $validated = $request->validate([
            'title'                    => 'required|string|max:255',
            'excerpt'                  => 'nullable|string',
            'description'              => 'nullable|string',
            'prep_minutes'             => 'integer|min:0',
            'cook_minutes'             => 'integer|min:0',
            'servings'                 => 'integer|min:1',
            'difficulty'               => 'in:Лесно,Средно,За напреднали',
            'published'                => 'boolean',
            'category_id'              => 'nullable|exists:categories,id',
            'ingredients'              => 'array|max:100',
            'ingredients.*.amount'     => 'nullable|string|max:50',
            'ingredients.*.name'       => 'required|string|max:200',
            'steps'                    => 'array|max:50',
            'steps.*.title'            => 'required|string|max:255',
            'steps.*.description'      => 'required|string|max:5000',
            'tags'                     => 'array|max:20',
            'tags.*'                   => 'string|max:50',
            'hero_image'               => 'nullable|image|mimes:jpeg,png,webp|max:5120',
        ]);

        $slug = $this->uniqueSlug(Str::slug($validated['title']));

        $rawPath = null;
        if ($request->hasFile('hero_image')) {
            $rawPath = $request->file('hero_image')->store('recipes/tmp', 'public');
        }

        $recipe = Recipe::create([
            'slug'         => $slug,
            'title'        => $validated['title'],
            'excerpt'      => $validated['excerpt'] ?? null,
            'description'  => $validated['description'] ?? null,
            'hero_image'   => $rawPath ? '/storage/' . $rawPath : null,
            'prep_minutes' => $validated['prep_minutes'] ?? 0,
            'cook_minutes' => $validated['cook_minutes'] ?? 0,
            'servings'     => $validated['servings'] ?? 4,
            'difficulty'   => $validated['difficulty'] ?? 'Средно',
            'published'    => $validated['published'] ?? false,
            'published_at' => ($validated['published'] ?? false) ? now() : null,
            'user_id'      => $request->user()->id,
            'category_id'  => $validated['category_id'] ?? null,
        ]);

        $this->syncIngredients($recipe, $validated['ingredients'] ?? []);
        $this->syncSteps($recipe, $validated['steps'] ?? []);
        $this->syncTags($recipe, $validated['tags'] ?? []);

        if ($rawPath) {
            try {
                OptimizeRecipeImage::dispatch($recipe, $rawPath);
            } catch (\Throwable $e) {
                logger()->error('Failed to dispatch image job', ['recipe_id' => $recipe->id, 'error' => $e->getMessage()]);
            }
        }

        return response()->json(
            new RecipeResource($recipe->load(['category', 'tags', 'ingredients', 'steps'])),
            201
        );
    }

    public function update(Request $request, string $slug): JsonResponse
    {
        Cache::forget("related:{$slug}");

        $recipe = Recipe::where('slug', $slug)->firstOrFail();

        if (! $request->user()->isAdmin() && $recipe->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Нямаш права.'], 403);
        }

        $validated = $request->validate([
            'title'                    => 'sometimes|string|max:255',
            'excerpt'                  => 'nullable|string',
            'description'              => 'nullable|string',
            'prep_minutes'             => 'integer|min:0',
            'cook_minutes'             => 'integer|min:0',
            'servings'                 => 'integer|min:1',
            'difficulty'               => 'in:Лесно,Средно,За напреднали',
            'published'                => 'boolean',
            'category_id'              => 'nullable|exists:categories,id',
            'ingredients'              => 'array|max:100',
            'ingredients.*.amount'     => 'nullable|string|max:50',
            'ingredients.*.name'       => 'required|string|max:200',
            'steps'                    => 'array|max:50',
            'steps.*.title'            => 'required|string|max:255',
            'steps.*.description'      => 'required|string|max:5000',
            'tags'                     => 'array|max:20',
            'tags.*'                   => 'string|max:50',
            'hero_image'               => 'nullable|image|mimes:jpeg,png,webp|max:5120',
        ]);

        if ($request->hasFile('hero_image')) {
            if ($recipe->hero_image) {
                Storage::disk('public')->delete(
                    ltrim(str_replace('/storage/', '', $recipe->hero_image), '/')
                );
            }
            $rawPath = $request->file('hero_image')->store('recipes/tmp', 'public');
            $validated['hero_image'] = '/storage/' . $rawPath;
            OptimizeRecipeImage::dispatch($recipe, $rawPath);
        }

        if (isset($validated['published']) && $validated['published'] && ! $recipe->published_at) {
            $validated['published_at'] = now();
        }

        $recipe->update(collect($validated)->except(['ingredients', 'steps', 'tags'])->toArray());

        if (isset($validated['ingredients'])) {
            $recipe->ingredients()->delete();
            $this->syncIngredients($recipe, $validated['ingredients']);
        }

        if (isset($validated['steps'])) {
            $recipe->steps()->delete();
            $this->syncSteps($recipe, $validated['steps']);
        }

        if (isset($validated['tags'])) {
            $this->syncTags($recipe, $validated['tags']);
        }

        return response()->json(
            new RecipeResource($recipe->fresh()->load(['category', 'tags', 'ingredients', 'steps']))
        );
    }

    public function destroy(Request $request, string $slug): JsonResponse
    {
        $recipe = Recipe::where('slug', $slug)->firstOrFail();

        if (! $request->user()->isAdmin() && $recipe->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Нямаш права.'], 403);
        }

        $recipe->delete();

        Cache::forget("related:{$slug}");
        Cache::forget('featured_recipes');

        return response()->json(['message' => 'Рецептата е изтрита.']);
    }

    // ── Private helpers ──

    private function uniqueSlug(string $base): string
    {
        $existing = Recipe::where('slug', 'like', $base . '%')
            ->pluck('slug')
            ->all();

        if (! in_array($base, $existing, true)) {
            return $base;
        }

        $counter = 1;
        while (in_array($base . '-' . $counter, $existing, true)) {
            $counter++;
        }

        return $base . '-' . $counter;
    }

    private function syncIngredients(Recipe $recipe, array $ingredients): void
    {
        if (empty($ingredients)) {
            return;
        }

        $recipe->ingredients()->insert(
            array_map(fn ($ing, $i) => [
                'recipe_id' => $recipe->id,
                'name'      => $ing['name'],
                'amount'    => $ing['amount'] ?? '',
                'position'  => $i,
            ], $ingredients, array_keys($ingredients))
        );
    }

    private function syncSteps(Recipe $recipe, array $steps): void
    {
        if (empty($steps)) {
            return;
        }

        $recipe->steps()->insert(
            array_map(fn ($step, $i) => [
                'recipe_id'   => $recipe->id,
                'title'       => $step['title'],
                'description' => $step['description'],
                'position'    => $i,
            ], $steps, array_keys($steps))
        );
    }

    private function syncTags(Recipe $recipe, array $tags): void
    {
        if (empty($tags)) {
            return;
        }

        $tagIds = array_map(function (string $name): int {
            return \App\Models\Tag::firstOrCreate(
                ['slug' => Str::slug($name)],
                ['name' => $name]
            )->id;
        }, $tags);

        $recipe->tags()->sync($tagIds);
    }
}
