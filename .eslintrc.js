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
    '@typescript-eslint/no-explicit-any': 0,
  },
}
