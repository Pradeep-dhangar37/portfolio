/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: ['Roboto Slab', 'serif'], // Add Roboto Slab as a custom font
      },
    },
  },
  plugins: [],
}