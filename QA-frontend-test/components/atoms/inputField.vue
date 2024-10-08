<template>
    <div>
      <input
        :type="type"
        :placeholder="placeholder"
        v-model="modelValue"
        class="w-full p-2 border rounded-md"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: '',
      },
      modelValue: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  