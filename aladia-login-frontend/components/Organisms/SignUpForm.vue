<template>
    <div class ="flex-col justify-center align-center items-center">
      <div class =  "items-center mx-24">
        <button
      @click="goToLogin"
      class="flex items-center justify-center text-white rounded transition"
    >

      <span class="icon-text transition-transform" :class="{ 'hovered': isHovered }">
        {{ isHovered ? '←' : '<' }} 
      </span>
      <span class="ml-2">Back to login</span>
    </button>
      </div>

      
      <ProfilePictureUpload @image-uploaded="handleImageUpload" /> 
      <div class="flex items-center mb-6">
      <input
        type="checkbox"
        id="terms"
        v-model="agreedToTerms"
        class="mr-2"
      />
      <label for="terms" class="text-white">
        I agree to the
        <a href="#" class="text-blue-400 underline">Terms & Conditions</a>
      </label>
    </div>
      <!-- Email input -->
      <div class="mb-6 text-center"> 
        <h6 class="text-white text-lg font-semibold">Enter your details</h6> 
      </div>

      <InputField 
        id="name" 
        label="Name" 
        placeholder="name" 
        v-model="name"  
        icon="./assets/images/email-icon.png" 
        type="name" 
      />
      <InputField 
        id="name" 
        label="Name" 
        placeholder="name" 
        v-model="name"  
        icon="./assets/images/email-icon.png" 
        type="name" 
      />

      <InputField 
        id="email" 
        label="Email" 
        placeholder="Email Address" 
        v-model="email"  
        icon="./assets/images/email-icon.png" 
        type="email" 
      />

      <InputField 
        id="password" 
        label="Password" 
        placeholder="password" 
        v-model="password"  
        icon="./assets/images/email-icon.png" 
        type="password" 
      />

      <InputField 
        id="password" 
        label="Password" 
        placeholder="password" 
        v-model="password"  
        icon="./assets/images/email-icon.png" 
        type="password" 
      />

      <div class="mb-6 mt-4"> 
        <Button @click="handleSubmit">Enter</Button>
      </div>

      <div class="cursor-pointer text-center text-white/40">Terms & Conditions</div>
    </div>
  </template>
  
  <script>
  import ProfilePictureUpload from '../Molecules/ProfilePictureUpload.vue';
  import InputField from '../Atoms/InputField.vue';
  import Button from '../Atoms/Button.vue';
  
  export default {
    name: 'SignupForm',
    components: {
      ProfilePictureUpload,
      InputField,
      Button,
    },
    data() {
        return {
          isHovered: false,
          email: this.$route.query.email || '',
        };
      },
    methods: {
      handleImageUpload(image) {
        // Handle the uploaded image
        console.log('Image uploaded:', image);
      },
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

      goToLogin() {
      this.$router.push({ path: '/login' }); 
    },
    onHover() {
      this.isHovered = true; 
    },
    onLeave() {
      this.isHovered = false; 
    },
    
    },
  };
  </script>
  
  