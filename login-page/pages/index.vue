<template>
  <div class="flex flex-col max-w-sm mx-auto h-[100vh] bg-black  border    rounded-ld shadow-lg">
   <Welcome/>
   <Form/>
   <Or/>
   <Social/>
   <Terms/>
  </div>
</template>
<script setup>
import Welcome from  '~/components/Welcome.vue';
import Form from  '~/components/Form.vue';
import Social from  '~/components/Social.vue';
import Terms from  '~/components/Terms.vue';
import Or from  '~/components/Or.vue';
</script>