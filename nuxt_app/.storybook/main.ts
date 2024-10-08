import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@chromatic-com/storybook"],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {},
};

export default config;