<template>
    <div class="form-field">
      <TextInput 
        :label="label" 
        :placeholder="placeholder" 
        :icon="icon" 
        v-model="childValue"
        inputClass="padding--x-20 padding--x-10"
      />
    </div>
</template>
  
  <script>
  import TextInput from './TextInput.vue';
  
  export default {
    components: { TextInput },
    emits: ['update:modelValue'],
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

    computed: {
      childValue: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit('update:modelValue', value);
        },
      },
  },
  };
  </script>
  
  <style scoped>
  .form-field {
    margin-bottom: 16px;
  }
  </style>
  