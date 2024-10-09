import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: 'http://localhost:3000', // Adjust this based on your Nuxt.js setup
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
