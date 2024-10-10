// FormField.stories.js

import FormField from '~/components/FormField.vue';

export default {
  title: 'Molecules/FormField',  // Follow the Atomic Design structure here
  component: FormField,
  argTypes: {
    label: { control: 'text', description: 'Label for the input field' },
    placeholder: { control: 'text', description: 'Placeholder for the input field' },
    icon: { control: 'text', description: 'Optional icon to be shown in the input field' },
    modelValue: { control: 'text', description: 'Input field value' },
    inputClass: { control: 'text', description: 'CSS classes for input styling' },
  },
};

// Default story: basic input field with placeholder
const Template = (args) => ({
  components: { FormField },
  setup() {
    return { args };
  },
  template: '<FormField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username',
  icon: '../assets/user.png',
  modelValue: '',
};

// Story: with pre-filled value
export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  icon: '../assets/message.png',
  modelValue: 'example@mail.com',
};

// Story: without icon
export const NoIcon = Template.bind({});
NoIcon.args = {
  label: 'Password',
  placeholder: 'Enter your password',
  modelValue: '',
};
