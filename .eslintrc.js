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
    'max-len': ['error', 120],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: true,
      },
    }],
  },
}
