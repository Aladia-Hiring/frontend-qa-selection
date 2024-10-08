<template>
    <Button :btnClass="btnClass" :click="click">
      <img :src="iconSrc" class="inline mr-2" />
      {{ label }}
    </Button>
  </template>
  
  <script>
  import Button from '@/components/atoms/Button.vue';
  
  export default {
    components: { Button },
    props: {
      iconSrc: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      btnClass: {
        type: String,
        default: 'w-full p-2 rounded-md bg-gray-800 text-white flex justify-center items-center',
      },
      click: {
        type: Function,
        default: () => {},
      },
    },
  };
  </script>
  