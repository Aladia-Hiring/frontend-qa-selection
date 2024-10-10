<template>
  <input type="email" :placeholder="placeholder" class="email-input" />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Email Address',
    },
  },
};
</script>

<style scoped src="../../styles/login.css"></style>
