const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

// const withFonts = require('next-fonts');
// const isProd = process.env.NODE_ENV === 'production'
// const assetPrefix = isProd ? 'https://cdn.statically.io/gh/LSUCSSA/LSU-CSSA-Offcial-WebSite/tree/gh-pages' : ''

// module.exports = withFonts();
module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      webp: {
        preset: "default",
        quality: 90,
      },
      optimizeImages: true,
      responsive: { adapter: require("responsive-loader/sharp") },
      optimizeImagesInDev: true,
    },
  ],

  // your other plugins here
]);
module.exports = {
  distDir: "build",
  exportPathMap: async () => {
    let paths = {
      "/": { page: "/" },
      // '/newcomer': {page: '/newcomer'},
      // '/info': {page: '/info'},
      "/about": { page: "/about" },
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/articles`);
    const news = await res.json();
    news.map(
      (item) =>
        (paths[`info/${item._id}`] = {
          page: "/info/[eventID]",
          query: {
            eventID: item._id,
            ...item,
          },
        })
    );
  },
};
// module.exports = {
//   assetPrefix: assetPrefix   // customize this value
// };
