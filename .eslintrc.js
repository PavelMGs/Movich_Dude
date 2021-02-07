module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'react-app', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'warn',
    'arrow-body-style': 'off',
    'no-unused-vars': 'warn',
    camelcase: 'off',
    'no-else-return': 'off',
    'no-case-declarations': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx', '.ts', '.js'] }],
    'spaced-comment': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
