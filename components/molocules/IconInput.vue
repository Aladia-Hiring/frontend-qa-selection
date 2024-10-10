<template>
    <div class="relative mb-4">
      <!-- Placeholder for icon; adjust as needed -->
      <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <!-- Placeholder for actual icon -->
         hey
      </span>
      <AppInput type="email" placeholder="Email address" />
    </div>
  </template>
  
  <script>
  import AppInput from '~/components/atoms/AppInput.vue';
  
  export default {
    components: {
      AppInput
    }
  }
  </script>
  