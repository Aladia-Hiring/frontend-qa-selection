<template>
    <button :class="buttonClass" @click="handleClick" :disabled="disabled">
      <slot></slot>
    </button>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'Button',
    props: {
      type: {
        type: String as PropType<'primary' | 'secondary' | 'danger'>,
        default: 'primary',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      buttonClass(): string {
        return `btn btn-${this.type}`;
      },
    },
    methods: {
      handleClick(event: Event) {
        if (!this.disabled) {
          this.$emit('click', event);
        }
      },
    },
  });
  </script>
  
  <style scoped>
  .btn {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  .btn-primary {
    background-color: blue;
    color: rgb(27, 26, 101);
  }
  .btn-secondary {
    background-color: gray;
    color: white;
  }
  .btn-danger {
    background-color: red;
    color: white;
  }
  .btn:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
  </style>