const mix = require('laravel-mix');
const webpack = require('webpack');


mix.babelConfig({
    plugins: ['dynamic-import-webpack'],
});

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .extract([ 'vue' ])
    .autoload({
        jquery: ['$', 'jQuery', 'jquery'],
    })
    .version();



mix.webpackConfig({
    output: {
        publicPath: '/',
        chunkFilename: 'js/[name].js?id=[chunkhash]',
    },
});