<template>
    <div class="mb-4 flex w-full items-end gap-6">
      <div class="relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white">
        <div class="gradient absolute inset-0 opacity-20"></div>
        <img :src="imgSrc" class="h-24 w-24 object-cover rounded border transition-all" :alt="imgAlt" />
        <input type="file" accept="image/*" class="absolute inset-0 opacity-0" />
      </div>
      <div>
        <div class="mb-1 text-sm font-semibold">{{ title }}</div>
        <div class="text-xs text-white/70" v-html="subtitle"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    imgSrc: String,
    imgAlt: String,
    title: String,
    subtitle: String,
  })
  </script>
  