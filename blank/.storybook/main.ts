import { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: '@storybook/vue3-vite',
  
  core: {
    builder: '@storybook/builder-vite', 
  },
  docs: {
    autodocs: 'tag'
  },
};
export default config;
