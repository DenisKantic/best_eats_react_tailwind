/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
    screens: {
      'xss': '340px',
      'xs' : '430px',
      'medium': '460px',
      'mediumEnd': '639',
      ...defaultTheme.screens,
    },
  },
  plugins: [],  
}