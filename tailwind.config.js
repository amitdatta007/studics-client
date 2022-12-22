/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#9C4DF4",

          "secondary": "#FF6652",

          "accent": "#00C968",

          "neutral": "#5D5A6F",

          "base-100": "#F7F5FA",

          "base-content": "#0A033C",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FFC107",

          "error": "#F87272",
        },
      },
    ],
  },
}
