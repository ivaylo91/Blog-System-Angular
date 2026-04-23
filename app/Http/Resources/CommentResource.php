<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

final class CommentResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id'         => $this->id,
            'body'       => $this->body,
            'rating'     => $this->rating,
            'parent_id'  => $this->parent_id,
            'created_at' => $this->created_at?->toIso8601String(),
            'updated_at' => $this->updated_at?->toIso8601String(),
            'author'     => new UserResource($this->whenLoaded('author')),
            'replies'    => CommentResource::collection($this->whenLoaded('replies')),
        ];
    }
}
