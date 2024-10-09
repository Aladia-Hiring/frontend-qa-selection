<template>
    <div class="submit">
      <button @click="$emit('login')">Enter</button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['login']
  };
  </script>
  
  <style scoped>
  .submit button {
    width: 100%;
    padding: 12px;
    background-color: #444;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .submit button:hover {
    background-color: #555;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
  </style>
  