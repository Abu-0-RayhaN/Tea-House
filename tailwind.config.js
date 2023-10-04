/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-cup': "url('tea-house-resources/images/bg_cup.png')",
      },
      colors:{
        'gradientOrange':'#ff8637',
        'gradientRed':'#ff0301',
        'footerbg':'#fff3eb',
        'footerbg2':'#ffe6e6',
        'tea-bg':'#ffe6e6',
        'tea-bg2':'#fff2eb',
        'tea-bg3':'#eef1eb',
        'tea-bg4':'#dedede',
        'tea-bg0':'#f9f9f9',

      },
      fontFamily:{
        'manrope': ["Manrope", "sans-serif"],
      }
    },
  },
  variants: {},
  plugins: [],
};