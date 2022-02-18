module.exports = {
  extends: 'galex',
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/function-component-definition': [
      1,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
      },
    ],
  },
}
