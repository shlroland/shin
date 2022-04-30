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
    '@typescript-eslint/consistent-type-definitions': [1, 'interface'],
    '@typescript-eslint/no-unnecessary-type-arguments': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
  },
}
