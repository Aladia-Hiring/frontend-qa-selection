  
  <script>
  import SignupForm from '~/components/SingupForm.vue';
  
  export default {
    components: { SignupForm },
  };
  </script>
<template>
    <div class="signup-page">
      <h1>Nice to meet you</h1>
      <SignupForm />
    </div>
  </template>
  
  <style scoped>
    .signup-page {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  </style>
  