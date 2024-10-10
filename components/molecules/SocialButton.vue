<template>
  <button :class="['social-button', platform]" @click="$emit('click')">
    <img :src="iconSrc" class="h-6 mr-2" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    platform: String,
    iconSrc: String,
  },
};
</script>

<style scoped src="../../styles/login.css"></style>
