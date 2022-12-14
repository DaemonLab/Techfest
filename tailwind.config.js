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
        jetbrains: ["JetBrains Mono", "monospace"],
      },
    },
    screens: {
      xsm:"340px",
      sm: "1024px",
      md: "1224px",
      lg: "1280px",
    },
  },
  plugins: [],
};
