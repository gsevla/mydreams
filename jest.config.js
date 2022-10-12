module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  projects: [
    "<rootDir>/mobile/jest.config.js",
    "<rootDir>/core/jest.config.js",
  ],
  testMatch: ["*.spec.ts", "*.spec.tsx"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/test/**",
    "!**/node_modules/**",
    "!**/types.ts",
    "!**/jest.setup.js",
    // core related
    "!**/domain/**",
    "!**/protocols/**",
    "!**/application/**/index.ts",
  ],
};
