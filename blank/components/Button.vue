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
    type: { type: String as PropType<'reset' | 'submit' | 'button'>, default: 'button' },
    loading: Boolean,
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
    font-weight: 400;
    font-size: medium;
    border: 1px solid rgb(78, 77, 77);
    border-radius: 0.25rem;
    transition: background-color 0.3s;
    cursor: pointer;
    margin: 0.75rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .enter-button:hover {
    background-color: #52575e;
  }
  </style>
  