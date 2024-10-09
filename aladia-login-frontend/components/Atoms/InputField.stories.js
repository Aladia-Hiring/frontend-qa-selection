import InputField from './InputField.vue';

export default {
  title: 'Atoms/InputField',
  component: InputField,
};

const Template = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: '<InputField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  id: 'email',
  label: 'Email',
  placeholder: 'Email Address',
};
