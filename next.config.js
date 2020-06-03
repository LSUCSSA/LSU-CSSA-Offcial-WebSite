const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
        /* config for next-optimized-images */
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        webp: {
            preset: 'default',
            quality: 90,
        },
        optimizeImages: true,
        responsive: {adapter: require('responsive-loader/sharp')},
        optimizeImagesInDev: true
    }],

    // your other plugins here

]);
module.exports = {
    distDir: 'build',

};
