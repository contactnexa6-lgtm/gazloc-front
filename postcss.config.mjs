const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // C'est cette ligne exacte qui corrige l'erreur !
    autoprefixer: {},
  },
};

export default config;