<template>
  <div class="login-container">
    <div class="login-box">
      <div class="header">
        <img class="logo" src="../assets/aladia-logo.png" alt="Logo" />
        <div class="header-text-container">
          <h2>Welcome to Aladia,</h2>
          <p>Create or access your account from here</p>
        </div>
      </div>

      <EmailInput v-model:email="email" />
      <SubmitButton @login="login" />

      <div class="or-divider">
        <span>Or</span>
      </div>

      <SocialLoginButton 
        @loginWithGoogle="loginWithGoogle"
        @loginWithFacebook="loginWithFacebook"
        @loginWithApple="loginWithApple"
      />

      <div class="terms">
        <a href="#">Terms & Conditions</a>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from '../components/EmailInput.vue';
import SubmitButton from '../components/SubmitButton.vue';
import SocialLoginButton from '../components/SocialLoginButton.vue';

export default {
  components: {
    EmailInput,
    SubmitButton,
    SocialLoginButton
  },
  data() {
    return {
      email: ''
    };
  },
  methods: {
    async login() {
      console.log("Logging in with email:", this.email);
      
      const emailExists = await this.checkEmailExists(this.email);

      if (emailExists) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/signup'); 
      }
    },
    checkEmailExists(email) {
      const existingEmails = ['test@example.com', 'user@example.com']; 
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(existingEmails.includes(email));
        }, 1000); 
      });
    },
    loginWithGoogle() {
      console.log("Logging in with Google");
    },
    loginWithFacebook() {
      console.log("Logging in with Facebook");
    },
    loginWithApple() {
      console.log("Logging in with Apple");
    }
  }
};
</script>

  
  <style scoped>
  /* Container */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
    
  }
  
  /* Login Box */
  .login-box {
    background-color: #050505;
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    width: 360px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  
    border-style: solid;
    border: 1px solid #fff;
  }
  
  /* Header */
  .header {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
      justify-content: space-between;
  }
  
  .header-text-container {
      display: flex;
      flex-direction: column;
      justify-content: left;
      text-align: left;
  }
  
  .logo {
    height: 80px;
    margin-bottom: 10px;
  }
  
  h2 {
    color: #fff;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
  }
  
  p {
    color: #aaa;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
  
  /* Email Input */
  .email-input {
    margin: 20px 0;
  }
  
  .email-icon-img{
      width: 20px;
      height: 20px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2px;
    padding-left: 8px;
    border-radius: 5px;
    position: relative;
  }
  
  .input-container .icon {
    margin-right: 10px;
    color: #aaa;
  }
  #email {
      color: #000;
  }
  
  .input-container input {
    flex: 1;
    background: none;
    border: none;
    color: #fff;
    padding: 10px;
    outline: none;
  }
  
  .input-container input::placeholder {
    color: #777;
  }
  
  /* Submit Button */
  .submit button {
    width: 100%;
    padding: 12px;
    background-color: #444;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .submit button:hover {
    background-color: #555;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
  
  /* Divider */
  .or-divider {
    margin: 20px 0;
    color: #aaa;
    font-size: 14px;
  }
  
  /* Social Buttons */
  .social-buttons button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .social-buttons button img {
    margin-right: 10px;
    width: 20px;
  }
  
  .social-buttons .google {
    background-color: #0A0A0A;
    border: 1px solid #555555;
  }
  
  .social-buttons .facebook {
    background-color: #0A0A0A;
    border: 1px solid #555555;
  }
  
  .social-buttons .apple {
    background-color: #0A0A0A;
    border: 1px solid #555555;
  }
  
  .social-buttons button:hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    background-color: #373737;
  }
  
  /* Terms */
  .terms {
    margin-top: 40px;
    font-family: 'Roboto', sans-serif;
  }
  
  .terms a {
    color: #777;
    font-size: 12px;
    text-decoration: none;
  }
  
  .terms a:hover {
    color: #fff;
  }
  
  /* Styles for Mobile */
  @media (max-width: 768px) {
    .login-box {
      width: 90%;
      padding: 20px;
    }
  
    .email-input input,
    .submit button,
    .social-buttons button {
      font-size: 14px;
    }
  }
  </style>