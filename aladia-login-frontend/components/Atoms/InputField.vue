<template>
  <div class="relative mb-4">
    <label :for="id" class="sr-only">{{ label }}</label>
    <div class="flex items-center">
      <span v-if="icon" class="absolute left-3 text-gray-500">
        <img :src="icon" alt="icon" class="w-5 h-5" />
      </span>
      <input
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        :type="currentInputType" 
        @input="handleInput"
        :class="[
          'w-full pl-10 px-4 py-2',
          'bg-white text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500',
          validationError ? 'border-red-500' : 'border-gray-700'
        ]"
      />
      <span v-if="props.inputType === 'password'" class="absolute right-3 cursor-pointer" @click="togglePasswordVisibility">
        <img :src="showPassword ? 'path_to_eye_icon' : 'path_to_eye_slash_icon'" alt="toggle visibility" class="w-5 h-5" />
      </span>
    </div>
    <p v-if="validationError" class="text-red-500 text-xs">{{ validationError }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Enter here',
  },
  label: {
    type: String,
    default: '',
  },
  icon: String,
  inputType: {
    type: String,
    required:true
  },
  error: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const showPassword = ref(false);

// Track validation errors
const validationError = ref('');

// Computed property for handling password visibility
const currentInputType = computed(() => {
  return props.inputType === 'password' && !showPassword.value ? 'password' : 'text';
});

// Email validation rule
const isValidEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

function isValidPassword(password) {
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Password must contain at least one special character.";
  }

  return "";
}

const handleInput = (event) => {
  const value = event.target.value;
  emit('update:modelValue', value);
  console.log(props.inputType)
  if (props.inputType === 'email') {
    validationError.value = isValidEmail(value) ? '' : 'Invalid email format';
  }else if (props.inputType == "text"){
    validationError.value = value.length > 2 ? '' : 'name must be at least 3 character';
  }else if (props.validationError == "password"){
    console.log("password:", isValidPassword(value))
    validationError.value = isValidPassword(value)

  }
};


watch(() => props.modelValue, (newValue) => {
  if (props.inputType === 'email') {
    validationError.value = isValidEmail(newValue) ? '' : 'Please enter a valid email address';
  }else if (props.inputType == "text"){
    validationError.value = newValue.length > 2 ? '' : 'name must be at least 3 character';
  }else if (props.inputType == "password"){
    console.log("password:", isValidPassword(newValue))
    validationError.value = isValidPassword(newValue)

  }})

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>
