<template>
    <div class="flex items-center justify-space-between mb-4 w-full">
      <img src="/assets/images/aladia-logo.png" alt="Logo" class="mx-auto w-16 h-16" />
      <div class="text-white ml-4">
        <h1 class="text-xl">{{ welcomeText }}</h1>
        <p class="text-sm">{{ descriptionText }}</p>
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
