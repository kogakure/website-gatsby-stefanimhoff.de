module.exports = {
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
};
