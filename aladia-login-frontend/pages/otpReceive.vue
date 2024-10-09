<template>
  <div class="flex items-center justify-center h-screen align-between"> <!-- Use full height -->
    <div class="bg-gray-950 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-md w-full"> <!-- Adjusted container -->
      <Logo
        :welcomeText="welcomeText"
        :descriptionText="descriptionText" 
      />

      <div class="text-center m-8 mt-2">
        <h2 class="text-xl font-semibold text-white">Etsub Awoke</h2>
        
      </div>
      <div class="text-center m-8">
        <h2 class="text-lg text-white">Thanks for joining</h2>
      </div>
      <div class="text-center m-8 mb-12 text-white">
        <h2 class="text-sm text-gray-200">Please enter below a 6-digit code we sent you through a registered e-mail</h2>

      </div>

      <OtpForm />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Atoms/Logo.vue';
import OtpForm from '../components/Organisms/otpForm.vue';

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

