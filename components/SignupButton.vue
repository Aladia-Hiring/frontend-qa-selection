<template>
    <button @click="onClick" class="signup-button">
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'SignUpButton',
    props: {
      label: {
        type: String,
        default: 'Sign Up',
      },
      onClick: {
        type: Function,
        default: () => {},
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  