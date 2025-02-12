// the jest.config file exports our jest configuration for our tests using Jest
module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jest-environment-jsdom',
  // testEnvironmentOptions: { frontend: 'jsdom', backend: 'node' },
};
