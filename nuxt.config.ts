import { resolve } from "node:path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  modules: ["@nuxtjs/storybook"],
  dir: {
    pages: ".storybook/pages",
  },
  alias: {
    "@": resolve(__dirname, "./"),
    "@components": resolve(__dirname, "./components"),
  },
  devtools: { enabled: true },
});
