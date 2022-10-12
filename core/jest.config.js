const { name } = require("./package.json");

module.exports = {
  preset: "ts-jest",
  setupFiles: ["<rootDir>/../test/setup/dotenv.ts"],
  setupFilesAfterEnv: ["<rootDir>/../test/setup/msw.ts"],
  collectCoverage: true,
  testEnvironment: "node",
  displayName: name,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/test/**",
    "!**/node_modules/**",
    "!**/types.ts",
    "!**/jest.setup.js",
  ],
};
