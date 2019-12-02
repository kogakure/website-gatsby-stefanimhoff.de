module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'import', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'res|next|stage|^err|on|config|e',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-unused-expressions': [
      1,
      {
        allowTaggedTemplates: true,
      },
    ],
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    'no-console': 2,
    'import/default': 2,
    'import/export': 2,
    'import/named': 2,
    'import/no-cycle': 2,
    'import/no-duplicates': 2,
    'import/extensions': 2,
    'import/no-internal-modules': 0,
    'import/no-named-as-default-member': 2,
    'import/no-named-as-default': 2,
    'import/no-named-default': 2,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/order': [2, { 'newlines-between': 'always' }],
    'func-names': 2,
    'space-before-function-paren': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-danger': 0,
    'react/display-name': 1,
    'react/react-in-jsx-scope': 1,
    'react/jsx-uses-react': 1,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    indent: [2, 2, { SwitchCase: 1 }],
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/anchor-is-valid': [
      1,
      {
        aspects: ['invalidHref'],
      },
    ],
    'prettier/prettier': 2,
    // These rules are never needed when using Prettier
    'array-bracket-newline': 0,
    'array-bracket-spacing': 0,
    'array-element-newline': 0,
    'arrow-parens': 0,
    'arrow-spacing': 0,
    'block-spacing': 0,
    'brace-style': 0,
    'comma-dangle': 0,
    'comma-spacing': 0,
    'comma-style': 0,
    'computed-property-spacing': 0,
    'dot-location': 0,
    'eol-last': 0,
    'func-call-spacing': 0,
    'function-paren-newline': 0,
    'generator-star': 0,
    'generator-star-spacing': 0,
    'implicit-arrow-linebreak': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
