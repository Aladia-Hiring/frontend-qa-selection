<template>
  <button @click="onClick" class="button">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "Button",
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.button {
  padding: 10px 20px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
</style>
