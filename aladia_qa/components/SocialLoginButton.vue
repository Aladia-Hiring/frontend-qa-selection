<template>
    <button
      class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 transition-all hover:bg-white/20 active:scale-95"
      @click="$emit('click')"
    >
      <img :src="iconSrc" class="h-6" :alt="altText" />
      <span class="w-40">{{ buttonText }}</span>
    </button>
  </template>
  
  <script setup>
  defineProps({
    iconSrc: String,
    altText: String,
    buttonText: String,
  })
  defineEmits(['click'])
  </script>
  