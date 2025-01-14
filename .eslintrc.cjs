module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['@deriv/eslint-config-deriv', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
