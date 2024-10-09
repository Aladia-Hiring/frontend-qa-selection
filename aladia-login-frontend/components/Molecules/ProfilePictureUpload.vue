<template>
    <div class="relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white">
      <img :src="src" class="absolute inset-0 h-full w-full rounded object-cover" />
      <input type="file" accept="image/*" class="absolute inset-0 opacity-0" @change="uploadImage" />
      <div class="absolute inset-0 flex items-end justify-center pb-4">
        <div class="mb-1 text-sm font-semibold">Nice to meet you,</div>
        <div class="text-xs text-white/70">Upload a profile picture and complete your presentation</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: { type: String, default: '/logo/image.png' },
    },
    methods: {
      uploadImage(event) {
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
  