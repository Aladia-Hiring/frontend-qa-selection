<template>
    <button
      type="button"
      :class="['w-full py-2 text-white bg-black', buttonClass]"
      @click="$emit('click')"
    >
      <slot></slot>
</button>
  </template>
  
  <script>
  export default {
    name:"Button",
    props: {
      buttonClass: {
        type: String,
        default: 'bg-gradient-to-r from-gray-950 to-black text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300',
      },
    },

    
  };
  </script>
  