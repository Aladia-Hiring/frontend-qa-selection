<template>
    <div class="flex items-center justify-center h-screen align-between"> <!-- Use full height -->
      <div class="bg-gray-950 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full"> <!-- Adjusted container -->
        <Logo
          :welcomeText="welcomeText"
          :descriptionText="descriptionText" 
        />
        
        <div class="text-center m-8">
          <h2 class="text-lg text-white">Thanks for joining</h2>
        </div>

         <Button>
            <router-link to="/otpReceive">Go to marketplace</router-link>
         </Button>  
      </div>
    </div>
  </template>
  
  <script>
  import Logo from '~/components/Atoms/Logo.vue';
  import OtpForm from '../components/Organisms/otpForm.vue';
  import Button  from '../components/Atoms/Button.vue';
  
  export default {
    name: 'otpReceive',
    components: { Logo, OtpForm },
    props: {
      logoSrc: String,
      welcomeText: {
        type: String,
        default: '',
      },
      descriptionText: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  
  