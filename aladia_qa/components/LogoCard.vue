<template>
    <div
      class="relative mb-6 mt-0 flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300"
    >
      <div
        class="absolute inset-0 opacity-15"
        style="background-image: linear-gradient(15deg, #fff0 8.33%, #fff0 27.43%, #fff6, #fff0 37.85%, #fff0 53.91%, #fff 62.15%, #fff0 68.23%, #fff 91.67%);"
      ></div>
      <div class="relative flex w-full justify-between transition-all duration-300 opacity-100">
        <img :src="logoSrc" class="h-20 w-20 object-cover" :alt="logoAlt" />
        <div>
          <div class="mb-2 text-base font-semibold" v-html="title"></div>
          <div class="text-white/70" v-html="subtitle"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    logoSrc: String,
    logoAlt: String,
    title: String,
    subtitle: String,
  })
  </script>
  