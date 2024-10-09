import LoginButton from '../components/LoginButton.vue';

export default {
  title: 'Components/LoginButton',
  component: LoginButton,
};

const Template = (args, { argTypes }) => ({
  components: { LoginButton },
  props: Object.keys(argTypes),
  template: '<LoginButton v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Login',
  onClick: () => alert('Login clicked!'),
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Sign In',
  onClick: () => alert('Sign In clicked!'),
};
