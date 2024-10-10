<!-- components/organisms/LoginPopUp.vue -->
<template>
  <div
    id="LoginPopUp"
    class="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 backdrop-blur"
  >
    <div
      class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 transition-all duration-300"
    >
      <div class="pointer-events-none absolute inset-0">
        <div class="bg-gradient-top absolute -top-1 left-0 right-0 h-1"></div>
        <div
          class="bg-gradient-top absolute -bottom-1 left-0 right-0 h-1"
        ></div>
        <div class="bg-gradient-left absolute -left-1 bottom-0 top-0 w-1"></div>
        <div
          class="bg-gradient-left absolute -right-1 bottom-0 top-0 w-1"
        ></div>
      </div>
      <div
        class="border bg-[#101010] p-8 rounded shadow-md w-full max-w-md text-white"
      >
        <div class="flex rounded border p-4 text">
          <img
            src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
            alt="icon"
            class="w-[150px] object-cover"
          />
          <div class="flex flex-col ml-4">
            <h3>Welcome to Aladia</h3>
            <p class="text-gray-500 text-sm">
              Create or access your account from here
            </p>
          </div>
        </div>
        <IconInput />
        <AppButton color="blue">Enter</AppButton>
        <div class="flex items-center mb-4">
          <div class="flex-grow border-t border-gray-500"></div>
          <span class="mx-2 text-gray-500">or</span>
          <div class="flex-grow border-t border-gray-500"></div>
        </div>
        <AppButton color="red" imageUrl="google-icon.png">Google</AppButton>
        <AppButton color="blue" imageUrl="facebook-icon.png">Facebook</AppButton>
        <AppButton color="black" imageUrl="apple-icon.png">Apple</AppButton>
        <p class="text-center text-gray-500 text-sm">
          By continuing, you agree to our
          <a href="#" class="text-blue-500 underline">Terms and Conditions</a>.
        </p>
        <AppButton color="gray" @click="$emit('close-modal')">Close</AppButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconInput from "../molocules/IconInput.vue";
import AppButton from "~/components/atoms/AppButton.vue";
</script>