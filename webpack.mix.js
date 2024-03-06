const mix = require('laravel-mix');
require('laravel-mix-purgecss');
require('laravel-mix-criticalcss');
require('laravel-mix-webp');
const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
let frontendImports = require('./resources/js/frontend-imports');

const httpRegex = 'http:\\/\\/|https:\\/\\/';
const projectProxy = process.env.APP_URL.replace(new RegExp(httpRegex), '');

/*
 * USAGE
 * <svg role="img">
 *   <use xlink:href="/svg/sprite.svg#050-santa-claus"></use>
 * </svg>
 * <svg role="img">
 *   <use xlink:href="/svg/sprite.svg#049-deer"></use>
 * </svg>
 * */
const wpConfig = {
  plugins: [
    new SVGSpritemapPlugin('resources/svg/sprite/*.svg', {
      output: {
        filename: 'svg/sprite.svg',
        svgo: {
          plugins: [
            { name: 'removeTitle', active: true },
            { name: 'convertColors', params: { currentColor: 'black' }},
          ],
        },
        chunk: {
          name: '../resources/js/spritemap',
        },
      },
      sprite: {
        prefix: false,
      },
    }),
  ],
};

mix
    .sass('resources/sass/frontend.scss', 'public/css')
    .purgeCss({
        extend: {
            content: [
                path.join(__dirname, 'packages/agenciafmd/frontend/src/**/*.php'),
                path.join(__dirname, 'node_modules/@fancyapps/fancybox/dist/*.js'),
                path.join(__dirname, 'node_modules/swiper/**/*.js'),
                path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
                path.join(__dirname, 'node_modules/select2/dist/**/*.js'),
                path.join(__dirname, 'node_modules/sweetalert2/dist/*.js'),
                path.join(__dirname, 'node_modules/wow.js/dist/*.js'),
                path.join(
                    __dirname,
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                ),
            ],
            // Include classes we don't have direct access
            safelist: [/hs-*/, /fancybox-*/, /js-*/, /swiper-*/, /swal2-*/, /file-upload-button*/],
        },
    })
    .criticalCss({
        enabled: mix.inProduction(),
        paths: {
            base: process.env.APP_URL + '/html/',
            templates: 'public/css/critical/',
            suffix: '',
        },
        urls: [
						{"url":"index","template":"index"}
				],
				// fmd:criticalPath  !! This comment should not be removed !!
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
        ignore: ['@font-face'],
    })
    .options({
        imgLoaderOptions: {
            enabled: true,
            gifsicle: {},
            mozjpeg: {
                quality: 85,
                progressive: true,
            },
            optipng: {
                enabled: false,
            },
            pngquant: {
                quality: '85-90',
                speed: 4,
            },
            svgo: {},
        },
        processCssUrls: false,
    })
    .copy('resources/fonts', 'public/fonts')
    .ImageWebp({
        from: 'resources/images',
        to: 'resources/images',
        imageminWebpOptions: {
            quality: 95
        }
    })
    .copy('resources/images/**', 'public/images')
    .copy('resources/svg/*.svg', 'public/svg')
    .copy('resources/images/icons/favicon.ico', 'public')
    .copy('resources/js/pwa/manifest.json', 'public')
    .copy('resources/js/pwa/pwa-manager.js', 'public')
    .babel(frontendImports, 'public/js/frontend.js')
    .sourceMaps(false, 'source-map')
    .browserSync({
        host: '192.168.10.10',
        proxy: projectProxy,
        open: false,
        watch: true,
        files: [
            'app/**/*.php',
            'resources/views/**/*.php',
            'packages/agenciafmd/frontend/src/**/*.php',
            'public/css/**/*.css',
            'public/fonts/*',
            'public/images/*',
            'public/js/**/*.js',
            'public/json/*',
            'public/svg/*',
        ],
        watchOptions: {
            usePolling: true,
            interval: 500,
        },
    })
    .webpackConfig(wpConfig);

if (mix.inProduction()) {

    mix.version();
}
