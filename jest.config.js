const path = require('path');

module.exports = {
  rootDir: path.join(__dirname),
  preset: 'jest-preset-gatsby/typescript',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['**/src/**/*.{js,ts,tsx}'],
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 30,
      function: 30,
      lines: 30,
    },
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
