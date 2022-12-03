/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

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
    extend: {
      fontFamily: {
        sans: ['Mona Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
