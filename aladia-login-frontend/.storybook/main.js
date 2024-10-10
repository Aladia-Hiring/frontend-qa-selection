module.exports = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/vue3-webpack5',
    options: {},
  },

  docs: {
    autodocs: true
  }
  , async viteFinal(config) {
    return  mergeConfig(config, {
     optimizeDeps: {
       include: ['jscode-type-pratt-paraser'],
    },
 });
   }

};