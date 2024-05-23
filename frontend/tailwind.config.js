/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'radish': '#E63946',
        'lightBlue': "#A8DADC",
        'eggBlue': "#457B9D",
        'poppy': "#DF2935",
        'electric': "#374AF2",
        'oxford': "#001D4A",
        'bluePurp': "#6775F5",
        'shade': "#34496E",
        'orangy': "#E0AF67",
        'redish': "#f05454"
      }
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
};

