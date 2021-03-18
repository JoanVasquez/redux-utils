module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  coveragePathIgnorePatterns: ["/node_modules/", "/coverage/"],
  transformIgnorePatterns: [
    "node_modules/(?!(mapboxgl|@mapbox/mapbox-gl-draw)/)",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
