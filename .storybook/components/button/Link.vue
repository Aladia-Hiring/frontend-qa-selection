<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Link",
  },
});
</script>

<template>
  <a href="#" class="text-white/80 hover:text-white">{{ text }}</a>
</template>
