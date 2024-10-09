import SignUpButton from '../components/SignupButton.vue';

export default {
  title: 'Components/SignUpButton',
  component: SignUpButton,
};

const Template = (args, { argTypes }) => ({
  components: { SignUpButton },
  props: Object.keys(argTypes),
  template: '<SignUpButton v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Sign Up',
  onClick: () => alert('Sign Up clicked!'),
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Register',
  onClick: () => alert('Register clicked!'),
};
