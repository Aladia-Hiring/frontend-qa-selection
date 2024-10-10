<template>
  <form @submit.prevent="onSubmit">
    <slot></slot> <!-- Slot to place input components inside -->
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['submit'])

const onSubmit = () => {
  console.log('Form submitted')
  emit('submit') // Emit submit event to parent
}
</script>
  