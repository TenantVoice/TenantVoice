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
        'eggBlue': "#457B9D"
      }
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
};

