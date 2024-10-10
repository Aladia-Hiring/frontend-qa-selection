<template>
    <Login
      v-model:name="name"
      v-model:surname="surname"
      v-model:emailValue="emailValue"
      v-model:password="password"
      v-model:confirm="confirm"
    :emailValue="emailValue"
    @update:emailValue="updateEmailValue"
    />
</template>

<script>
import Login from "./components/Login.vue"

export default {
  components: {
    Login,
  },
  data() {
    return {
      name: '',
      surname: '',
      emailValue: '',
      password: '',
      confirm: '',
    };
  },
  methods: {
    updateEmailValue(newEmail) {
      this.emailValue = newEmail; // Update local state when child emits event
    },
}
};
</script>
