export default function config() {
  const configObject = {
    testEnvironment: "node",
    roots: ["<rootDir>"],
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],
    collectCoverageFrom: ["**/*.{js,jsx}", "!**/node_modules/**"],
    coverageReporters: ["text-summary", "lcov"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    verbose: true,
    transform: {
      "^.+\\.js$": "babel-jest",
    },
  };
  return configObject;
}
