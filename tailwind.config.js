/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors: {
        'cc-black': {
          lighter: '#1a1a1a',
          DEFAULT: '#101010',
        },
        'cc-white': {
          DEFAULT: '#cecece',
        },
        'cc-blue': '#4172ff',
        'cc-yellow': '#ffc600',
      }
    },
  },
  plugins: [],
}
