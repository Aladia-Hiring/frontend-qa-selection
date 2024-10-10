import TextInput from '~/components/TextInput.vue';

export default {
  title: 'Atoms/TextInput',  // Following Atomic Design, placing TextInput under Atoms
  tags:['autodocs'],
  component: TextInput,
  argTypes: {
    label: { control: 'text', description: 'Label for the input field' },
    id: { control: 'text', description: 'ID for the input field' },
    placeholder: { control: 'text', description: 'Placeholder for the input field' },
    type: { 
      control: { type: 'select', options: ['text', 'password', 'email', 'number'] },
      description: 'Type of input field',
    },
    icon: { control: 'text', description: 'Icon URL to display inside the input field' },
    value: { control: 'text', description: 'The input value' },
    customClass: { control: 'text', description: 'Custom class for the input wrapper' },
    inputClass: { control: 'text', description: 'CSS class for the input element' },
    onInput: { action: 'input', description: 'Emits input event' },
  },
};

// Default template for TextInput stories
const Template = (args) => ({
  components: { TextInput },
  setup() {
    return { args };
  },
  template: '<TextInput v-bind="args" />',
});

// Default TextInput story
export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  id: 'username',
  placeholder: 'Enter your username',
  type: 'text',
  value: '',
  inputClass: 'padding--x-20 padding--x-10',
};

// Story: With Icon
export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Search',
  id: 'search',
  placeholder: 'Search...',
  type: 'text',
  icon: '../assets/user.png', // Example icon URL
  value: '',
  inputClass: 'padding--x-20 padding--x-10',
};

// Story: Password Input
export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  id: 'password',
  placeholder: 'Enter your password',
  type: 'password',
  value: '',
  inputClass: 'padding--x-20 padding--x-10',
};

// Story: With Custom Class
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  label: 'Email',
  id: 'email',
  placeholder: 'Enter your email',
  type: 'email',
  value: '',
  customClass: 'custom-input-wrapper-class',
  inputClass: 'padding--x-20 padding--x-10',
};
