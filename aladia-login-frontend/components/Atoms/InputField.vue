<template>
    <div class="relative mb-4">
      <label :for="id" class="sr-only">{{ label }}</label>
      <div class="flex items-center">
        <span v-if="icon" class="absolute left-3 text-gray-500">
          <img :src="icon" alt="icon" class="w-5 h-5" />
        </span>
        <input
          :id="id"
          :type="inputType"
          :placeholder="placeholder"
          v-bind="value"
          @input="validateInput"
          class="w-full pl-10 px-4 py-2 bg-white text-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <span v-if="inputType === 'password'" class="absolute right-3 cursor-pointer" @click="togglePasswordVisibility">
          <img :src="showPassword ? 'path_to_eye_icon' : 'path_to_eye_slash_icon'" alt="toggle visibility" class="w-5 h-5" />
        </span>
      </div>
      <p v-if="error" class="text-red-500 text-xs">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: String,
      label: String,
      placeholder: String,
      value: {
        type: String,
        required: true,
      },
      icon: String,
      type: {
        type: String,
        default: 'text', // default to text input
      },
    },
    data() {
      return {
        error: '',
        showPassword: false, // for password visibility toggle
      };
    },
    computed: {
      inputType() {
        return this.type === 'password' && !this.showPassword ? 'password' : this.type;
      },
    },
    methods: {
      validateInput() {
        // Custom validation logic based on input type
        if (this.type === 'email') {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          this.error = regex.test(this.value) ? '' : 'Invalid email format';
        } else if (this.type === 'name') {
          this.error = this.value.length < 2 ? 'Name must be at least 2 characters' : '';
        } else {
          this.error = ''; // No error for other input types
        }
        this.$emit('input', this.value);
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>
  
