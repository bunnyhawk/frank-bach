const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blu: '#20A6FF',
      ...colors
    },
    fontFamily: {
      title: ['DrukWide-Bold', 'sans-serif'],
      header: ['AllianceNo1-Bold', 'sans-serif'],
      bold: ['AllianceNo1-Bold', 'sans-serif'],
      light: ['AllianceNo1-Light', 'sans-serif'],
      space: ['SpaceMono-Regular', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
