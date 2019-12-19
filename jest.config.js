const path = require('path');

module.exports = {
  rootDir: path.join(__dirname),
  preset: 'jest-preset-gatsby/typescript',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['**/src/**/*.{js,ts,tsx}'],
  coverageThreshold: {
    global: {
      statements: 25,
      branches: 25,
      function: 25,
      lines: 25,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
