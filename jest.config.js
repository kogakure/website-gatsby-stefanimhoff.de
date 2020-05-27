const path = require('path');

module.exports = {
  rootDir: path.join(__dirname),
  preset: 'jest-preset-gatsby/typescript',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/contexts',
    '<rootDir>/src/html.js',
    '<rootDir>/src/layout/global-styles.ts',
    '<rootDir>/src/layout/theme-toggle/theme-toggle.tsx',
    '<rootDir>/src/layout/up-link/up-link.tsx',
    '<rootDir>/src/pages',
    '<rootDir>/src/services/test-utils.tsx',
    '<rootDir>/src/services/theme.js',
    '<rootDir>/src/templates',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      function: 80,
      lines: 80,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
