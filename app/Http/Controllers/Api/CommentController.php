<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Recipe;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

class CommentController extends Controller
{
    public function storeOrUpdate(Request $request, string $slug): JsonResponse
    {
        $key = 'comment:' . $request->user()->id;
        if (RateLimiter::tooManyAttempts($key, 15)) {
            return response()->json(['message' => 'Твърде много опити.'], 429);
        }
        RateLimiter::hit($key, 60);

        $recipe = Recipe::where('slug', $slug)->firstOrFail();
        $user   = $request->user();

        $validated = $request->validate([
            'body'      => 'nullable|string|max:2000',
            'rating'    => 'nullable|integer|min:1|max:5',
            'parent_id' => 'nullable|integer|exists:comments,id',
        ]);

        $parentId = $validated['parent_id'] ?? null;

        if ($parentId && Comment::where('id', $parentId)->whereNotNull('parent_id')->exists()) {
            return response()->json(['message' => 'Не можете да отговаряте на отговор.'], 422);
        }

        if ($parentId) {
            $comment = Comment::create([
                'recipe_id' => $recipe->id,
                'user_id'   => $user->id,
                'parent_id' => $parentId,
                'body'      => $validated['body'] ?? '',
            ]);
            $created = true;
        } else {
            $comment = Comment::firstOrNew([
                'recipe_id' => $recipe->id,
                'user_id'   => $user->id,
                'parent_id' => null,
            ]);
            $created         = ! $comment->exists;
            $comment->body   = $validated['body'] ?? '';
            $comment->rating = $validated['rating'] ?? $comment->rating;
            $comment->save();
        }

        $comment->load('author');

        return response()->json(new CommentResource($comment), $created ? 201 : 200);
    }

    public function rate(Request $request, string $slug): JsonResponse
    {
        $recipe = Recipe::where('slug', $slug)->firstOrFail();
        $user   = $request->user();

        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $comment = Comment::firstOrNew([
            'recipe_id' => $recipe->id,
            'user_id'   => $user->id,
            'parent_id' => null,
        ]);

        $comment->rating = $validated['rating'];
        if (! $comment->exists) {
            $comment->body = '';
        }
        $comment->save();

        $ratingData = $recipe->ratings()
            ->selectRaw('COUNT(*) as count, AVG(rating) as avg')
            ->first();

        return response()->json([
            'rating'        => $comment->rating,
            'averageRating' => $ratingData->count > 0 ? round((float) $ratingData->avg, 1) : null,
            'ratingsCount'  => (int) $ratingData->count,
        ]);
    }

    public function adminIndex(Request $request): JsonResponse
    {
        if (! $request->user()->isAdmin()) {
            return response()->json(['message' => 'Нямаш права.'], 403);
        }

        $comments = Comment::with(['author', 'recipe'])
            ->orderByDesc('created_at')
            ->limit(100)
            ->get();

        return response()->json(CommentResource::collection($comments));
    }

    public function destroy(Request $request, int $id): JsonResponse
    {
        $key = 'delete-comment:' . $request->user()->id;

        if (RateLimiter::tooManyAttempts($key, 10)) {
            return response()->json(['message' => 'Твърде много опити.'], 429);
        }

        RateLimiter::hit($key, 60);

        $comment = Comment::findOrFail($id);

        if (! $request->user()->isAdmin() && $comment->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Нямаш права.'], 403);
        }

        $comment->delete();

        return response()->json(['message' => 'Коментарът е изтрит.']);
    }

    public function bulkDestroy(Request $request): JsonResponse
    {
        if (! $request->user()->isAdmin()) {
            return response()->json(['message' => 'Нямаш права.'], 403);
        }

        $validated = $request->validate([
            'ids'   => 'required|array',
            'ids.*' => 'integer|exists:comments,id',
        ]);

        Comment::whereIn('id', $validated['ids'])->delete();

        return response()->json(['message' => 'Коментарите са изтрити.']);
    }
}
