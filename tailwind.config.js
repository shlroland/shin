const colors = require('tailwindcss/colors')

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1280px',
    },
    extend: {
      colors: {
        primary: colors.teal,
        sun: colors.amber,
      },
    },
  },
  plugins: [],
}

module.exports = config
