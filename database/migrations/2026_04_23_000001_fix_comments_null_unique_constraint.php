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
 *
 * On older MySQL (< 8.0.13) the functional index is not supported; we restore the
 * plain 3-column constraint and rely on the application layer for top-level
 * uniqueness enforcement.
 */
return new class extends Migration
{
    public function up(): void
    {
        // ── 1. Remove duplicate top-level comments produced by the NULL bug.
        //    Keep the newest comment per (user_id, recipe_id) where parent_id IS NULL.
        DB::statement("
            DELETE c1 FROM comments c1
            INNER JOIN comments c2
                ON  c1.user_id   = c2.user_id
                AND c1.recipe_id = c2.recipe_id
                AND c1.parent_id IS NULL
                AND c2.parent_id IS NULL
                AND c1.id < c2.id
        ");

        // ── 2. Drop the existing plain 3-column constraint if it is still there.
        $existing = collect(Schema::getIndexes('comments'))->pluck('name');

        if ($existing->contains('top_level_comment_unique')) {
            Schema::table('comments', function (Blueprint $table): void {
                $table->dropUnique('top_level_comment_unique');
            });
        }

        // ── 3. Add the functional unique index (MySQL 8.0.13+).
        //    Fall back to the plain constraint on older versions — the application
        //    layer (CommentController::storeOrUpdate) guards against duplicates.
        try {
            DB::statement(
                'ALTER TABLE comments ADD UNIQUE `top_level_comment_unique`'
                . ' (user_id, recipe_id, (COALESCE(parent_id, 0)))'
            );
        } catch (\Illuminate\Database\QueryException) {
            Schema::table('comments', function (Blueprint $table): void {
                $table->unique(['user_id', 'recipe_id', 'parent_id'], 'top_level_comment_unique');
            });
        }
    }

    public function down(): void
    {
        try {
            DB::statement('ALTER TABLE comments DROP INDEX `top_level_comment_unique`');
        } catch (\Illuminate\Database\QueryException) {
            // Index may have been restored as plain constraint — drop via Blueprint.
        }

        Schema::table('comments', function (Blueprint $table): void {
            $table->unique(['user_id', 'recipe_id', 'parent_id'], 'top_level_comment_unique');
        });
    }
};
