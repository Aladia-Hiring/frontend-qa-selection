<template>
    <div class = "fixed bottom-0 left-0 right-0 top-0 z-[90] flex h-full w-full items-center justify-center bg-black/90 text-white backdrop-blur">
      <Login/>
    </div>
  </template>

<script>  
import Login from './login.vue';

export default {
  components: {
    Login
  }
};
</script>
 
  