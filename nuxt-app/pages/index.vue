<script setup lang="ts">
    import Login from '../components/Login.vue';
    import Signup from '../components/signup.vue';
    import Dashboard from '../components/dashboard.vue';

import { ref } from 'vue';

const showSignup = ref(false); 
const showDashboard = ref(false); 
const email = ref('');

const handleLogin = async (loginEmail: string) => {
  email.value = loginEmail;
  
  const emailExists = await checkEmailExists(loginEmail);
  
  if (emailExists) {
    showDashboard.value = true;
    showSignup.value = false;
  } else {
    showSignup.value = true;
    showDashboard.value = false;
  }
};

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
