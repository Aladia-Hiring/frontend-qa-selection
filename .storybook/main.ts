// // .storybook/main.mjs
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default {
//   stories: [
//     '../stories/**/*.stories.@(js|jsx|ts|tsx)',
//   ],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//     '@chromatic-com/storybook'
  
//   ],
//   framework: {
//     name: '@storybook/vue3-vite',
//     options: {}
//   },
//   viteFinal: (config) => {
//     return defineConfig({
//       ...config,
//       plugins: [
//         ...config.plugins,
//         vue(),
//       ],
//     });
//   },
// };
import type { StorybookConfig } from '@storybook-vue/nuxt';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  // core: {
  //   disableTelemetry: true,
  // },
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    // '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook'
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  // staticDirs: [{ from: '../public/assets', to: 'assets' }],
   viteFinal:(config)=> {
     return mergeConfig(config, {
      optimizeDeps: {
        include: ['jsdoc-type-pratt-parser'],
      }
    });
  }
};
export default config;
