<template>
    <div class="wrapper">
      <h1>Recover password sent to {{ email }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      email: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any styles you need */
  </style>
  