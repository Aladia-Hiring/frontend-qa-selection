<template>
    <div class="flex items-center justify-center mb-6 border border-white bg-black p-4 rounded-lg">
      <Logo />
    </div>
  </template>
  
  <script>
  import Logo from '@/components/Atoms/Logo.vue';
  
  export default {
    components: { Logo },
    props: {
      logoSrc: String,
    },
  };
  </script>
  