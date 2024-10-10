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
  <div class="relative w-full">
    <input
      :type="type"
      :placeholder="placeholder"
      class="pl-10 pr-4 py-3 w-full rounded-md bg-white text-black font-semibold transition duration-200 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-2 border-white/10"
    />
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <Icon name="mdi:email" size="20" class="h-5 w-5 text-gray-500" />
    </div>
  </div>
</template>
