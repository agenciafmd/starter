import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import purge from '@erbelion/vite-plugin-laravel-purgecss';
import { join } from 'node:path';
import PluginCritical from 'rollup-plugin-critical';

const { APP_URL } = {
  ...loadEnv(
      process.env.NODE_ENV,
      process.cwd(),
      ['VITE', 'APP'],
  ),
};

const purgeCheckPaths = [
  'packages/agenciafmd/frontend/resources/views/**/*.php',
  'node_modules/swiper/**/*.js',
  'node_modules/sweetalert2/dist/*.js',
  'node_modules/wow.js/dist/*.js',
  'node_modules/bootstrap/dist/js/bootstrap.min.js',
]
    .map((path) => join(__dirname, path));

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
    PluginCritical({
      criticalUrl: `${ APP_URL }/html/`,
      criticalBase: 'public/css/critical',
      criticalPages: [
        {
          uri: '', template: 'index',
        },
      ],
      criticalConfig: {
        dimensions: [
          {
            width: 375,
            height: 667,
          },
          {
            width: 1024,
            height: 768,
          },
          {
            width: 1280,
            height: 720,
          },
          {
            width: 1366,
            height: 768,
          },
          {
            width: 1920,
            height: 1080,
          },
        ],
      },
    }),
    purge({
      paths: purgeCheckPaths,
      // Include classes we don't have direct access
      safelist: [
        /hs-*/,
        /glightbox-*/,
        /js-*/,
        /swiper-*/,
        /swal2-*/,
        /file-upload-button*/,
        /fmd-header-*/,
        /was-*/,
      ],
    }),
  ],
  resolve: {
    // to improve JS imports
    alias: {
      '@fonts': '/resources/fonts',
      '@svg': '/resources/svg',
      '@images': '/resources/images',
    },
  },
});

