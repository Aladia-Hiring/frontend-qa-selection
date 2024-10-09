<template>
  <div class="min-h-screen flex items-center justify-center relative top-0 overflow-hidden"> 
    <div class="absolute inset-0 bg-black/100 backdrop-blur-md"></div>

    <!-- Container with gradient border from center to out -->
    <div class="relative z-10 rounded-lg bg-black bg-opacity-80"
         style="border: 1.5px solid transparent; background-clip: padding-box, border-box;
                background-origin: border-box;
                border-image: radial-gradient(circle, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0.8)) 1;"> <!-- Radial Gradient for the border -->

      <!-- Header -->
      <div class="flex items-center justify-between text-white mb-3 mx-3 px-10 py-5 border border-gray-600 border-opacity-50 rounded-md">
        <img src="~/assets/img/logo.png" alt="Logo" class="w-20 h-20 object-cover" />

        <div class="text-right">
          <h1 class="text-[16px] font-bold text-[#cacaca] text-left mb-2">Welcome to Aladia,</h1>
          <p class="text-[#969696] text-left font-medium text-[13px]">Create or access your</p>
          <p class="text-[#969696] text-left font-medium text-[13px]">account from here</p>
        </div>
      </div>

      <!-- Login Content -->
      <div class="px-4 overflow-hidden h-[calc(100vh-150px)]"> 
        <LoginPage />
      </div>
    </div>
  </div>
</template>

<script>
import LoginPage from '~/components/templates/LoginPage.vue';

export default {
  components: {
    LoginPage
  }
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(180deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1));
}
</style>









