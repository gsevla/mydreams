module.exports = {
  preset: "ts-jest",
  projects: ["<rootDir>/mobile/jest.config.js"],
  testEnvironment: "node",
  testMatch: ["*.spec.ts", "*.spec.tsx"],
};
