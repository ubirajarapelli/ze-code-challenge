module.exports = {
  rootDir: "src",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(svg|png)$": "jest-svg-transformer"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
