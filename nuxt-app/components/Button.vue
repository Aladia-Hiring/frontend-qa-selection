<template>
    <button :class="['button', size]" :disabled="disabled" @click="onClick">
      <slot />
    </button>
  </template>
  
  <script>
  export default {
    props: {
      size: { type: String, default: 'medium' },
      disabled: Boolean,
    },
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  }
  </script>
  
  <style scoped>
  .button {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
  }
  .button.medium {
    font-size: 16px;
  }
  </style>
  