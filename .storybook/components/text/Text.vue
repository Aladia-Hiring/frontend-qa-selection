<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "medium",
  },
});
</script>

<template>
  <p :class="`text-${props.size}`">{{ props.text }}</p>
</template>
