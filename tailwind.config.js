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
        'gradientRed':'#ff0301'
      }
    },
  },
  variants: {},
  plugins: [],
};