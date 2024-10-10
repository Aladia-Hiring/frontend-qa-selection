<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Submit",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <button
    @click="onClick"
    class="px-6 py-3 w-full rounded-md bg-black text-white font-semibold hover:bg-white/10 active:bg-white/20 transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-white/10"
  >
    {{ label }}
  </button>
</template>
