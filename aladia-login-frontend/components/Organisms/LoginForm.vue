<template>
      <div class="bg-black bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
        <WelcomeHeader />
        <InputField 
        label="Email"
        placeholder="Email Address" 
        v-model="parentModel" 
        inputType="email"
        type = "email"
        />
        
        <div class="mb-6">
          <Button @click="handleSubmit">Enter</Button>
        </div>
  
        <p class="text-center text-gray-400 mb-4">Or</p>
        <SocialMediaButtons />
        <div class="mt-6 text-center">
          <a href="#" class="text-gray-400 text-sm hover:text-gray-300">Terms & Conditions</a>
        </div>
      </div>

  </template>
  
  <script>
  import InputField from '../Atoms/InputField.vue';
  import Button from '../Atoms/Button.vue';
  import WelcomeHeader from '../Molecules/WelcomeHeader.vue';
  import SocialMediaButtons from '../Molecules/SocialMediaButtons.vue';
  import { ref } from 'vue';
   
  const parentModel = ref(null);


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
        console.log(parentModel.value, "ssss");
        if (parentModel.value && !this.error) {
          this.$router.push({ path: '/signup', query: { email: parentModel.value } });
        }
      },
    },
  };
  </script>
  