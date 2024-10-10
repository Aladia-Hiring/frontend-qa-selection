<template>
  <div class="component-container">

    <label :for="id" class="email-label">{{ label }}</label>
    <input
      :value="modelValue"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      class="email-input"
      @input="onInput"
      :class="{ 'input-error': error }" 
      required
    />
    <p v-if="error" class="error-text">{{ error }}</p> <!-- Display error -->
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p> <!-- Display success -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: String,
  type: { type: String, default: 'text' },
  label: String,
  placeholder: String,
  modelValue: String,
  error: String, // Prop for error message
  successMessage: String, // Prop for success message
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value) // Emit input value change
}
</script>

<style scoped>
.component-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-top: 0.5rem;
}

.input-error {
  border-color: red;
}
.error-text {
  color: red;
  font-size: 0.85em;
}
.success-message {
  color: green;
  font-size: 0.85em;
}
.email-label {
  color: white;
}
.email-input {
  width: 90%;
  padding: 0.25rem 1rem;
  background-color: #ffffff;
  border-radius: 0.25rem;
  border: 1.5px solid #d1d5db;
  outline: none;
  height: 1.75rem;
}
.email-input:focus {
  border-color: #2c3131;
  box-shadow: 0 0 0 2px #2c3131;
}
</style>
