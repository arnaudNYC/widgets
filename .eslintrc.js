module.exports = {
  env: { jest: true, browser: true },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    curly: ['error', 'all'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'prettier/prettier': 'error',
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: false }],
    'no-console': 'error',

    // React
    'react/forbid-prop-types': 'error',
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],
    'react/no-string-refs': 2,
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.jsx'] }],
    // JSX
    'react/jsx-boolean-value': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
};
