import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';

export default defineConfig({
  plugins: [
    VitePluginSvgSpritemap('resources/svg/sprite/*.svg'),
    laravel({
      input: [
        'resources/scss/frontend.scss',
        'resources/js/frontend-imports.js',
      ],
      refresh: true, // TODO add all paths to watch and refresh on change
    }),
  ],
  resolve: {
    // to improve JS imports
    alias: {
      '@fonts': '/resources/fonts',
    },
  },
});
