<template>
    <div>
      <ProfilePictureUpload @image-uploaded="handleImageUpload" />
      <div class="mb-4 text-center text-xs">Enter your details</div>
      <InputField type="text" placeholder="Name">
        <template #icon>
          <i class="fa-solid fa-user text-base text-black/70"></i>
        </template>
        <template #label>Name</template>
      </InputField>
      <InputField type="text" placeholder="Surname">
        <template #icon>
          <i class="fa-solid fa-user text-base text-black/70"></i>
        </template>
        <template #label>Surname</template>
      </InputField>
      <InputField type="email" placeholder="Email" disabled>
        <template #icon>
          <i class="fa-solid fa-envelope text-base text-black/70"></i>
        </template>
        <template #label>Email</template>
      </InputField>
      <InputField type="password" placeholder="Password">
        <template #icon>
          <i class="fa-solid fa-key text-base text-black/70"></i>
        </template>
        <template #label>Password</template>
      </InputField>
      <InputField type="password" placeholder="Confirm Password">
        <template #icon>
          <i class="fa-solid fa-key text-base text-black/70"></i>
        </template>
        <template #label>Confirm Password</template>
      </InputField>
      <div class="mb-4 flex items-center gap-2">
        <input type="checkbox" id="terms" class="h-4 w-4 cursor-pointer" />
        <label for="terms" class="text-xs text-white/70">I accept <span class="underline text-white">Terms & Conditions</span> and <span class="underline text-white">Privacy Policy</span></label>
      </div>
      <Button @click="handleSubmit">Enter</Button>
      <div class="cursor-pointer text-center text-white/40">Terms & Conditions</div>
    </div>
  </template>
  
  <script>
  import ProfilePictureUpload from '@/components/molecules/ProfilePictureUpload.vue';
  import InputField from '@/components/atoms/InputField.vue';
  import Button from '@/components/atoms/Button.vue';
  
  export default {
    components: {
      ProfilePictureUpload,
      InputField,
      Button,
    },
    methods: {
      handleImageUpload(image) {
        // Handle the uploaded image
        console.log('Image uploaded:', image);
      },
      handleSubmit() {
        // Handle form submission
        console.log('Form submitted');
      },
    },
  };
  </script>
  