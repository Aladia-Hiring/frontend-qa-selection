<template>
    <div class="social-buttons">
      <button class="google" @click="$emit('loginWithGoogle')">
        <img src="../assets/google.svg" alt="Google icon" />
        Continue with Google
      </button>
      <button class="facebook" @click="$emit('loginWithFacebook')">
        <img src="../assets/facebook.svg" alt="Facebook icon" />
        Continue with Facebook
      </button>
      <button class="apple" @click="$emit('loginWithApple')">
        <img src="../assets/apple.svg" alt="Apple icon" />
        Continue with Apple
      </button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['loginWithGoogle', 'loginWithFacebook', 'loginWithApple']
  };
  </script>
  
  <style scoped>
  .social-buttons button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .social-buttons button img {
    margin-right: 10px;
    width: 20px;
  }
  
  .social-buttons .google {
    background-color: #0A0A0A;
    border: 1px solid #555555;
  }
  
  .social-buttons .facebook {
    background-color: #0A0A0A;
    border: 1px solid #555555;
  }
  
  .social-buttons .apple {
    background-color: #0A0A0A;
    border: 1px solid #555555;
  }
  
  .social-buttons button:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    background-color: #373737;
  }
  </style>
  