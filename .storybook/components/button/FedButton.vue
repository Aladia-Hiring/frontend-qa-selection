<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "Google",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
});

// Construct the image path based on the name prop
const imagePath = `/assets/icons/${props.name}.png`;
</script>

<template>
  <button
    @click="onClick"
    class="flex items-center justify-center px-6 py-3 w-full mx-2 rounded-md bg-black text-white font-semibold hover:bg-white/10 active:bg-white/20 transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-white/10"
  >
    <img :src="imagePath" alt="" class="w-10 h-10 mr-2 rounded-full" />
    Continue with {{ name }}
  </button>
</template>
