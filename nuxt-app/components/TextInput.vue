<template>
  <div class="text-input">
    <label v-if="label" :for="id">{{ label }}</label>
    <div :class="['input-wrapper', customClass]">
      <span v-if="icon" class="input-icon">
        <img :src="icon" alt="icon" />
      </span>
      <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"  
        @input="$emit('update:modelValue', $event.target.value)"  
        :class="inputClass"
      />
    </div>
  </div>
</template>

<script>
import "~/assets/css/padding.css"


  export default{
    emits: ['update:modelValue'],
    props:{
    label: String,
    id: String,
    placeholder: String,
    type: { type: String, default: 'text' },
    icon: String,
    modelValue: String,  
    customClass: { type: String, default: "" },
    inputClass: String,
  }
  }

</script>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.input-icon {
  margin-right: 8px;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

input {
  width: 100%;
  box-sizing: border-box;
}
</style>
