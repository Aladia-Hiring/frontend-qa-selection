<template>
    <div v-if="isPopupVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div class="relative z-10 h-full p-5 text-13 border popup-content">
        <div class="pt-8">
          <div class="relative flex h-32 justify-between overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6">
            <div class="gradient absolute inset-0 opacity-[0.15]"></div>
            <div class="relative flex w-full justify-between transition-all duration-300 opacity-100">
              <img src="../../public/image.png" class="h-20 w-20 object-cover" />
              <div>
                <div class="mb-2 text-base font-semibold text-white">Welcome to Aladia,</div>
                <div class="text-white/70">Create or access your <br /> account from here</div>
              </div>
            </div>
            <div class="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0">
              <i class="fa-solid fa-spinner animate-spin text-xs"></i>
            </div>
          </div>
          <div class="mb-6 text-center text-white">Enter your email</div>
          <div class="mb-6 flex flex-col items-center px-4">
            <div class="group relative mb-8 flex h-10 w-full rounded transition-all bg-white">
              <div class="flex w-10 items-center justify-center text-xl">
                <i class="fa-solid fa-envelope text-base text-black/70"></i>
              </div>
              <input
                maxlength="100"
                class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all"
                autocomplete="off"
                type="text"
              />
              <div class="pointer-events-none absolute left-10 top-[0.65rem] origin-left text-sm text-black/50 transition-all scale-100">
                Email Address
              </div>
            </div>
            <div class="relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border-white/100 bg-black text-center text-sm pointer-events-none opacity-70 mb-6 border">
              <div class="gradient absolute inset-0 opacity-50"></div>
              <div class="text-white" @click="signUp">Enter</div>
            </div>
            <div class="w-full transition-all duration-300">
              <div class="mb-6 flex items-center justify-between gap-4">
                <div class="h-[1px] w-40 bg-gradient-to-r from-white/0 to-white"></div>
                <div class="text-white">Or</div>
                <div class="h-[1px] w-40 bg-gradient-to-r from-white to-white/0"></div>
              </div>
              <div class="mb-8 flex w-full flex-col gap-4">
                <div class="flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95">
                  <img
                    src="data:image/svg+xml,%3csvg%20width='50'%20height='50'%20viewBox='0%200%2050%2050'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.4284%2020.9199H43.7503V20.8334H25.0003V29.1667H36.7743C35.0566%2034.0178%2030.441%2037.5001%2025.0003%2037.5001C18.0972%2037.5001%2012.5003%2031.9032%2012.5003%2025.0001C12.5003%2018.097%2018.0972%2012.5001%2025.0003%2012.5001C28.1868%2012.5001%2031.0857%2013.7022%2033.293%2015.6657L39.1857%209.773C35.4649%206.30529%2030.4878%204.16675%2025.0003%204.16675C13.4951%204.16675%204.16699%2013.4949%204.16699%2025.0001C4.16699%2036.5053%2013.4951%2045.8334%2025.0003%2045.8334C36.5055%2045.8334%2045.8337%2036.5053%2045.8337%2025.0001C45.8337%2022.1408%2045.8823%2021.3614%2045.8961%2020.9376C45.9184%2020.1399%2045.4284%2020.9199%3c/path%3e%3c/svg%3e"
                    alt="google"
                    class="h-4 w-4"
                  />
                  Continue with Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-0 left-0 h-full w-full cursor-pointer opacity-50"
        @click="togglePopup"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isPopupVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      signUp() {
        // Handle sign-up logic here
      },
      togglePopup() {
        this.$emit('toggle-popup');
      },
    },
  };
  </script>
  