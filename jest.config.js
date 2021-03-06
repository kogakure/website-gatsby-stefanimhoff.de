const path = require('path');

module.exports = {
  rootDir: path.join(__dirname),
  preset: 'jest-preset-gatsby/typescript',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/components/image',
    '<rootDir>/src/contexts',
    '<rootDir>/src/hooks',
    '<rootDir>/src/html.js',
    '<rootDir>/src/layout/global-styles.ts',
    '<rootDir>/src/layout/page-transition',
    '<rootDir>/src/layout/theme-toggle/',
    '<rootDir>/src/layout/up-link/',
    '<rootDir>/src/pages',
    '<rootDir>/src/screens/journal-detail/post',
    '<rootDir>/src/screens/showcase/body',
    '<rootDir>/src/screens/sketchnotes/body',
    '<rootDir>/src/services/',
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
