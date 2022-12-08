/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ["**/__tests__/**/?(*.)test.[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/src/test-utils/setupTests.ts"],
};