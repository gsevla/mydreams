const { name } = require("./package.json");

module.exports = {
  preset: "jest-expo",
  displayName: name,
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  collectCoverage: false,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/types.ts",
    "!**/styles.ts",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
  snapshotResolver: "<rootDir>/test/snapshotResolver.ts",
};
