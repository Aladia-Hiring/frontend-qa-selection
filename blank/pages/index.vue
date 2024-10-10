<template>
  <div class="background">
    <div class="surface">
      <div class="header-box">
        <img src="assets/images/aladia-logo.jpg" alt="Logo" class="aladia-logo" />
        <div>
          <h1>Welcome to Aladia</h1>
          <p class="info-text">Create or access your account from here</p>
        </div>
      </div>

      <!-- Form starts here -->
      <form @submit.prevent="onSubmit" novalidate>
        <div class="components-div">
          <!-- Email input -->
          <div class="component-container">
            <label for="email" class="email-label">Enter your email</label>
            <input
              v-model="form.email"
              id="email"
              type="email"
              placeholder="Email Address"
              class="email-input"
              @input="validateEmail"
              :class="{ 'input-error': errors.email }"
              required
            />
            <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
          <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
            
          </div>

          <!-- Submit button -->
          <div class="component-container">
            <button 
              type="submit" 
              class="enter-button" 
              :disabled="loading"
              @pointerdown="handlePointerDown"
              @pointerup="handlePointerUp"
            >
              Enter
            </button>
          </div>

          <!-- Or separator -->
          <div class="or-container">
            <div class="or-line"></div>
            <span>Or</span>
            <div class="or-line"></div>
          </div>

          <!-- Social buttons -->
          <div class="component-container">
            <button 
              type="button" 
              class="link-btns" 
              @pointerdown="handlePointerDown"
              @pointerup="handleGoogleLogin"
            >
              <div class="img-text-cont">
                <img src="assets/images/google.jpeg" alt="Google" class="symbol-imgs" />
                Continue with Google
              </div>
            </button>
          </div>

          <div class="component-container">
            <button 
              type="button" 
              class="link-btns" 
              @pointerdown="handlePointerDown"
              @pointerup="handleFacebookLogin"
            >
              <div class="img-text-cont">
                <img src="assets/images/facebook.png" alt="facebook" class="symbol-imgs" />
                Continue with Facebook
              </div>
            </button>
          </div>

          <div class="component-container">
            <button 
              type="button" 
              class="link-btns" 
              @pointerdown="handlePointerDown"
              @pointerup="handleAppleLogin"
            >
              <div class="img-text-cont">
                <img src="assets/images/apple.png" alt="apple" class="symbol-imgs" />
                Continue with Apple
              </div>
            </button>
          </div>

          <NuxtLink to="/" class="terms">Terms & conditions</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

// Define reactive form state and error messages
const form = reactive({
  email: ''
})

const errors = reactive({
  email: ''
})

const successMessage = ref(''); // To manage success message state
const loading = ref(false) // To manage loading state of the form

// Function to handle form submission
const onSubmit = () => {


  // Validate email before submission
  if (!form.email) {
    errors.email = 'Email is required.'
    // Clear error message after 3 seconds
    setTimeout(() => {
      errors.email = ''
    }, 3000)
  } else if (!isValidEmail(form.email)) {
    errors.email = 'Invalid email address.'
    // Clear error message after 3 seconds
    setTimeout(() => {
      errors.email = ''
    }, 3000)
  } else {
    // If form is valid, simulate submission process
    loading.value = true
    successMessage.value = 'Form submitted successfully'
    // Clear success message after 1.5 second
    setTimeout(() => {
        successMessage.value = ''
      }, 2000)
    setTimeout(() => {
      loading.value = false
      console.log('Form submitted successfully:', form)
      successMessage.value = ''
      // Clear form fields after submission
      form.email = ''
    }, 2000)
  }
}

// Email validation utility function
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Function to validate email input as user types
const validateEmail = () => {
  if (!isValidEmail(form.email)) {
    errors.email = 'Invalid email address.'
    // clear after 1.5 seconds
    setTimeout(()=>{
      errors.email = ''
    },4000)
  } else {
    errors.email = ''
  }
}

// Handlers for social login buttons (you can replace them with actual logic)
const handleGoogleLogin = () => {
  console.log('Google login clicked')
}

const handleFacebookLogin = () => {
  console.log('Facebook login clicked')
}

const handleAppleLogin = () => {
  console.log('Apple login clicked')
}

// Pointer event handlers
const handlePointerDown = () => {
  // Optional: Add any pointer down logic here, like changing styles
  console.log('Pointer down event')
}

const handlePointerUp = () => {
  // Optional: Add any pointer up logic here, like resetting styles
  console.log('Pointer up event')
}
</script>



<style lang="css" scoped>
    
    h1{
      font-size: 0.85rem; 
      color: white; 
    }
    .background {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: #1a202c; 
    }
    .surface {
      display: flex;
      flex-direction: column;
      background-color: black;
      opacity: 0.75;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
      width: 100%;
      max-width: 20rem;
      padding-top: 4rem;
    }
    .aladia-logo {
        margin: auto;
        margin-bottom: 1rem;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }
    .info-text {
        font-size: 0.75rem; /* text-sm */
        color: #cbd5e0; /* text-gray-400 */
    }
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
    .or-container {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      color: white;
     
    }
    .or-line {
      flex-grow: 1;
      background-color: #d1d5db; /* border-gray-300 */
      border-top: 1px solid #d1d5db; /* border-gray-300 */
    }
  
    .components-div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }
    .component-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: transparent
    }
  
    .email-label {
      color: white;
      font-weight: 400;
      padding: 1rem 0;
      
    }
    .email-input {
        width: 80%;
        padding: 0.5rem 1rem;
        background-color: #ffffff; 
        color: #37393a;
        border-radius: 0.25rem;
        border: none;
        outline: none;
        &:focus {
          border-color: #2c3131; /* focus:ring-yellow-500 */
          box-shadow: 0 0 0 2px #2c3131;
        }
      }
  
      .enter-button {
        width: 80%;
        padding: 0.5rem 1rem;
        background: black;
        color: white;
        font-weight: 400;
        font-size: medium;
        border: 1px solid rgb(78, 77, 77);
        border-radius: 0.25rem;
        transition: background-color 0.3s;
        cursor: pointer;
        margin: 0.75rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .enter-button{
        width: 90%;

      }
      .enter-button:hover {
        background-color: #52575e;
      }
  
      .symbol-imgs{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
      }
  
      .link-btns{
        width: 90%;
        background-color: black;
        border: 1px solid rgb(78, 77, 77);
        border-radius: 0.25rem;
        color: white;
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: 0.25rem 3rem ;
        cursor: pointer;
      }
  
      .img-text-cont{
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: center;
      }
  
      .terms{
        text-decoration: none;
        color: rgb(126, 122, 122);
        font-size: small;
        margin-top: 1rem;
      }

      .input-error {
  border-color: red;
}

.error-text {
  color: red;
  font-size: 0.85em;
  margin-top: 5px;
}

.success-message  {
  color: green;
  font-size: 0.85em;
  margin-top: 5px;
}
  
  </style>
  
    