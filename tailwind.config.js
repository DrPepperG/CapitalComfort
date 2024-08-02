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
        'cc-blue': '#1d63af',
        'cc-orange': '#f47216',
        'cc-green': '#1ca551'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base'
    }),
    require('@tailwindcss/typography'),
  ],
}
