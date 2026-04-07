<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('recipes', function (Blueprint $table) {
            $table->index('published');
            $table->index('user_id');
            $table->index('category_id');
            $table->index('published_at');
            $table->index(['published', 'published_at']);
            $table->index(['user_id', 'published']);
        });

        Schema::table('comments', function (Blueprint $table) {
            $table->index('recipe_id');
            $table->index('user_id');
            $table->index('parent_id');
            $table->index(['recipe_id', 'rating']);
        });

        Schema::table('favorites', function (Blueprint $table) {
            $table->index('recipe_id');
        });
    }

    public function down(): void
    {
        Schema::table('recipes', function (Blueprint $table) {
            $table->dropIndex(['published']);
            $table->dropIndex(['user_id']);
            $table->dropIndex(['category_id']);
            $table->dropIndex(['published_at']);
            $table->dropIndex(['published', 'published_at']);
            $table->dropIndex(['user_id', 'published']);
        });

        Schema::table('comments', function (Blueprint $table) {
            $table->dropIndex(['recipe_id']);
            $table->dropIndex(['user_id']);
            $table->dropIndex(['parent_id']);
            $table->dropIndex(['recipe_id', 'rating']);
        });

        Schema::table('favorites', function (Blueprint $table) {
            $table->dropIndex(['recipe_id']);
        });
    }
};
