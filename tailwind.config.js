/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'title-bg': "url('/src/assets/title-bg.jpg')",
      },
      colors: {
        'custom-btn': '#97643f', //theme color
        'black': '#212529', //black color
      },
    },
  },
  plugins: [
    require('daisyui'),
    require("flowbite/plugin"),
  ],
}