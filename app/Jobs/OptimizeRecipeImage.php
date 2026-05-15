<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Recipe;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

final class OptimizeRecipeImage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $tries = 3;
    public int $backoff = 30;

    /**
     * @param string $rawPath  Storage-relative path, e.g. "recipes/tmp/xyz.jpg"
     */
    public function __construct(
        private readonly Recipe $recipe,
        private readonly string $rawPath,
    ) {}

    public function handle(): void
    {
        $fullPath = Storage::disk('public')->path($this->rawPath);

        if (! file_exists($fullPath)) {
            return;
        }

        $lg = $this->convertToWebp($fullPath, 1200, 900);
        $sm = $this->convertToWebp($fullPath, 600, 450);

        $updates = [];
        if ($lg !== null) $updates['hero_image']    = '/storage/' . $lg;
        if ($sm !== null) $updates['hero_image_sm'] = '/storage/' . $sm;

        if (! empty($updates)) {
            $this->recipe->update($updates);
            Storage::disk('public')->delete($this->rawPath);
        }
    }

    public function failed(\Throwable $e): void
    {
        logger()->error('OptimizeRecipeImage failed', [
            'recipe_id' => $this->recipe->id,
            'raw_path'  => $this->rawPath,
            'error'     => $e->getMessage(),
        ]);
    }

    private function convertToWebp(string $fullPath, int $maxW, int $maxH): ?string
    {
        if (! function_exists('imagewebp') || ! function_exists('imagecreatefromjpeg')) {
            return null;
        }

        $mime = mime_content_type($fullPath) ?: '';

        $source = match ($mime) {
            'image/jpeg' => @imagecreatefromjpeg($fullPath),
            'image/png'  => @imagecreatefrompng($fullPath),
            'image/webp' => @imagecreatefromwebp($fullPath),
            default      => false,
        };

        if (! $source) {
            return null;
        }

        $origW = imagesx($source);
        $origH = imagesy($source);
        $ratio = min($maxW / $origW, $maxH / $origH, 1.0);
        $newW  = (int) round($origW * $ratio);
        $newH  = (int) round($origH * $ratio);

        $canvas = imagecreatetruecolor($newW, $newH);
        imagealphablending($canvas, false);
        imagesavealpha($canvas, true);
        imagecopyresampled($canvas, $source, 0, 0, 0, 0, $newW, $newH, $origW, $origH);
        imagedestroy($source);

        $filename = 'recipes/' . Str::random(20) . '.webp';
        Storage::disk('public')->makeDirectory('recipes');
        $dest = Storage::disk('public')->path($filename);

        $ok = imagewebp($canvas, $dest, 82);
        imagedestroy($canvas);

        return $ok ? $filename : null;
    }
}
