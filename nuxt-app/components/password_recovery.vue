<template>
    <div class="password-recovery">
      <h2>Password Recovery</h2>
  
      <div class="google-sign-in">
        <IconButton>
            <img src="/google-logo.png" alt="Google" />
        </IconButton>
        <div class="content">
            <p>Add a new password</p>
            <small>Your account uses Google Sign-in.</small>
            <small>Add a new password.</small>
        </div>
      </div>
  
      <RecoveryLink email="fedasa.bote@a2sv.org" />
  
      <div class="icons">
        <IconButton><img src="/compass-icon.png" alt="Compass" /></IconButton>
        <IconButton><img src="/email-icon.png" alt="Email" /></IconButton>
        <IconButton><img src="/lock-icon.png" alt="Lock" /></IconButton>
      </div>
  
      <SendLinkButton />
    </div>
  </template>
  
  <script>
  import GoogleSignIn from '@/components/GoogleSignIn.vue';
  import RecoveryLink from '@/components/RecoveryLink.vue';
  import SendLinkButton from '@/components/SendLinkButton.vue';
  import IconButton from './IconButton.vue';
  
  export default {
    components: {
      GoogleSignIn,
      RecoveryLink,
      IconButton,
      SendLinkButton,
      IconButton
    }
  }
  </script>
  
  <style scoped>
  .password-recovery {
    background-color: #1a1a1a;
    color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .icons {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  </style>
  