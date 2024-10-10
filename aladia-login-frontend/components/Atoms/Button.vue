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
        default: 'flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95 mb-4',
      },
    },

    
  };
  </script>
  