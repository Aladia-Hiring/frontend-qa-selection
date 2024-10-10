<!-- src/components/Card.vue -->
<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'Card Title'
    },
    description: {
      type: String,
      default: 'Card Description'
    },
    bgColor: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style>
.card {
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
