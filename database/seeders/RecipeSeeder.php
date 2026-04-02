<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Ingredient;
use App\Models\Recipe;
use App\Models\RecipeStep;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class RecipeSeeder extends Seeder
{
    public function run(): void
    {
        $json = file_get_contents(base_path('recipes-export.json'));
        $recipes = json_decode($json, true);

        foreach ($recipes as $data) {
            // Ensure category exists
            $category = Category::firstOrCreate(
                ['slug' => $data['categorySlug']],
                ['name' => $data['category']]
            );

            // Create recipe
            $recipe = Recipe::create([
                'slug' => $data['slug'],
                'title' => $data['title'],
                'excerpt' => $data['excerpt'],
                'description' => $data['description'],
                'hero_image' => $data['imagePath'],
                'prep_minutes' => $data['prepMinutes'],
                'cook_minutes' => $data['cookMinutes'],
                'servings' => $data['servings'],
                'difficulty' => $data['difficulty'],
                'published' => true,
                'published_at' => $data['publishedAt'],
                'author' => $data['author'],
                'hero_palette_from' => $data['heroPalette']['from'],
                'hero_palette_via' => $data['heroPalette']['via'],
                'hero_palette_to' => $data['heroPalette']['to'],
                'category_id' => $category->id,
            ]);

            // Create ingredients
            foreach ($data['ingredients'] as $i => $ing) {
                Ingredient::create([
                    'recipe_id' => $recipe->id,
                    'amount' => $ing['amount'],
                    'name' => $ing['name'],
                    'position' => $i,
                ]);
            }

            // Create steps
            foreach ($data['steps'] as $i => $step) {
                RecipeStep::create([
                    'recipe_id' => $recipe->id,
                    'title' => $step['title'],
                    'description' => $step['description'],
                    'position' => $i,
                ]);
            }

            // Create tags
            $tagIds = [];
            foreach ($data['tags'] as $tagName) {
                $tag = Tag::firstOrCreate(
                    ['slug' => Str::slug($tagName)],
                    ['name' => $tagName]
                );
                $tagIds[] = $tag->id;
            }
            $recipe->tags()->sync($tagIds);
        }
    }
}
