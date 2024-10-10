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
  <div class="flex flex-1 items-center min-w-full">
    <img v-if="props.icon" :src="props.icon" alt="icon" />
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      class="px-6 py-3 w-full rounded-md bg-white text-black font-semibold transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-white/10"
    />
  </div>
</template>
