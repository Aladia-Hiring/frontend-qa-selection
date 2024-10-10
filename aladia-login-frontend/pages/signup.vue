<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">

    <div class="bg-gray-950 bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md">
      
      <SignupForm :email="email" @submit="handleSubmit" />
    
    </div>
  </div>
</template>

<script>
import WelcomeHeader from '@/components/Molecules/WelcomeHeader.vue';
import SocialMediaButtons from '@/components/Molecules/SocialMediaButtons.vue';
import SignupForm from '@/components/Organisms/SignUpForm.vue'

export default {
  name: 'Signup',
  components: {
    WelcomeHeader,
    SocialMediaButtons,
    SignupForm
  },


  data() {
      return {
        email: this.$route.query.email || '',
      };
    },
    props: {
    email: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleSubmit() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      console.log(this.email);
      // if (regex.test(this.email)) {
        // Redirect to signup page with email
        this.$router.push({ path: '/otpReceive'});
      // } else {
      //   console.log(this.email);
      //   alert('Please enter a valid email address.');
      // }
    },
  },
};
</script>
