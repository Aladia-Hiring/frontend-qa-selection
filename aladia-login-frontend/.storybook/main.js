module.exports = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/vue3-webpack5',
    options: {},
  },

  docs: {
    autodocs: true
  }
};