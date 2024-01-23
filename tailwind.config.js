/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors:{
        x:"#b91c1c"
      },
      cursor: {
        'fancy': 'url(hand.cur), pointer'
      },
    },
  },
  plugins: [],
}

