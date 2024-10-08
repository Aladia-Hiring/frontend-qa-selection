<template>
    <div class="bg-black p-6 rounded-md w-96 mx-auto text-white">
      <div class="text-center mb-4">
        <img src="/logo.png" class="mx-auto" />
        <h2 class="text-xl">Welcome to Aladia</h2>
        <p>Create or access your account from here</p>
      </div>
      <div class="mb-4">
        <InputField placeholder="Email Address" v-model="email" />
      </div>
      <Button @click="handleLogin" class="w-full bg-gray-700 text-white">Enter</Button>
      <div class="text-center my-4">Or</div>
      <SocialLoginButton
        iconSrc="/icons/google.png"
        label="Continue with Google"
        @click="handleGoogleLogin"
      />
      <SocialLoginButton
        iconSrc="/icons/facebook.png"
        label="Continue with Facebook"
        @click="handleFacebookLogin"
      />
      <SocialLoginButton
        iconSrc="/icons/apple.png"
        label="Continue with Apple"
        @click="handleAppleLogin"
      />
      <p class="text-center mt-4 text-gray-500">Terms & Conditions</p>
    </div>
  </template>
  
  <script>
  import InputField from '@/components/atoms/InputField.vue';
  import Button from '@/components/atoms/Button.vue';
  import SocialLoginButton from '@/components/molecules/SocialLoginButton.vue';
  
  export default {
    components: {
      InputField,
      Button,
      SocialLoginButton,
    },
    data() {
      return {
        email: '',
      };
    },
    methods: {
      handleLogin() {
        // Normal login handling
      },
      handleGoogleLogin() {
        // OAuth Google login handling
      },
      handleFacebookLogin() {
        // OAuth Facebook login handling
      },
      handleAppleLogin() {
        // OAuth Apple login handling
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add specific styling if needed */
  </style>
  