import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import purge from '@erbelion/vite-plugin-laravel-purgecss';
import { join } from 'node:path';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/scss/frontend.scss',
        'resources/js/frontend-imports.js',
      ],
      refresh: true, // TODO add all paths to watch and refresh on change
    }),
    VitePluginSvgSpritemap('resources/svg/sprite/*.svg'),
    purge({
      paths: [
        join(__dirname, 'packages/agenciafmd/frontend/resources/views/**/*.php'),
        join(__dirname, 'node_modules/swiper/**/*.js'),
        join(__dirname, 'node_modules/sweetalert2/dist/*.js'),
        join(__dirname, 'node_modules/wow.js/dist/*.js'),
        join(
            __dirname,
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
        )
      ],
      // Include classes we don't have direct access
      safelist: [/hs-*/, /glightbox-*/, /js-*/, /swiper-*/, /swal2-*/, /file-upload-button*/],
    }),
  ],
  resolve: {
    // to improve JS imports
    alias: {
      '@fonts': '/resources/fonts',
    },
  },
});
