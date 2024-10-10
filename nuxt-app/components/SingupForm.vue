<template>
  <form @submit.prevent="submitForm">
    <FormField 
      placeholder="Enter your name" 
      :icon="userIcon" 
      v-model="name" 
    />
    <FormField 
      placeholder="Enter your surname" 
      :icon="userIcon" 
      v-model="surname" 
    />
    <FormField 
      placeholder="Enter your email" 
      :icon="emailIcon" 
      v-model="email" 
    />
    <FormField 
      placeholder="Enter your password" 
      type="password" 
      :icon="lockIcon" 
      v-model="password" 
    />
    <FormField 
      placeholder="Confirm your password" 
      type="password" 
      :icon="lockIcon" 
      v-model="confirmPassword" 
    />

    <Checkbox 
      label="I accept Terms & Conditions and Privacy Policy" 
      v-model="termsAccepted" 
    />
    
    <Button :disabled="!termsAccepted || !isFormValid">Enter</Button>
  </form>
</template>

<script>
import FormField from './FormField.vue';
import Button from './Button.vue';
import Checkbox from './CheckBox.vue';
import userIcon from '../assets/user.png';
import emailIcon from '../assets/message.png';
import lockIcon from '../assets/key.png';

export default {
  components: { FormField, Button, Checkbox },
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    };
  },
  computed: {
    isFormValid() {
      return (
        this.name &&
        this.surname &&
        this.email &&
        this.password &&
        this.confirmPassword === this.password
      );
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit', {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        termsAccepted: this.termsAccepted,
      });
    },
  },
};
</script>
