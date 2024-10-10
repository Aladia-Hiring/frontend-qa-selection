<template>
  <div class="fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black/90 text-white backdrop-blur ">
    <div class="bg-black bg-opacity-80 p-8 rounded-mn shadow-md w-full max-w-md border border-white">
      <WelcomeHeader logoSrc="./assets/images/aladia-logo.png" />

      <div class="mb-6 text-center"> 
        <h6 class="text-white text-lg font-semibold">Enter your email</h6> 
      </div>
      
      <div class = "mb-6 flex-col items-center px-4">

        <div>
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
        </div>

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
