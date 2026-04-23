<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

final class RecipeResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'                => $this->id,
            'slug'              => $this->slug,
            'title'             => $this->title,
            'excerpt'           => $this->excerpt,
            'description'       => $this->description,
            'hero_image'        => $this->hero_image,
            'hero_palette_from' => $this->hero_palette_from,
            'hero_palette_via'  => $this->hero_palette_via,
            'hero_palette_to'   => $this->hero_palette_to,
            'prep_minutes'      => $this->prep_minutes,
            'cook_minutes'      => $this->cook_minutes,
            'servings'          => $this->servings,
            'difficulty'        => $this->difficulty,
            'published'         => $this->published,
            'published_at'      => $this->published_at?->toIso8601String(),
            'created_at'        => $this->created_at?->toIso8601String(),
            'updated_at'        => $this->updated_at?->toIso8601String(),
            'category'          => new CategoryResource($this->whenLoaded('category')),
            'user'              => new UserResource($this->whenLoaded('user')),
            'tags'              => $this->whenLoaded('tags', fn () => $this->tags->map(
                fn ($t) => ['id' => $t->id, 'name' => $t->name, 'slug' => $t->slug]
            )),
            'ingredients'        => IngredientResource::collection($this->whenLoaded('ingredients')),
            'steps'              => RecipeStepResource::collection($this->whenLoaded('steps')),
            // top_level_comments relation exposed as 'comments' for API compatibility
            'comments'           => CommentResource::collection($this->whenLoaded('topLevelComments')),
            'favorited_by_count' => $this->whenCounted('favoritedBy'),
        ];
    }
}
