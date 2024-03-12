/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ 'Fredoka One', 'system-ui']
      },
      colors: {
        'white': '#FFFFFF',
        'off-white': '#FFF9F1',
        'teal': '#3AB4AC',
        'gray': '#7A7A7A',
        'dark-gray': '#4D4D4D',
        'gold': '#F7BA57',
        'orange': '#FF9315',
        'light-red': '#F27C86',
      },
    },
  },
  plugins: [],
}