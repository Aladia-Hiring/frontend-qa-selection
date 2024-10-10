/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./.storybook/components/**/*.{js,vue,ts}",
    "./.storybook/layouts/**/*.vue",
    "./.storybook/pages/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
