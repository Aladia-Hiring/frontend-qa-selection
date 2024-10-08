<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-900">
      <div class="bg-black bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-md">
        <div class="text-center mb-6">
          <img src="/assets/images/aladia-logo.jpg" alt="Logo" class="mx-auto mb-4 w-16 h-16" />
          <h1 class="text-xl text-white">Welcome to Aladia</h1>
          <p class="text-sm text-gray-400">Create or access your account from here</p>
        </div>
        
        <!-- Email input -->
        <div class="mb-4">
          <label for="email" class="sr-only">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            class="w-full px-4 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
  
        <!-- Enter button -->
        <div class="mb-6">
          <button
            type="button"
            class="w-full py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Enter
          </button>
        </div>
  
        <p class="text-center text-gray-400 mb-4">Or</p>
  
        <!-- Social media buttons -->
        <div class="space-y-3">
          <button class="flex items-center justify-center w-full py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition duration-300">
            <img src="/assets/images/google.jpeg" alt="Google" class="w-6 h-6 mr-2" />
            Continue with Google
          </button>
  
          <button class="flex items-center justify-center w-full py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition duration-300">
            <img src="/assets/images/facebook.png" alt="Facebook" class="w-6 h-6 mr-2" />
            Continue with Facebook
          </button>
  
          <button class="flex items-center justify-center w-full py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition duration-300">
            <img src="/assets/images/apple.png" alt="Apple" class="w-6 h-6 mr-2" />
            Continue with Apple
          </button>
        </div>
  
        <!-- Terms and Conditions -->
        <div class="mt-6 text-center">
          <a href="#" class="text-gray-400 text-sm hover:text-gray-300">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </template>
  