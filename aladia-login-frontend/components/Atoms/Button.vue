<template>
    <button
      type="button"
      :class="['w-full py-2', buttonClass]"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      buttonClass: {
        type: String,
        default: 'bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300',
      },
    },
  };
  </script>
  