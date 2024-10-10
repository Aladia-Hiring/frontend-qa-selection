<template>
  <div class="mb-6 flex items-center justify-between gap-4">
    <div class="h-px w-40 bg-gradient-to-r from-transparent to-white"></div>
    <div>{{ text }}</div>
    <div class="h-px w-40 bg-gradient-to-r from-white to-transparent"></div>
  </div>
</template>

<script setup>
defineProps({
  text: String,
})
</script>