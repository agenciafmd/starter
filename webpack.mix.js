let mix = require('laravel-mix');
let SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
let frontendImports = require('./resources/js/frontend-imports');

const httpRegex = 'http:\\/\\/|https:\\/\\/';
const projectProxy = process.env.APP_URL.replace(new RegExp(httpRegex), '');

require('laravel-mix-purgecss');
require('laravel-mix-criticalcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
 * USAGE
 * <svg role="img">
 *   <use xlink:href="/svg/sprite.svg#050-santa-claus"></use>
 * </svg>
 * <svg role="img">
 *   <use xlink:href="/svg/sprite.svg#049-deer"></use>
 * </svg>
 * */
let wpConfig = {
    plugins: [
        new SVGSpritemapPlugin('resources/svg/*.svg', {
            output: {
                filename: 'svg/sprite.svg',
                svgo: {
                    removeTitle: true,
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

mix.options({
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
});

mix
    .sass('resources/sass/frontend.scss', 'public/css')
    .options({
        processCssUrls: false,
        //     postCss: [
        //         require('postcss-sprites')({
        //             spritePath: 'images'
        //         }),
        //     ]
    })
    .copyDirectory('resources/fonts', 'public/fonts')
    //.copyDirectory('resources/images', 'public/images')
    //.copy('resources/images/*', 'public/images')
    .babel(frontendImports, 'public/js/frontend.js');

if (!mix.inProduction()) {
    wpConfig.devtool = 'source-map';
    mix.sourceMaps()
        // .copyDirectory('resources/images', 'public/images')
        .copy('resources/images/icons/favicon.ico', 'public')
        .copy('resources/images/**/*', 'public/images');
}

mix.webpackConfig(wpConfig);

if (mix.inProduction()) {
    mix.version();
}

// purge css
mix
    .purgeCss({
        enabled: mix.inProduction(),
        globs: [
            path.join(__dirname, 'packages/agenciafmd/frontend/src/**/*.php'),
            path.join(__dirname, 'node_modules/@fancyapps/fancybox/dist/*.js'),
            path.join(__dirname, 'node_modules/tiny-slider/**/*.js'),
            path.join(
                __dirname,
                'node_modules/sweetalert2/dist/sweetalert2.min.js',
            ),
            path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
            path.join(__dirname, 'node_modules/select2/dist/**/*.js'),
            path.join(__dirname, 'node_modules/sweetalert2/dist/*.js'),
            path.join(
                __dirname,
                'node_modules/bootstrap/dist/js/bootstrap.min.js',
            ),
        ],
        // Include classes we don't have direct access
        whitelistPatterns: [/hs-*/, /tns-*/],
    });

// critical path
mix
    .criticalCss({
        enabled: mix.inProduction(),
        paths: {
            base: process.env.APP_URL + '/html/',
            templates: 'public/css/critical/',
            suffix: ''
        },
        urls: [
            // urls que temos no /html
            {url: 'index', template: 'index'},
            // {url: 'contato', template: 'contato'},
            // {url: 'quem-somos', template: 'quem-somos'},
        ],
        dimensions: [
            {width: 375, height: 667},
            {width: 1024, height: 768},
            {width: 1280, height: 720},
            {width: 1366, height: 768},
        ],
        ignore: ['@font-face'],
    });

/*
 |--------------------------------------------------------------------------
 | BrowserSync
 |--------------------------------------------------------------------------
 */
mix.browserSync({
    host: '192.168.10.10',
    proxy: projectProxy,
    open: false,
    watch: true,
    files: [
        'app/**/*.php',
        'resources/views/**/*.php',
        'packages/agenciafmd/frontend/src/**/*.php',
        'resources/js/**/*.js',
        '!resources/js/**/*-imports.js',
        'resources/sass/**/*.scss',
        'public/js/**/*.js',
        'public/css/**/*.css',
    ],
    watchOptions: {
        usePolling: true,
        interval: 500,
    },
});
