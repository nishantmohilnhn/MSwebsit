/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'my-nvy1':'#3F3B6C',
        'my-nvy2':'#624F82',
        'my-purp1':'#9F73AB',
        'my-blue':'#A3C7D6'
          },
          fontFamily:{'Roboto':'sans-serif'}
    },
  },
  plugins: []
};