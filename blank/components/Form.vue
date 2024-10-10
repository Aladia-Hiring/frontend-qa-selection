<template>
    <form @submit.prevent="onSubmit" novalidate>
      <slot></slot>
    </form>
  </template>
  
  <script setup lang="ts">
  const emit = defineEmits(['submit'])
  
  const onSubmit = () => {
    emit('submit')
  }
  </script>
  