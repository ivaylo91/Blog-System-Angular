import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
        host: true,
        https: (() => {
            const certDir = path.resolve(__dirname, 'certs');
            try {
                const keyPath = path.join(certDir, 'localhost+2-key.pem');
                const certPath = path.join(certDir, 'localhost+2.pem');
                return {
                    key: fs.readFileSync(keyPath),
                    cert: fs.readFileSync(certPath),
                };
            } catch (err) {
                // If certs are not present, fall back to HTTP
                return false;
            }
        })(),
    },
});
