<!-- components/organisms/Header.vue -->
<template>
    <header class="text-white p-4 flex bg-black justify-center md:justify-end items-center">
      <div class="md:w-1/2 flex justify-between items-center">
        <div class="relative mx-4">
          <input
            type="text"
            placeholder="Search courses..."
            class="w-full text-sm p-2 pl-10 border-b border-white bg-transparent text-white focus:outline-none focus:border-blue-500 transition duration-300"
          />
          <font-awesome-icon
            icon="search"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
          />
        </div>
        <div @click="$emit('toggle-modal')" class="flex items-center gap-1.5 pr-4">
          <div
            class="group relative shrink-0 cursor-pointer overflow-hidden rounded border px-3 py-2 text-sm leading-none transition-all hover:border-transparent active:scale-95"
          >
            <div
              class="absolute inset-0 flex items-center justify-center transition-all duration-200 scale-0 group-hover:scale-100"
            >
              <div class="w-full h-full bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
            </div>
            <div class="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-black">
              <font-awesome-icon icon="user-plus" class="mr-1" />
              <span>Join Us</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>