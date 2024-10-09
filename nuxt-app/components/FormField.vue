<template>
    <div class="form-field">
      <TextInput 
        :label="label" 
        :placeholder="placeholder" 
        :icon="icon" 
        :value="modelValue" 
        @input="updateValue"
      />
    </div>
  </template>
  
  <script>
  import TextInput from './TextInput.vue';
  
  export default {
    components: { TextInput },
    props: {
      label: String,
      placeholder: String,
      icon: String,
      modelValue: String,
    },
    methods: {
      updateValue(value) {
        this.$emit('update:modelValue', value);
      },
    },
  };
  </script>
  
  <style scoped>
  .form-field {
    margin-bottom: 16px;
  }
  </style>
  