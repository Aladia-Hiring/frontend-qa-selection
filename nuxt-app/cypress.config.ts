import { defineConfig } from "cypress";
import { installPlugin } from "@chromatic-com/cypress";


export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    async setupNodeEvents(on, config) {
      const getCompareSnapshotsPlugin = (await import('cypress-image-diff-js/plugin')).default;
      getCompareSnapshotsPlugin(on,config);
      installPlugin(on,config)
    },
    experimentalStudio: true,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
  },
});
