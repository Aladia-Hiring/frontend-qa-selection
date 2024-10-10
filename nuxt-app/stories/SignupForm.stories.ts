// DynamicForm.stories.js

import DynamicForm from "../components/SingupForm.vue";  // Ensure the path is correct

export default {
  title: 'Organisms/DynamicForm',  // Categorizing under "Organisms"
  component: DynamicForm,
  argTypes: {
    name: { control: 'text', description: 'Name of the user' },
    surname: { control: 'text', description: 'Surname of the user' },
    email: { control: 'text', description: 'Email of the user' },
    password: { control: 'password', description: 'Password of the user' },
    confirmPassword: { control: 'password', description: 'Confirmation of the password' },
    termsAccepted: { control: 'boolean', description: 'Whether the terms are accepted' },
    onSubmit: { action: 'submit', description: 'Form submission handler' },
  },
};

// Default template for DynamicForm stories
const Template = (args, { argTypes }) => ({
  components: { DynamicForm },
  setup() {
    // Create reactive properties using Vue's ref()
    return { args };
  },
  template: '<DynamicForm v-bind="args" @submit="args.onSubmit" />',
});

// Default story with empty form fields
export const Default = Template.bind({});
Default.args = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
};

// Pre-filled form story
export const PreFilled = Template.bind({});
PreFilled.args = {
  name: 'John',
  surname: 'Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  confirmPassword: 'password123',
  termsAccepted: true,
};

// Form with invalid password confirmation
export const InvalidPasswordConfirmation = Template.bind({});
InvalidPasswordConfirmation.args = {
  name: 'John',
  surname: 'Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  confirmPassword: 'wrongpassword',  // Invalid confirmation
  termsAccepted: true,
};

// Form where terms are not accepted
export const WithoutTermsAccepted = Template.bind({});
WithoutTermsAccepted.args = {
  name: 'John',
  surname: 'Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  confirmPassword: 'password123',
  termsAccepted: false,  // Form cannot be submitted
};
