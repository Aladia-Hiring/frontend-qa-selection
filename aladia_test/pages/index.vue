<template>
  <div class="relative min-h-screen bg-gray-900 bg-opacity-100 text-white">
    <!-- Header with search and Join Us button -->
    <div class="bg-gray-900 p-4 flex justify-between items-center">
      <div class="space"></div>
      <div class="relative w-full max-w-md">
        <!-- Search Icon -->
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          <i class="fas fa-search"></i>
        </span>
        
        <!-- Search Input -->
        <input
          type="text"
          placeholder="Search courses..."
          class="w-full bg-gray-900 text-white placeholder-gray-400 border-b border-gray-600 focus:outline-none focus:border-white focus:ring-0 pl-10 pb-1"
        />
      </div>
      <button @click="openLoginPopup" class="bg-gray-800 px-4 py-2 rounded">
        Join Us
      </button>
    </div>

    <!-- Login Popup -->
    <LoginPopupComponent v-if="isLoginPopupOpen" @close="closeLoginPopup" />
  </div>
</template>

<script>
import LoginPopupComponent from '~/components/LoginPopupComponent.vue';

export default {
  components: { LoginPopupComponent },
  data() {
    return {
      isLoginPopupOpen: false,
    };
  },
  methods: {
    openLoginPopup() {
      this.isLoginPopupOpen = true; // Show the popup
    },
    closeLoginPopup() {
      this.isLoginPopupOpen = false; // Hide the popup
    },
  },
};
</script>

<style>
/* Optional styling for background blur when the popup is open */
</style>
