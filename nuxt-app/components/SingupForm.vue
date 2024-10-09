<template>
  <form @submit.prevent="submitForm">
    <FormField label="Name" placeholder="Enter your name" :icon="userIcon" v-model="name" />
    <FormField label="Surname" placeholder="Enter your surname" :icon="userIcon" v-model="surname" />
    <FormField label="Email" placeholder="Enter your email" :icon="emailIcon" v-model="email" />
    <FormField label="Password" placeholder="Enter your password" type="password" :icon="lockIcon" v-model="password" />
    <FormField label="Confirm Password" placeholder="Confirm your password" type="password" :icon="lockIcon" v-model="confirmPassword" />
    <Checkbox label="I accept Terms & Conditions and Privacy Policy" v-model="termsAccepted" />
    <Button :disabled="!termsAccepted">Enter</Button>
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
      userIcon,       // Import icon as part of your component
      emailIcon,
      lockIcon,
    };
  },
  methods: {
    submitForm() {
      // form submission logic
    },
  },
};
</script>
