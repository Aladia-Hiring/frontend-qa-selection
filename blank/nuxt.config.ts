// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  css: [
    '@/assets/css/tailwind.css', // Path to your Tailwind CSS file
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
};