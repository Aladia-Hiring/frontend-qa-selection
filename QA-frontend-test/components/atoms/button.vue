<template>
    <button :class="btnClass" @click="click">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      btnClass: {
        type: String,
        default: 'w-full p-2 rounded-md bg-blue-600 text-white',
      },
      click: {
        type: Function,
        default: () => {},
      },
    },
  };
  </script>
  