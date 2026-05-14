<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * The original UNIQUE(user_id, recipe_id, parent_id) constraint allows
 * duplicate top-level comments because NULL != NULL in SQL — multiple rows
 * with parent_id = NULL are treated as distinct by the index engine.
 *
 * MySQL 8.0.13+ supports functional key parts to work around this, but shared
 * hosting servers often run older MySQL versions that reject that syntax.
 *
 * This migration therefore:
 *   1. Removes any existing duplicates (keeping the newest per user+recipe).
 *   2. Drops the old plain constraint.
 *   3. Does NOT add a new constraint — CommentController::storeOrUpdate
 *      enforces the "one comment per user per recipe" rule at the app layer.
 */
return new class extends Migration
{
    public function up(): void
    {
        // ── 1. Delete duplicate top-level comments; keep the newest row.
        DB::statement("
            DELETE c1 FROM comments c1
            INNER JOIN comments c2
                ON  c1.user_id   = c2.user_id
                AND c1.recipe_id = c2.recipe_id
                AND c1.parent_id IS NULL
                AND c2.parent_id IS NULL
                AND c1.id < c2.id
        ");

        // ── 2. Drop the old 3-column unique constraint if it still exists.
        $indexes = collect(Schema::getIndexes('comments'))->pluck('name');

        if ($indexes->contains('top_level_comment_unique')) {
            Schema::table('comments', function (Blueprint $table): void {
                $table->dropUnique('top_level_comment_unique');
            });
        }

        // ── 3. No replacement DB constraint is added.
        //    CommentController::storeOrUpdate already does updateOrCreate(),
        //    so the uniqueness rule is enforced at the application layer.
    }

    public function down(): void
    {
        // Restore the original plain constraint on rollback.
        $indexes = collect(Schema::getIndexes('comments'))->pluck('name');

        if (! $indexes->contains('top_level_comment_unique')) {
            Schema::table('comments', function (Blueprint $table): void {
                $table->unique(['user_id', 'recipe_id', 'parent_id'], 'top_level_comment_unique');
            });
        }
    }
};
