<template>
    <input
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      type="text"
      class="text-input"
    />
  </template>
  
  <script>
  export default {
    name: 'TextInput',
    props: {
      value: String,
      placeholder: {
        type: String,
        default: 'Enter text...'
      }
    },
    emits: ['update:value']
  }
  </script>
  
  <style scoped>
  .text-input {
    padding: 8px;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }
  .text-input:focus {
    border-color: #007BFF;
  }
  </style>

