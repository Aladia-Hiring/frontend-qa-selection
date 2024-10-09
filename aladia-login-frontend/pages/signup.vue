<template>
    <div>
      <h1>Signup Page</h1>
      <input type="email" v-model="email" placeholder="Email Address" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'Signup',
    data() {
      return {
        email: this.$route.query.email || '',
      };
    },
  };
  </script>
  