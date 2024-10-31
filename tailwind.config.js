/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
      accent: {
        100: '#E6F8FF',
        200: '#B3ECFF',
        300: '#80DFFF',
        400: '#4DD2FF',
        500: '#00A3FF',
        600: '#0082CC',
        700: '#006299',
        800: '#004166',
        900: '#002133',
      },
    },
  },
  plugins: [],
};