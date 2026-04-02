<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Recipe extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'excerpt',
        'description',
        'hero_image',
        'prep_minutes',
        'cook_minutes',
        'servings',
        'difficulty',
        'published',
        'published_at',
        'author',
        'hero_palette_from',
        'hero_palette_via',
        'hero_palette_to',
        'category_id',
        'user_id',
    ];

    protected function casts(): array
    {
        return [
            'published' => 'boolean',
            'published_at' => 'date',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function ingredients(): HasMany
    {
        return $this->hasMany(Ingredient::class)->orderBy('position');
    }

    public function steps(): HasMany
    {
        return $this->hasMany(RecipeStep::class)->orderBy('position');
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'recipe_tag');
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function topLevelComments(): HasMany
    {
        return $this->hasMany(Comment::class)->whereNull('parent_id')->orderByDesc('created_at');
    }

    public function favoritedBy(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'favorites')->withTimestamps();
    }

    public function getAverageRatingAttribute(): ?float
    {
        $avg = $this->comments()->whereNotNull('rating')->avg('rating');
        return $avg ? round($avg, 1) : null;
    }

    public function getRatingsCountAttribute(): int
    {
        return $this->comments()->whereNotNull('rating')->count();
    }

    public function getFavoriteCountAttribute(): int
    {
        return $this->favoritedBy()->count();
    }
}
