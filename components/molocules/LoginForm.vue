<template>
    <div class="login-form">
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            data-testid="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            data-testid="password"
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" role="button">Login</button>
      </form>
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        successMessage: '',
      };
    },
    methods: {
      handleSubmit() {
        this.successMessage =
          'Everything is perfect. Your account is ready and we should probably get you started!';
      },
    },
  };
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .success-message {
    margin-top: 1em;
    color: green;
  }
  </style>
  