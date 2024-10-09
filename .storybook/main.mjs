// .storybook/main.mjs
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  viteFinal: (config) => {
    return defineConfig({
      ...config,
      plugins: [...config.plugins, vue()],
    });
  },
};
