module.exports = {
  // Spécifiez les fichiers CSS que vous souhaitez purger
  content: ["./**/*.html"],

  // Spécifiez les fichiers CSS à inclure dans le processus de purge
  css: [
    "./assets/style.min.css",
    "./assets/bootstrap/bootstrap.bundle.min.css",
  ],

  // Définissez le répertoire de sortie pour les fichiers purgés
  output: "./dist/assets/",

  // Vous pouvez également inclure d'autres options de configuration ici
};
