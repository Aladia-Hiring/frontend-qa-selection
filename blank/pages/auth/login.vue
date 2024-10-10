<template>
  <div class="background">
    <div class="surface">
      <div class="header-box">
        <img src="/assets/images/aladia-logo.jpg" alt="Logo" class="aladia-logo" />
        <div>
          <h1>Welcome to Aladia</h1>
          <p class="info-text">Create or access your account from here</p>
        </div>
      </div>
        <!-- Form Component -->
        <Form @submit="onSubmit">

          <div class="components-div">

          <div class="component-container">
              <Input
              id="email"
              type="email"
              label="Enter your email"
              placeholder="Email Address"
              v-model="form.email"
              :error="errors.email"
              :successMessage="successMessage"
            />
          </div>

          <div class="component-container">
            <Button type="submit" :loading="loading">
            Enter
          </Button> 
          </div>


          <div class="or-container">
            <div class="or-line"></div>
            <span>Or</span>
            <div class="or-line"></div>
          </div>


          <div class="component-container">

              <SocialButton iconSrc="/assets/images/google.jpeg" alt="Google" @click="handleGoogleLogin">
              Continue with Google
            </SocialButton>
          </div>


          <div class="component-container">

            <SocialButton iconSrc="/assets/images/facebook.png" alt="Facebook" @click="handleFacebookLogin">
              Continue with Facebook
            </SocialButton>
          </div>


          <div class="component-container">
            <SocialButton iconSrc="/assets/images/apple.png" alt="Apple" @click="handleAppleLogin">
            Continue with Apple
          </SocialButton>
          </div>
          <p>Dont have an account ? <a href="/auth/signup">Signup</a></p>
  
          <NuxtLink to="/" class="terms">Terms & conditions</NuxtLink>
      </div>

        </Form>

    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Input from '../../components/Input.vue'
import Button from '../../components/Button.vue'
import Form from '../../components/Form.vue'
import SocialButton from '../../components/SocialButton.vue'

const form = reactive({ email: '' })
const errors = reactive({ email: '' })
const successMessage = ref('')
const loading = ref(false)

const onSubmit = () => {
  // Same validation logic as before
}

const handleGoogleLogin = () => {
  console.log('Google login clicked')
}

const handleFacebookLogin = () => {
  console.log('Facebook login clicked')
}

const handleAppleLogin = () => {
  console.log('Apple login clicked')
}
</script>

<style scoped>

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
      justify-content: center;
      align-items: center;
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

    .or-container {
      width: 100%;
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
    .terms{
        text-decoration: none;
        color: rgb(126, 122, 122);
        font-size: small;
        margin-top: 1rem;
      }
      p{
        color: white;
      }
      a{
        color: white;
      }
</style>
