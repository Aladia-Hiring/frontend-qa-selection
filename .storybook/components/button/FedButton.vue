<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
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
    class="flex flex-1 items-center justify-center px-6 py-2 w-full mx-2 rounded-md bg-black text-white font-semibold hover:bg-white/10 active:bg-white/20 transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-white/10"
  >
    <img
      :src="`/assets/icons/${name}.svg`"
      alt=""
      class="w-8 h-8 mr-2 rounded-full"
    />
    Continue with {{ name }}
  </button>
</template>
