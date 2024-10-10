<template>
  <Form
    class="frombox"
    @submit="handleSubmit(submitForm($event))"
    :validation-schema="validationSchema"
  >
    <label for="email">Enter your email</label>
    <div class="inputBox">
      <Input />
      <div class="icon">
        <i class="fa-solid fa-envelope" />
      </div>
    </div>
    <div class="error">
      <ErrorMessage name="email" />
    </div>
    <Button>Enter</Button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email"),
});

const submitForm = (values) => {
  console.log("Form submitted:", values);
};

const { handleSubmit } = useForm({
  validationSchema,
});
</script>

<style>
.frombox {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
}
.inputBox {
  position: relative;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(87, 87, 87);
}

.error {
  color: red;
  font-size: 12px;
}

label {
  color: white;
  display: block;
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>
