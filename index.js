module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'brace-style': 'off',
    'func-call-spacing': 'off',
    indent: 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-empty-function': 'off',
  },
  overrides: [
    {
      files: [
        '**/*.js',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
