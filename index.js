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
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    indent: 'off',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
  },
  overrides: [
    {
      files: [
        '**/*.js',
        '**/*.jsx',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
