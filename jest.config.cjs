module.exports = {
    preset: 'ts-jest',  // If you're using TypeScript
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',  // Use babel-jest for transforming TypeScript/JSX files
      '^.+\\.jsx?$': 'babel-jest',      // Use babel-jest for transforming JavaScript/JSX files
    },
    transformIgnorePatterns: [
      '/node_modules/', // Make sure node_modules are not transformed
    ],
    testEnvironment: 'jsdom', // Use jsdom for testing React components
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Recognize .js, .jsx, .ts, .tsx files
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
  