<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div class="bg-black bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
      <WelcomeHeader logoSrc="./assets/images/aladia-logo.png" />

      <!-- Email input -->
      <div class="mb-6 text-center"> 
        <h6 class="text-white text-lg font-semibold">Enter your email</h6> 
      </div>

      
      <InputField 
        id="email" 
        label="Email" 
        placeholder="Email Address" 
        v-model="email"  
        icon="./assets/images/email-icon.png" 
        type="email" 
      />

      <div class="mb-6 mt-4">
        <Button @click="handleSubmit">Enter</Button>
      </div>

      <p class="text-center text-gray-400 mb-4">Or</p>

      <!-- Social media buttons -->
      <SocialMediaButtons />

      <!-- Terms and Conditions -->
      <div class="mt-6 text-center">
        <a href="#" class="text-gray-400 text-sm hover:text-gray-300">Terms & Conditions</a>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from './components/Atoms/InputField.vue';
import Button from './components/Atoms/Button.vue';
import WelcomeHeader from './components/Molecules/WelcomeHeader.vue';
import SocialMediaButtons from './components/Molecules/SocialMediaButtons.vue';

export default {
  name: 'Login',
  components: {
    InputField,
    Button,
    WelcomeHeader,
    SocialMediaButtons,
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    handleSubmit() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      console.log(this.email);
      if (regex.test(this.email)) {
        // Redirect to signup page with email
        this.$router.push({ path: '/signup', query: { email: this.email } });
      } else {
        console.log(this.email);
        alert('Please enter a valid email address.');
      }
    },
  },
};
</script>
