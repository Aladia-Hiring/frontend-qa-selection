import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
      return config;
      // implement node event listeners here
    },
    experimentalStudio: true, // Enable Cypress Studio here
  },
});
