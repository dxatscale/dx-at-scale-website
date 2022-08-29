/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ],
  content: [
    'content/**/*.{md,yml,json,json5,csv}',
    'components/**/*.{js,ts,vue}',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}'
  ],
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
    },
    extend: {
      fontFamily: {
        sans: ['Biennale', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
