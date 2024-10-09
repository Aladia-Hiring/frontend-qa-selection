<template>
  <div class="bg-black w-full min-h-screen flex text-white">
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <div
      class="border-2 m-auto my-28 w-[414px] flex flex-col p-5 gap-6 text-center bg-black pt-12"
    >
      <div class="flex py-6 ite gap-6 border-white border-2">
        <div>
          <img
            class="w-28"
            src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
            alt=""
          />
        </div>
        <div class="w-48 text-left">
          <div>Welcome to Aladia,</div>
          <div>Create or access your account from here</div>
        </div>
      </div>
      <div>Enter your email</div>
      <div class="px-2">
        <div class="absolute mx-3 my-2">
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m3 5v-.75c-.41421 0-.75.33579-.75.75zm18 0h.75c0-.41421-.3358-.75-.75-.75zm-18 .75h18v-1.5h-18zm17.25-.75v12h1.5v-12zm-1.25 13.25h-14v1.5h14zm-15.25-1.25v-12h-1.5v12zm1.25 1.25c-.69036 0-1.25-.5596-1.25-1.25h-1.5c0 1.5188 1.23122 2.75 2.75 2.75zm15.25-1.25c0 .6904-.5596 1.25-1.25 1.25v1.5c1.5188 0 2.75-1.2312 2.75-2.75z"
              fill="#292929"
            />
            <path
              d="m3 5 9 9 9-9"
              stroke="#292929"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <input type="email" class="py-2 rounded-sm w-full text-black px-10" />
      </div>
      <div class="px-2">
        <button class="w-full bg-gray-800 p-2">Enter</button>
      </div>
      <div class="px-2">Or</div>
      <div class="px-2">
        <button class="flex items-center px-10 border w-full">
          <img class="w-10" src="../../img/google.png" /> Continue with Google
        </button>
      </div>
      <div class="px-2">
        <button class="flex items-center px-10 border w-full">
          <img class="w-10" src="../../img/facebook.png" /> Continue with
          Facebook
        </button>
      </div>
      <div class="px-2">
        <button class="flex items-center px-10 border w-full">
          <img class="w-8 py-1" src="../../img/apple.png" />Continue with Apple
        </button>
      </div>
      <div>Terms and Conditions</div>
    </div>
  </div>
</template>
