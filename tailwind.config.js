/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          light: '#FBF8F1',
          DEFAULT: '#F7F1E5',
          dark: '#EBDDC7',
          vintage: '#E3CFB4',
        },
        burgundy: {
          light: '#8B3A4A',
          DEFAULT: '#702F3B',
          dark: '#4C1F28',
          deep: '#35141B',
        },
        antiqueGold: {
          light: '#DEC199',
          DEFAULT: '#C7A77B',
          dark: '#A68452',
          rich: '#8C6C38',
        },
        ink: {
          DEFAULT: '#2C2523',
          faded: '#5A504B',
          light: '#7A6F68',
        },
        parchment: '#F0E6D2',
        stationWood: '#3E2723',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'book': '0 20px 50px -10px rgba(44, 37, 35, 0.4), 0 0 15px rgba(0,0,0,0.1)',
        'page-left': 'inset -15px 0 25px -10px rgba(0, 0, 0, 0.15)',
        'page-right': 'inset 15px 0 25px -10px rgba(0, 0, 0, 0.15)',
        'polaroid': '0 4px 15px -2px rgba(0, 0, 0, 0.12), 0 2px 4px -2px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
