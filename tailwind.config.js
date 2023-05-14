/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C62127',
        yellow: '#DED01F',
      },
      backgroundColor: {
        light: 'rgba(198, 33, 39, .2)',
        overlay: 'rgba(0, 0, 0, .4)',
        grey: '#EDEDED',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        common: '18px',
      },
      lineHeight: {
        1: '1',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

