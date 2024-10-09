<template> 
<div class="flex items-center justify-center">

  <div>
    <div class="flex justify-center space-x-2 mb-4">
      <input 
        type="text" 
        maxlength="1" 
        class="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      <input 
        type="text" 
        maxlength="1" 
        class="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      <input 
        type="text" 
        maxlength="1" 
        class="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      <input 
        type="text" 
        maxlength="1" 
        class="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      <input 
        type="text" 
        maxlength="1" 
        class="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
      <input 
        type="text" 
        maxlength="1" 
        class="w-10 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
    </div>

    <!-- "Didn't Receive?" Button -->
    <div class="text-center text-sm mb-4">
      <button class="text-white hover:underline">You didn't receive any mail?</button>
    </div>

    <!-- Enter Button -->
    <div class="mb-6 mt-4"> 
        <Button @click="handleSubmit">Enter</Button>
      </div>
  </div>
</div>

</template>

<script>
import Button from '../Atoms/Button.vue';

export default{
    name:"OtpReceive",
    components:{
        Button
    },
    data(){
        
    },
    methods:{
      handleSubmit(){
        this.$router.push({ path: '/authSuccess'});
      }
    }
}

</script>