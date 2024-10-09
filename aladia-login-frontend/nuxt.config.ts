// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // Add your global CSS
  css: ['~/assets/css/main.css'],

  // Configure PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Add Storybook module for Nuxt
  modules: [
    '@nuxtjs/storybook',
  ],
  


})
