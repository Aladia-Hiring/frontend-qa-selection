<script setup lang="ts">
import { Field } from "vee-validate";
</script>

<template>
  <Field
    as="input"
    class="input"
    type="text"
    name="email"
    placeholder="Email Address"
  />
</template>

<style>
.input {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid rgb(165, 165, 165);
  padding: 12px 0px 12px 40px;
  width: 100%;
  background-color: aliceblue;
}
</style>
