<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>

<template>
  <div class="flex items-center">
    <img :src="props.icon" alt="icon" />
    <input :type="props.type" :placeholder="props.placeholder" />
  </div>
</template>
