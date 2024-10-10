<template>
    <main
      class="flex-grow relative z-10 bg-[#101010] min-h-screen border border-red-500"
    >
      <Header @toggle-modal="toggleModal" />
      <LoginPopUp v-if="isModalVisible" @close-modal="toggleModal" />
      <p>Hi there</p>
      <slot />
    </main>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Header from "/components/organisms/Header.vue";
import LoginPopUp from "../components/organisms/LoginPopUp.vue";
  
  const isModalVisible = ref(false);
  
  const toggleModal = () => {
    isModalVisible.value = !isModalVisible.value;
  };
  </script>