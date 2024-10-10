<template>
  <button :class="['button', buttonType]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonType: {
      type: String,
      default: 'primary', // Default type
    },
  },
};
</script>

<style scoped src="../../styles/login.css"></style>
