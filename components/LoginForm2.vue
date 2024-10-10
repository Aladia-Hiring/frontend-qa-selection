<template>
  <div class="background">
    <div class="login-container">
      <div class="login-card">
        <div class="form-wrapper">
          <div class="pointer-events-none absolute inset-0 opacity-70">
            <div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div>
            <div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div>
            <div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div>
            <div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div>
          </div>
          <div class="relative z-10 h-full p-5 text-13">
            <div class="header">
              <div class="next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95">
                <div class="inline-flex items-center justify-center pt-0.5 rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" class="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                    <path class="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" stroke-width="1.5" stroke-linecap="round"></path>
                  </svg>
                </div>
                Back to Log in
              </div>
            </div>
            <div class="flex flex-col items-center px-4">
              <div class="profile-upload mb-4 flex w-full items-center gap-6">
                <div class="profile-image-container relative h-24 w-24 rounded border transition-all border-white/20 hover:border-white">
                  <input type="file" accept="image/*" class="absolute inset-0 opacity-0 cursor-pointer" @change="handleFileUpload" ref="fileInput" />
                  <div @click="triggerFileInput" class="image-wrapper relative cursor-pointer">
                    <img :src="imageUrl || defaultLogo" class="upload absolute inset-0 h-full w-full rounded object-cover" />
                  </div>
                </div>
                <div class="profile-text">
                  <div class="text-bold">Nice to meet you,</div>
                  <div class="text-xs">Upload a profile picture <br /> and complete your <br /> presentation</div>
                </div>
              </div>
              <div class="terms-accept mb-4 flex items-center gap-2">
                <div class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white">
                  <i class="fa-solid fa-check tex-sm" style="display: none;"></i>
                </div>
                <div class="text-xs"> I accept <span class="underline"> Terms &amp; Conditions </span> and <span class="underline"> Privacy Policy </span></div>
              </div>
              <div class="mb-4 text-center text-xs">Enter your details</div>
              <div class="input-group relative mb-6 flex h-10 w-full rounded bg-white">
                <div class="flex w-10 items-center justify-center text-xl">
                  <i class="fa-solid fa-user text-base text-black/70"></i>
                </div>
                <input maxlength="100" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all" autocomplete="off" type="text" placeholder="Name" />
              </div>
              <div class="input-group relative mb-6 flex h-10 w-full rounded bg-white">
                <div class="flex w-10 items-center justify-center text-xl">
                  <i class="fa-solid fa-user text-base text-black/70"></i>
                </div>
                <input maxlength="100" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all" autocomplete="off" type="text" placeholder="Surname" />
              </div>
              <div class="input-group relative mb-6 flex h-10 w-full rounded bg-[#A8A8A8]">
                <div class="flex w-10 items-center justify-center text-xl">
                  <i class="fa-solid fa-envelope text-base text-black/70"></i>
                </div>
                <input disabled maxlength="100" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all" autocomplete="off" type="text" placeholder="Email" />
              </div>
              <div class="input-group relative mb-1 flex h-10 w-full rounded bg-white">
                <div class="flex w-10 items-center justify-center text-xl">
                  <i class="fa-solid fa-key text-base text-black/70"></i>
                </div>
                <input maxlength="100" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none" autocomplete="off" type="password" placeholder="Password" />
                <i class="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye-slash"></i>
              </div>
              <div class="flex h-4 w-full items-center justify-between text-xs mb-2">
                <div></div>
                <div class="h-1.5 w-36 rounded bg-[#4e4e4e]">
                  <div class="h-full rounded transition-all duration-300 w-0"></div>
                </div>
              </div>
              <div class="input-group relative mb-6 flex h-10 w-full rounded bg-white">
                <div class="flex w-10 items-center justify-center text-xl">
                  <i class="fa-solid fa-key text-base text-black/70"></i>
                </div>
                <input maxlength="100" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none" autocomplete="off" type="password" placeholder="Confirm Password" />
                <i class="fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90 fa-eye-slash"></i>
              </div>
              <div class="submit-button relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm pointer-events-none opacity-70 mb-2">
                <div class="gradient absolute inset-0 opacity-50"></div>
                <div> Enter </div>
              </div>
              <div class="cursor-pointer text-center text-white/40"> Terms &amp; Conditions </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultLogo from '@/assets/logo.png'; // Adjust the path as necessary

export default {
  name: 'Login2',
  data() {
    return {
      imageUrl: null, // State to hold the uploaded image URL
      defaultLogo: defaultLogo // Set the path for the default logo
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result; // Set the image URL to display
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click(); // Trigger the file input click
    }
  }
};
</script>

<style scoped src="../styles/login2.css"></style>