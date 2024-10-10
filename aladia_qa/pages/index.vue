<template>
  <div class="relative h-full w-screen overflow-x-hidden bg-[#101010] text-white">
    <div
      class="fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2">
      <div class="flex items-center gap-4 md:pl-20"></div>
      <div class="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center">
        <div class="pointer-events-auto relative h-full w-3/5 rounded-md pt-2 transition-all sm:w-1/3">
          <div class="relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm">
            <div class="shrink-0 cursor-pointer text-lg transition-all hover:scale-110">
              <i class="fa fa-solid fa-search"></i>
            </div>
            <input maxlength="100" role="presentation" autocomplete="new-password"
              class="h-full w-0 flex-1 bg-transparent text-white outline-none" placeholder="Search courses...">
            <div class="relative z-20 shrink-0 cursor-pointer text-sm text-gray-400 hover:text-white">
              <i class="fa fa-solid fa-circle-xmark hidden"></i>
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 h-px w-full bg-gradient-to-r from-transparent via-white to-transparent">
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex items-center gap-1.5 pr-4">
          <button @click="showLoginModal = true"
            class="group relative shrink-0 scale-100 cursor-pointer items-center justify-center overflow-hidden rounded border px-3 py-2 text-sm leading-none transition-all hover:border-transparent active:scale-95">
            <div class="absolute inset-0 z-0 flex h-full w-full items-center justify-center">
              <div
                class="h-0 w-0 rounded-full transition-all duration-200 group-hover:h-full group-hover:w-full group-hover:rounded"
                style="background: transparent linear-gradient(134deg,#bf953f,#fcf6ba 22%,#b38738 52%,#fbf6b7 79%,#aa771c) 0 0 no-repeat padding-box;">
              </div>
            </div>
            <div class="relative z-10 flex items-center justify-center gap-2 group-hover:text-black">
              <i class="fa fa-solid fa-user-plus"></i> Join Us
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="relative min-h-screen pt-14 transition-all duration-200">
      <div class="relative h-[36rem] overflow-hidden">
        <div class="z-1 relative flex items-center px-10 pt-40">
          <div class="mr-10 flex-1">
            <h1 class="mb-5 text-6xl font-bold opacity-90">E-learing Revolution 2</h1>
            <p class="mb-5 text-xl">We have worked to digitize our school, and give the whole world the opportunity to
              do it with a new study platform designed for teachers</p>
            <a href="/courses" class="inline-block cursor-pointer rounded-md bg-white px-4 py-3 text-black">Go to
              Marketplace</a>
            <div class="mt-8">
              <div>Hello</div>
              <div>en</div>
              <div>it</div>
            </div>
          </div>
          <div class="h-80 flex-1 rounded bg-gray-800"></div>
        </div>
      </div>
    </div>

    <!-- Login Modal -->
    <LoginModal v-if="showLoginModal" @close="closeLoginModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginModal from '../components/LoginModal.vue';
import 'font-awesome/css/font-awesome.min.css'

const showLoginModal = ref(false)

const closeLoginModal = () => {
  showLoginModal.value = false
}
</script>