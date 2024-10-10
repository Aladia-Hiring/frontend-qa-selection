import { resolve } from "node:path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxtjs/storybook", "@nuxt/icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  dir: {
    pages: ".storybook/pages",
    components: ".storybook/components",
  },
  alias: {
    "@": resolve(__dirname, "./"),
    "@components": resolve(__dirname, "./.storybook/components"),
  },
  devtools: { enabled: true },
  css: ["~/public/assets/css/main.css"],
});