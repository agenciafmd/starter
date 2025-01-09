import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/scss/frontend.scss',
        'resources/js/frontend-imports.js',
      ],
      refresh: true,
    }),
  ],
  resolve: {
    // to improve JS imports
    alias: {
      '@fonts': '/resources/fonts',
    },
  },
});
