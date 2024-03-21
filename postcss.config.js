module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss")({
      content: [
        "./index.html",
        "./assets/maugallery.js",
        "./assets/scripts.js",
        "./assets/bootstrap/bootstrap.bundle.js",
        "./assets/bootstrap/bootstrap.bundle.js.map",
        "./assets/bootstrap/bootstrap.bundle.min.js",
        "./assets/bootstrap/bootstrap.bundle.min.js.map",
        "./assets/bootstrap/bootstrap.css",
        "./assets/bootstrap/bootstrap.css.map",
        "./assets/bootstrap/bootstrap.min.css",
        "./assets/bootstrap/bootstrap.min.css.map",
        "./assets/style.css",
      ], // Chemins vers vos fichiers HTML et JavaScript
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    require("autoprefixer"), // Autoprefixer pour ajouter les préfixes vendeur aux CSS
  ],
};
