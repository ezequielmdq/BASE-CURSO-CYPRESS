const { defineConfig } = require("cypress");
const crateEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [crateEsbuildPlugin(config)],
      }));
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
