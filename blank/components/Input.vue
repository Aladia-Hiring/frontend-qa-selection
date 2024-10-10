<template>
    <div class="component-container">
      <label :for="id" class="email-label">{{ label }}</label>
      <input
        :value="modelValue"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        icon="email"
        class="email-input"
        @input="onInput"
        :class="{ 'input-error': error }"
        required
      />
      <p v-if="error" class="error-text">{{ error }} error message</p>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    id: String,
    type: { type: String, default: 'text' },
    label: String,
    placeholder: String,
    modelValue: String, // Now used as a prop without v-model directly
    error: String,
    successMessage: String,
  })
  
  const emit = defineEmits(['update:modelValue']) // Emit event to notify parent component of change
  
  // Function to handle input changes and emit the update event
  const onInput = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }
  </script>
  
  <style scoped>
  .component-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: transparent;
    }

  .input-error {
    border-color: red;
  }
  .error-text {
    color: red;
    font-size: 0.85em;
    margin-top: 5px;
    margin-bottom: 0;
  }
  .success-message {
    color: green;
    font-size: 0.85em;
    margin-top: 5px;
    margin-bottom: 0;
  }
  .email-label {
      color: white;
      font-weight: 400;
      padding: 1rem 0;
      
    }
    .email-input {
        width: 90%;
        padding: 0.5rem 1rem;
        background-color: #ffffff; 
        color: #37393a;
        border-radius: 0.25rem;
        border: 1.5px solid #d1d5db; /* border-gray-300 */
        outline: none;
        &:focus {
          border-color: #2c3131; /* focus:ring-yellow-500 */
          box-shadow: 0 0 0 2px #2c3131;
        }
      }
  </style>
  