<template>
  <div class="checkbox-wrapper">
    <input 
      type="checkbox" 
      :id="id" 
      :checked="modelValue" 
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label :for="id">
      <slot>{{ label }}</slot>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    modelValue: Boolean,
  },
}
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
input[type="checkbox"] {
  margin-right: 8px;
}
</style>
