<template>
    <div class="gradient inset-0 bg-black flex items-center justify-center mb-6 border border-white bg-black p-4 rounded-lg">
      <Logo
      :src="logoSrc"
      :welcomeText = "welcomeText"
      :descriptionText = "descriptionText" />
    </div>
  </template>
  
<script>
  import Logo from '../Atoms/Logo.vue';
  
  export default {
    components: { Logo },
    props: {
      logoSrc: {
        type:String,
        default:""
      },
      welcomeText: {
        type: String,
        default: 'Welcome to Aladia',
    },
    descriptionText: {
      type: String,
      default: 'Create or access your account from here', 
    },
    },

    

  };
</script>
  