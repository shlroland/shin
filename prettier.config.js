module.exports = Object.assign(require('@c4605/toolconfs/prettierrc'), {
  arrowParens: 'avoid',
  plugins: [require('prettier-plugin-tailwindcss')],
})
