/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
    screens: {
      sm: "720px",
      md: "1024px",
      lg: "1280px",
    },
  },
  plugins: [],
};
