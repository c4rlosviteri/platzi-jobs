module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
  ],
  moduleNameMapper: {
    '\\.(css|styl)$': require.resolve('./src/client/mock/style.js'),
  },
}
