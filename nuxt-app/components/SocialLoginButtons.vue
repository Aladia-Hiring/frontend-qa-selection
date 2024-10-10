<template>
  <div class="social-buttons">
    <Button
      :class="['google', customClass]"
      @click="$emit('loginWithGoogle')"
      size="medium"
      :disabled ="googleDisabled"
    >
      <img src="../assets/google.svg" alt="Google icon" />
      Continue with Google
    </Button>
    <Button
      :class="['facebook', customClass]"
      @click="$emit('loginWithFacebook')"
      size="medium"
      :disabled="facebookDisabled"
    >
      <img src="../assets/facebook.svg" alt="Facebook icon" />
      Continue with Facebook
    </Button>
    <Button
      :class="['apple', customClass]"
      @click="$emit('loginWithApple')"
      size="medium"
      :disabled="appleDisabled"
    >
      <img src="../assets/apple.svg" alt="Apple icon" />
      Continue with Apple
    </Button>
  </div>
</template>

<script>
import Button from './Button.vue'; 

export default {
  components: { Button },
  emits: ['loginWithGoogle', 'loginWithFacebook', 'loginWithApple'],
  props: {
    customClass: {
      type: String,
      default: '',
    },
    googleDisabled: {type:Boolean,default:false},
    facebookDisabled:{type:Boolean,default:true},
    appleDisabled:{type:Boolean,default:false},
  },
};
</script>

<style scoped>
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
.social-buttons button:disabled {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  background-color: #373737;
}
.social-buttons button img {
  margin-right: 10px;
  width: 20px;
}
</style>
