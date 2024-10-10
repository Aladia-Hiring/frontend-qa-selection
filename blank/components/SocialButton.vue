<template>
    <button class="link-btns" @pointerdown="handlePointerDown" @pointerup="onClick">
      <div class="img-text-cont">
        <img :src="iconSrc" :alt="alt" class="symbol-imgs" />
        <slot></slot>
      </div>
    </button>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    iconSrc: String || '/assets/images/google.jpeg',
    alt: String,
  })
  
  const emit = defineEmits(['click', 'pointerdown'])
  
  const handlePointerDown = () => emit('pointerdown')
  const onClick = () => emit('click')
  </script>
  
  <style scoped>
  .link-btns {
    width: 100%;
    background-color: black;
    border: 1px solid rgb(78, 77, 77);
    border-radius: 0.25rem;
    color: white;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0.25rem 3rem;
    cursor: pointer;
  }
  .symbol-imgs {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
  }
  .img-text-cont{
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
      }
  </style>
  