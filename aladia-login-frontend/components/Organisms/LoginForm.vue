<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="bg-black bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
        <WelcomeHeader />
        <InputField id="email" label="Email" placeholder="Email Address" v-model="email" />
        
        <div class="mb-6">
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
  import InputField from './InputField.vue';
  import Button from './Button.vue';
  import WelcomeHeader from './WelcomeHeader.vue';
  import SocialMediaButtons from './SocialMediaButtons.vue';
  
  export default {
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
        if (this.email && !this.error) {
          this.$router.push({ path: '/signup', query: { email: this.email } });
        }
      },
    },
  };
  </script>
  