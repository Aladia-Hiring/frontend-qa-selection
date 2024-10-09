// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/storybook"],
  css: [
    "@fortawesome/fontawesome-free/css/all.css", // Include Font Awesome CSS
    "@/assets/css/tailwind.css", // Your Tailwind CSS file
  ],
  storybook: {
    // Options
    host: "localhost",
    port: 6006,
  },
});
