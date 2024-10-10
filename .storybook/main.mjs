// .storybook/main.mjs
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default {
  stories: ["./**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        cssLoaderOption: {
          importLoaders: 1,
        },
        postcssLoaderOption: {
          implementation: require("postcss"),
        },
      },
    },
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
