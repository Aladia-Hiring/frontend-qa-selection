<template>
    <input
      :type="type"
      :placeholder="placeholder"
      class="w-full p-2 pl-10 border border-white bg-white text-black rounded focus:outline-none"
    />
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String
    }
  }
  </script>
  