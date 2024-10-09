<template>
    <div class="email-input">
      <label for="email">Enter your email</label>
      <div class="input-container">
        <img class="email-icon-img" src="../assets/message.png" alt="Email icon" />
        <input 
          type="email" 
          id="email" 
          required 
          placeholder="Email Address" 
          :value="email" 
          @input="$emit('update:email', $event.target.value)"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['email']
  };
  </script>
  
  <style scoped>
  /* Email Input related styles */
  .email-input {
    margin: 20px 0;
  }
  
  .email-icon-img{
      width: 20px;
      height: 20px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2px;
    padding-left: 8px;
    border-radius: 5px;
    position: relative;
  }
  
  #email {
      color: #000;
  }
  
  .input-container input {
    flex: 1;
    background: none;
    border: none;
    color: #fff;
    padding: 10px;
    outline: none;
  }
  
  .input-container input::placeholder {
    color: #777;
  }
  </style>
  