const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./src/**/*.{html,njk}"],
    theme: {
        fontFamily: {
          display: ['Noto Serif', 'Georgia', 'serif'],
          title: ['Noto Sans', 'sans']
        },
    },
    plugins: [],
  };