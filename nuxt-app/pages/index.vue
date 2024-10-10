<script setup lang="ts">
    import Login from '../components/Login.vue';
    import Signup from '../components/signup.vue';
    import Dashboard from '../components/dashboard.vue';

import { ref } from 'vue';

const showSignup = ref(false); // Controls whether to show the signup form
const showDashboard = ref(false); // Controls whether to show the dashboard
const email = ref('');

// Handle login submission
const handleLogin = async (loginEmail: string) => {
  email.value = loginEmail;
  
  // Simulate checking if the email exists in the system
  const emailExists = await checkEmailExists(loginEmail);
  
  if (emailExists) {
    // If email exists, show the dashboard
    showDashboard.value = true;
    showSignup.value = false;
  } else {
    // If email does not exist, switch to the signup form
    showSignup.value = true;
    showDashboard.value = false;
  }
};

// Mock email existence check
const checkEmailExists = (email: string): Promise<boolean> => {
  const existingEmails = ['test@example.com', 'user@example.com'];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(existingEmails.includes(email));
    }, 1000);
  });
};

const handleSignup = (signupData: any) => {
  console.log('Signup data:', signupData);
  showDashboard.value = true;
  showSignup.value = false;
};

</script>

<template>
  <div class="wrapper">
    <Login v-if="!showSignup && !showDashboard" @login="handleLogin" />
    <Signup v-if="showSignup && !showDashboard" :email="email" @submit="handleSignup" />
    <Dashboard v-if="showDashboard" :email="email" />
  </div>
</template>

<style scoped>
</style>
