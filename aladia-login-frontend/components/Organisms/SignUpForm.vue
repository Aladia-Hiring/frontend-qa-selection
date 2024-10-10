<template>
  <div class="flex-col justify-center align-center items-center">
    <div class="items-center mx-24">
      <button @click="goToLogin" class="flex items-center justify-center text-white rounded transition">
        <span class="icon-text transition-transform" :class="{ 'hovered': isHovered }">
          {{ isHovered ? '←' : '<' }} 
        </span>
        <span class="ml-2">Back to login</span>
      </button>
    </div>

    <ProfilePictureUpload @image-uploaded="handleImageUpload" />
    <div class="flex items-center mb-6">
      <input type="checkbox" id="terms" v-model="agreedToTerms" class="mr-2" />
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
      id="firstName" 
      label="First Name" 
      placeholder="First Name" 
      v-model="firstName"  
      icon="./assets/images/name-icon.png" 
      inputType="text" 
    />

    <InputField 
      id="surname" 
      label="Surname" 
      placeholder="Surname" 
      v-model="surname"  
      icon="./assets/images/name-icon.png" 
      inputType="text" 
    />

    <InputField 
      id="email" 
      label="Email" 
      placeholder="Email Address" 
      v-model="email"  
      icon="./assets/images/email-icon.png" 
      inputType="email" 
    />

    <InputField 
      id="password" 
      label="Password" 
      placeholder="Password" 
      v-model="password"  
      icon="./assets/images/password-icon.png" 
      inputType="password" 
    />

    <InputField 
      id="confirmPassword" 
      label="Confirm Password" 
      placeholder="Confirm Password" 
      v-model="confirmPassword"  
      icon="./assets/images/password-icon.png" 
      inputType="password" 
      :validationError="confirmPasswordError"
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
      firstName: '',
      surname: '', 
      email: '', 
      password: '',       
      confirmPassword: '', 
      agreedToTerms: false,
      confirmPasswordError: '',
    };
  },
  mounted() {
    this.email = this.$route.query.email || '';
  },
   watch: {
    confirmPassword(newVal) {
      this.confirmPasswordError = this.validateConfirmPassword(newVal);
    },
    
  },
  methods: {
    handleImageUpload(image) {
      console.log('Image uploaded:', image);
    },
    handleSubmit() {
      this.$router.push({ path: '/otpReceive' });
    },
    goToLogin() {
      this.$router.push({ path: '/login' }); 
    },
    validateConfirmPassword(confirmPassword) {
      console.log("pass check:", this.password, confirmPassword)
      if (confirmPassword !== this.password) {
        return  "Passwords do not match.";
      } else {
        return "";
      }
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
