<template>
    <div class="text-input">
      <label v-if="label" :for="id">{{ label }}</label>
      <div class="input-wrapper">
        <span v-if="icon" class="input-icon">
          <img :src="icon" alt="icon"/>
        </span>
        <input 
          :id="id" 
          :type="type" 
          :placeholder="placeholder" 
          :value="value" 
          @input="$emit('input', $event.target.value)"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      id: String,
      placeholder: String,
      type: { type: String, default: 'text' },
      icon: String,
      value: String,
    },
  }
  </script>
  
  <style scoped>
  .input-wrapper {
    display: flex;
    align-items: center;
  }
  .input-icon {
    margin-right: 8px;
  }
  input {
    width: 100%;
    padding: 8px;
  }
  </style>
  