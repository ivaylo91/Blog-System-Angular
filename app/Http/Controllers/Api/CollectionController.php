<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RecipeResource;
use App\Models\Collection;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    private const MAX_COLLECTIONS = 20;
    private const MAX_RECIPES     = 100;

    /** GET /collections — user's collections with cover image + count */
    public function index(Request $request): JsonResponse
    {
        $collections = Collection::where('user_id', $request->user()->id)
            ->withCount('recipes')
            ->with(['recipes' => fn ($q) => $q->select('recipes.id', 'hero_image')->latest('collection_recipe.created_at')->limit(1)])
            ->latest()
            ->get()
            ->map(fn ($c) => [
                'id'            => $c->id,
                'name'          => $c->name,
                'description'   => $c->description,
                'recipes_count' => $c->recipes_count,
                'cover_image'   => $c->recipes->first()?->hero_image,
            ]);

        return response()->json($collections);
    }

    /** POST /collections */
    public function store(Request $request): JsonResponse
    {
        $user = $request->user();

        if (Collection::where('user_id', $user->id)->count() >= self::MAX_COLLECTIONS) {
            return response()->json(['message' => 'Достигнат е максималният брой колекции (' . self::MAX_COLLECTIONS . ').'], 422);
        }

        $data = $request->validate([
            'name'        => 'required|string|max:100',
            'description' => 'nullable|string|max:300',
        ]);

        $collection = Collection::create([
            'user_id'     => $user->id,
            'name'        => $data['name'],
            'description' => $data['description'] ?? null,
        ]);

        return response()->json([
            'id'            => $collection->id,
            'name'          => $collection->name,
            'description'   => $collection->description,
            'recipes_count' => 0,
            'cover_image'   => null,
        ], 201);
    }

    /** GET /collections/{id} — collection + paginated recipes */
    public function show(Request $request, int $id): JsonResponse
    {
        $collection = Collection::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->withCount('recipes')
            ->firstOrFail();

        $recipes = $collection->recipes()
            ->with(['category', 'tags'])
            ->paginate(12);

        return response()->json([
            'collection' => [
                'id'            => $collection->id,
                'name'          => $collection->name,
                'description'   => $collection->description,
                'recipes_count' => $collection->recipes_count,
                'cover_image'   => null,
            ],
            'recipes' => RecipeResource::collection($recipes)->response()->getData(true),
        ]);
    }

    /** PUT /collections/{id} */
    public function update(Request $request, int $id): JsonResponse
    {
        $collection = Collection::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->firstOrFail();

        $data = $request->validate([
            'name'        => 'required|string|max:100',
            'description' => 'nullable|string|max:300',
        ]);

        $collection->update($data);

        return response()->json([
            'id'          => $collection->id,
            'name'        => $collection->name,
            'description' => $collection->description,
        ]);
    }

    /** DELETE /collections/{id} */
    public function destroy(Request $request, int $id): JsonResponse
    {
        $collection = Collection::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->firstOrFail();

        $collection->delete();

        return response()->json(null, 204);
    }

    /** POST /collections/{id}/toggle — add or remove a recipe */
    public function toggleRecipe(Request $request, int $id): JsonResponse
    {
        $collection = Collection::where('id', $id)
            ->where('user_id', $request->user()->id)
            ->withCount('recipes')
            ->firstOrFail();

        $data   = $request->validate(['recipe_slug' => 'required|string']);
        $recipe = Recipe::where('slug', $data['recipe_slug'])->where('published', true)->firstOrFail();

        $exists = $collection->recipes()->where('recipe_id', $recipe->id)->exists();

        if ($exists) {
            $collection->recipes()->detach($recipe->id);
            $newCount = max(0, $collection->recipes_count - 1);
            $added    = false;
        } else {
            if ($collection->recipes_count >= self::MAX_RECIPES) {
                return response()->json(['message' => 'Колекцията е пълна (' . self::MAX_RECIPES . ' рецепти).'], 422);
            }
            $collection->recipes()->attach($recipe->id);
            $newCount = $collection->recipes_count + 1;
            $added    = true;
        }

        return response()->json(['added' => $added, 'recipes_count' => $newCount]);
    }

    /** GET /recipe-collections/{slug} — user's collections flagged by whether they contain this recipe */
    public function forRecipe(Request $request, string $slug): JsonResponse
    {
        $recipe = Recipe::where('slug', $slug)->where('published', true)->firstOrFail();

        // IDs of collections that contain this specific recipe
        $containsRecipe = Collection::where('user_id', $request->user()->id)
            ->whereHas('recipes', fn ($q) => $q->where('recipe_id', $recipe->id))
            ->pluck('id')
            ->toArray();

        $collections = Collection::where('user_id', $request->user()->id)
            ->withCount('recipes')
            ->latest()
            ->get()
            ->map(fn ($c) => [
                'id'            => $c->id,
                'name'          => $c->name,
                'has_recipe'    => in_array($c->id, $containsRecipe, true),
                'recipes_count' => $c->recipes_count,
            ]);

        return response()->json($collections);
    }
}
