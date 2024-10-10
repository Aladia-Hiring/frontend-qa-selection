<script setup>
import LoginHeader from "@components/header/LoginHeader.vue";
import Text from "@components/text/Text.vue";
import TextInputWithIcon from "@components/textinput/TextInputWithIcon.vue";
</script>

<template>
  <div class="bg-black">
    <LoginHeader />
    <Text text="Hello World" size="large" />
    <TextInputWithIcon
      icon="https://placehold.co/50x50"
      placeholder="Email"
      type="email"
    />
    <h1 class="text-red-500">Hello World</h1>

    <div></div>
  </div>
</template>

<style scoped></style>
