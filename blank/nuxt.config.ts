// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  css: [
    
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  compatibilityDate: '2024-10-09',
  devtools: false,
  modules: ['@nuxtjs/storybook'],
};