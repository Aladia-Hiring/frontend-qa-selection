<template>
    <button @click="onClick" class="login-button">
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'LoginButton',
    props: {
      label: {
        type: String,
        default: 'Login',
      },
      onClick: {
        type: Function,
        default: () => {},
      },
    },
  };
  </script>
  
  <style scoped>
  .login-button {
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  