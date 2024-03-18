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
        'rose': '#F27C86',
      },
    },  
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '0',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [false],
    base: false
  },
}