module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': 'off',
  },
}
