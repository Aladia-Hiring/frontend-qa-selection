<template>
<form class="flex flex-col  m-4 justify-center gap-4">
<label class="text-white text-center">Enter your email</label>
<div class="relative flex align-center">
<input class="pl-10 pr-4 py-2  border w-[100vw]"
 type="text" placeholder="Email Address"/>
   <span class="absolute left-3 top-2.5 text-gray-500">
 
<Icon icon="mdi:email" :ssr="true" class=" w-5 h-5 " />
    </span>
    </div>
<input class="bg-[#202020] p-2   text-white" type="submit" value="Enter"/>
</form>
</template>
<script setup>
import { Icon } from '@iconify/vue';
</script>




