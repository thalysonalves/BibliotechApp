/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#36383e',
        tgreen: '#05704f',
        darkheader: '#242529',
        cardcolor: '#2B2B2B'
      }
    },
  },
  plugins: [],
}

