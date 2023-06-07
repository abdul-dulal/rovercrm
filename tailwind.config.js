/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "3rem",
        sm: "1rem",
        md: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: "#62747D",
        secondary: "#8B9DD4",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
