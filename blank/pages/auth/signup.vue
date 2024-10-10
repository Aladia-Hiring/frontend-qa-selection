<template>
    <div class="background">
      <div class="surface">

        <<a href="/auth/login" class="link-login">
  &lt; back to login
</a>
        <div class="header-box">
          <img src="/assets/images/aladia-logo.jpg" alt="Logo" class="aladia-logo" />
          <div>
            <h1>Nice to meet you,</h1>
            <p>Upload a profile picture and complete your presentation</p>
          </div>
        </div>
  
        <Form @submit="onSubmit" :formError="formError" class="components-div">
          
          <!-- Terms and conditions checkbox -->
          <div class="checkbox-container">
            <input type="checkbox" v-model="termsAccepted" class="checkbox" id="terms-checkbox" />
            <label for="terms-checkbox">
                I accept <NuxtLink  class="link" to="/">Terms & Conditions</NuxtLink> and
                <NuxtLink class="link" to="/">Privacy Policy</NuxtLink>
            </label>
            </div>
  
          <!-- Input fields using Input component -->
          <Input 
            v-model="form.name"
            label=""
            placeholder="Enter your name"
            type="text"
            required
          />
          
          <Input 
            v-model="form.surname"
            label=""
            placeholder="Enter your surname"
            type="text"
            required
          />
  
          <Input 
            v-model="form.email"
            label=""
            placeholder="Enter your email"
            type="email"
            required
          />
  
          <Input 
            v-model="form.password"
            label=""
            placeholder="Enter your password"
            type="password"
            required
          />
  
          <Input 
            v-model="form.confirmPassword"
            label=""
            placeholder="Confirm your password"
            type="password"
            required
          />
  
          <!-- Submit button using Button component -->
          <Button :disabled="!termsAccepted || hasErrors()"  >
            Enter
        </Button>
          
        </Form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  
  const form = reactive({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  })
  
  const errors = reactive({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  })
  
  const formError = ref('')
  const isSignup = ref(true) // Toggle between signup/login
  
  // Handle form submission
  const onSubmit = () => {
    // Validate fields based on isSignup
    validateForm()
    
    if (hasErrors()) {
      formError.value = 'Please correct the errors above.'
      return
    }
  
    // Simulate an API request
    setTimeout(() => {
      console.log('Form submitted:', form)
    }, 1000)
  }
  
  const validateForm = () => {
    // Reset errors
    Object.keys(errors).forEach(key => errors[key] = '')
  
    // Common validations
    if (!form.email) {
      errors.email = 'Email is required.'
    }
    // check for email format
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Email is not valid.'
    }
  
    if (!form.password) {
      errors.password = 'Password is required.'
    } else if (form.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.'
    }
  
    // Additional signup validations
    if (isSignup.value) {
      if (!form.name) {
        errors.name = 'Name is required.'
      }
  
      if (!form.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password.'
      } else if (form.confirmPassword !== form.password) {
        errors.confirmPassword = 'Passwords do not match.'
      }
    }
  }
  
  const hasErrors = () => {
  return Object.values(errors).some(error => error !== '')
}
  </script>
  <style scoped>
  
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
    color: #f5f3f3;
  }
  /* Background and general layout */
  .background {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #1a202c; /* dark background */
  }
  
  .surface {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    opacity: 0.85;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
    width: 100%;
    max-width: 20rem;
  }
  
  /* Header styling */
  
  .header-box {
      display: flex;
      gap: 4rem;
      align-items: center;
      margin-bottom: 1rem;
      border: 1px solid rgb(78, 77, 77);
      background-color: rgb(15, 14, 14);
      padding: 1rem 1.5rem;
      padding-right: 1rem;
      border-radius: 0.25rem;
  
    }
  
  .aladia-logo {
    margin-bottom: 1rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  
  h1 {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  
  p {
    font-size: 0.875rem;
    color: #cbd5e0;
  }
  
  /* Form and input elements */
  .components-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
  }
  
  
  .checkbox {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    background-color: black;
    border: solid 1px white;
  }
  .nuxt-link {
    color: #f5f7f8;
  }
  /* Button styling */
  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #3182ce;
    color: white;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
  
  /* Terms and conditions link */
  .terms-link {
    font-size: 0.75rem;
    color: #cbd5e0;
    text-align: center;
    margin-top: 1rem;
  }

  .checkbox-container {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 14px;
    margin-bottom: 0.75rem;
  }
  .link{
    color: white;
  }
  .link-login {
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
  }
  </style>
  