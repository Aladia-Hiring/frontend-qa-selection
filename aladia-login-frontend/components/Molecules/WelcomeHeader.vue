<template>
    <div class="flex items-center justify-center mb-6 border border-white bg-black p-4 rounded-lg">
      <Logo
      :welcomeText = "welcomeText"
      :descriptionText = "descriptionText" />
    </div>
  </template>
  
<script>
  import Logo from '@/components/Atoms/Logo.vue';
  
  export default {
    components: { Logo },
    props: {
      logoSrc: String,
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
  