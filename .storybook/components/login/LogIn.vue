<script setup>
import Button from "../button/Button.vue";
import FedButton from "../button/FedButton.vue";
import Link from "../button/Link.vue";
import LoginHeader from "../header/LoginHeader.vue";
import Text from "../text/Text.vue";
import TextInputWithIcon from "../textinput/TextInputWithIcon.vue";
</script>

<template>
  <div
    class="fixed flex flex-col items-center justify-center bg-black text-white shadow-lg elevation-10 border-2 border-white/10 rounded-lg min-w-96 p-4"
  >
    <LoginHeader />

    <div class="flex flex-col gap-4 w-full items-center my-4">
      <Text text="Enter you email" size="lg" />
      <TextInputWithIcon placeholder="Email" />
      <Button label="Enter" />
    </div>

    <div class="flex items-center justify-center w-full">
      <Text text="Or" />
    </div>

    <div class="my-4 flex w-full flex-col gap-4 items-center">
      <FedButton name="Google" />
      <FedButton name="Facebook" />
      <FedButton name="Apple" />
    </div>
    <Link text="Terms and Conditions" />
  </div>
</template>
