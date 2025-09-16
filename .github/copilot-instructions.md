# Copilot Instructions for BASE-CURSO-CYPRESS

## Project Overview
This is a Cypress-based end-to-end test automation project using Cucumber (Gherkin) syntax for feature files. The main goal is to automate UI flows for web applications, focusing on user registration and product search scenarios.

## Architecture & Key Components
- **Feature Files**: Located in `cypress/journeys/features/e2e/`. Use Gherkin syntax to describe test scenarios (e.g., `Register.feature`, `BusquedaDeProducto.feature`).
- **Step Definitions**: Located in `cypress/journeys/step_definitions/e2e/`. Implement steps using Cypress commands and Cucumber preprocessor hooks (e.g., `Register.js`, `BusquedaDePruducto.js`).
- **Page Objects**: Place reusable selectors and actions in `cypress/pages/` (e.g., `RegisterPage.js`).
- **Custom Commands**: Extend Cypress with custom commands in `cypress/support/commands.js`.
- **Global Support**: `cypress/support/e2e.js` is loaded before tests for global config and command imports.

## Test Execution & Workflows
- **Run Tests**: Use `npx cypress open` or `npx cypress run` from the project root.
- **Cucumber Integration**: Feature files are matched by the `specPattern` in `cypress.config.js`. Step definitions use `@badeball/cypress-cucumber-preprocessor`.
- **Environment Variables**: Set in `cypress.env.json`. Access via `Cypress.env('ENV')` and use for dynamic URLs and test data.
- **Error Handling**: All step definition files disable uncaught exceptions with `Cypress.on('uncaught:exception', ...)` to prevent test failures from app errors.

## Patterns & Conventions
- **Step Definitions**: Always import `{ Given, When, Then }` from the Cucumber preprocessor. Use descriptive step texts matching feature files.
- **Selectors**: Use CSS selectors for element targeting. Prefer explicit selectors over brittle ones when possible.
- **Assertions**: Use `should` and `expect` for validation. Example: `cy.get('#example-modal-sizes-title-lg').should('have.text', ...)`.
- **Data Sharing**: Use variables scoped at the file level for sharing data between steps (e.g., product price comparison).
- **Custom Commands**: Add reusable logic to `cypress/support/commands.js` and import in `e2e.js`.

## External Dependencies
- `@badeball/cypress-cucumber-preprocessor` for Cucumber support
- `@bahmutov/cypress-esbuild-preprocessor` for bundling
- Cypress core and plugins

## Example: Register Scenario
- Feature: `Register.feature`
- Steps: Implemented in `Register.js` using Cypress commands to fill and submit the form, then assert dialog text.

## Example: Product Search Scenario
- Feature: `BusquedaDeProducto.feature`
- Steps: Implemented in `BusquedaDePruducto.js` with price extraction and comparison logic.

## Useful References
- `cypress.config.js`: Main Cypress and plugin configuration
- `cypress.env.json`: Environment variables
- `cypress/support/commands.js`: Custom commands
- [Cypress Docs](https://docs.cypress.io/)
- [Cucumber Preprocessor Docs](https://github.com/badeball/cypress-cucumber-preprocessor)

---
**For AI agents:**
- Always match step texts exactly between feature files and step definitions.
- Use environment variables for URLs and test data.
- Follow file-level variable patterns for sharing state between steps.
- Place reusable logic in custom commands or page objects.
- Keep step definitions concise and focused on a single action/assertion.
