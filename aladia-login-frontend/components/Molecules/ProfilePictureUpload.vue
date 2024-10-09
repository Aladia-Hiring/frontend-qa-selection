<template>
     <div class="flex items-center justify-space-between w-full m-8">
      <img
      src="/assets/images/aladia-logo.png"
      alt="Logo"
      class="cursor-pointer w-20 h-20 object-cover rounded-full border border-white"
      @click="triggerFileUpload"
    />
    <input
      type="file"
      ref="fileInput"
      class="hidden"
      @change="handleFileUpload"
    />
      <div class="text-white ml-4">
        <h1 class="text-xl">{{ welcomeText }}</h1>
        <p class="text-sm">{{ descriptionText }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      // src: { type: String, default: '/logo/image.png' },
      welcomeText:{
        type:String,
        default: "Nice to meet you"
      

      },
      descriptionText:{
        type:String,
        default:"Upload a profile picture and complete your presentation"
      }
    },
    methods: {
      triggerFileUpload() {
      this.$refs.fileInput.click();
   },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.$emit('image-uploaded', e.target.result);
          };
          reader.readAsDataURL(file);
        }
      },
    },
  };
  </script>
  