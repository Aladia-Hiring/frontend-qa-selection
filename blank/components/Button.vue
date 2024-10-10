<template>
  <button 
    :type="type" 
    class="enter-button" 
    :disabled="loading"
    @pointerdown="handlePointerDown"
    @pointerup="handlePointerUp"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: { type: String as PropType<'reset' | 'submit' | 'button'>, default: 'submit' }, // Ensure type is 'submit'
  loading: Boolean, // Disable button when loading
})

const emit = defineEmits(['pointerdown', 'pointerup'])

const handlePointerDown = () => emit('pointerdown')
const handlePointerUp = () => emit('pointerup')
</script>

<style scoped>
.enter-button {
  width: 100%;
  padding: 0.5rem 1rem;
  background: black;
  color: white;
  border-radius: 0.25rem;
  border: 1px solid rgb(121, 118, 118);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.enter-button:disabled {
  background-color: #a0aec0; /* Disable style */
  cursor: not-allowed;
}
.enter-button:hover:not(:disabled) {
  background-color: #52575e;
}
</style>
