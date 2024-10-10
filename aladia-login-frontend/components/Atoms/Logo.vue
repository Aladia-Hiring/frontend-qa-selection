<template>
    <div class="flex justify-between gradient inset-0 ">

      <div class="relative flex w-full justify-between transition-all duration-300 opacity-100 mr-4">
        <img src="/assets/images/aladia-logo.png" alt="Logo" class="h-20 w-20 object-cover" />
      
      <div class = "ml-8">
        <div class="mb-2 text-base font-semibold">
          Welcome to Aladia,
        </div>
        <div class="text-white/70"> 
          Create or access your <br> 
          account from here </div>
        </div>
     
    </div>
  </div>
    
  </template>
  
  
  <script>
  export default {
  props: {
    src: {
      type: String,
      required: true,
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
  methods:{
    uploadImage(){
      this.$emit("upload-image")
    }
  }
};
  </script>
