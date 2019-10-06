module.exports = {
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts", "src/**/*.js"],
  testRegex: "src/.+?\\.test\\.[jt]s$",
  testEnvironment: "node",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$"],
  modulePaths: [],
  moduleFileExtensions: ["js", "ts"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  watchPathIgnorePatterns: [
    "<rootDir>/package.json",
    "<rootDir>/coverage/",
    "<rootDir>/node_modules"
  ]
  //  roots: ["<rootDir>/src"]
};
