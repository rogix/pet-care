/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ 'Fredoka One', 'system-ui'],
        'readex': ['Readex Pro', 'sans-serif'],
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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '128px',
        xl: '5rem',
        '2xl': '8rem',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [false],
  },
}