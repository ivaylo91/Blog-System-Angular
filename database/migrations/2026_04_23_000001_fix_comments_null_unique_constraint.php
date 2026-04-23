<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * The original UNIQUE(user_id, recipe_id, parent_id) constraint does not prevent
 * duplicate top-level comments because NULL != NULL in SQL — two rows with
 * parent_id = NULL are treated as distinct by the index engine.
 *
 * MySQL 8.0.13+ supports functional key parts, so we replace the constraint with
 * UNIQUE(user_id, recipe_id, COALESCE(parent_id, 0)), which maps NULL → 0 and
 * correctly blocks duplicate top-level entries while still allowing multiple
 * replies to different parents.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('comments', function (Blueprint $table): void {
            $table->dropUnique('top_level_comment_unique');
        });

        DB::statement(
            'ALTER TABLE comments ADD UNIQUE `top_level_comment_unique`'
            . ' (user_id, recipe_id, (COALESCE(parent_id, 0)))'
        );
    }

    public function down(): void
    {
        DB::statement('ALTER TABLE comments DROP INDEX `top_level_comment_unique`');

        Schema::table('comments', function (Blueprint $table): void {
            $table->unique(['user_id', 'recipe_id', 'parent_id'], 'top_level_comment_unique');
        });
    }
};
