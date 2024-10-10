<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-gray-950 bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md">
      <WelcomeHeader logoSrc="./assets/images/aladia-logo.png" />

      <div class="mb-6 text-center"> 
        <h6 class="text-white text-lg font-semibold">Enter your email</h6> 
      </div>

      <InputField 
        id="email" 
        label="Email" 
        placeholder="Email Address" 
        v-model="email"  
        icon="./assets/images/email-icon.png" 
        inputType="email" 
        type="email"
        :error="!isValidEmail(email)"  
      />

      <div class="mb-6 mt-4">
        <Button @click="handleSubmit">Enter</Button>
      </div>

      <p class="text-center text-gray-400 mb-4">Or</p>
      <SocialMediaButtons />

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
    isValidEmail(value) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(value);
    },
    handleSubmit() {
      console.log(this.email);
      if (this.isValidEmail(this.email)) {
        this.$router.push({ path: '/signup', query: { email: this.email } });
      }
    },
  },
};
</script>
