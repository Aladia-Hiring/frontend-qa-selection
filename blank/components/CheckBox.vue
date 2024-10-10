<template>
    <div class="checkbox-container">
      <input type="checkbox" v-model="checked" @change="$emit('change', checked)" />
      <label>
        <slot></slot>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        checked: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .checkbox-container {
    display: flex;
    align-items: center;
  }
  input[type="checkbox"] {
    margin-right: 10px;
  }
  </style>
  