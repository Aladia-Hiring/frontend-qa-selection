<template>
    <div class="min-h-screen bg-black flex items-center justify-center">
      <LoginForm />
    </div>
  </template>
  
  <script>
  import LoginForm from '@/components/organisms/LoginForm.vue';
  
  export default {
    components: {
      LoginForm,
    },
  };
  </script>
  
  <style scoped>
  body {
    background-color: black;
  }
  </style>
  