import LoginForm1 from '../../../components/molecules/LoginForm1.vue';

export default {
  title: 'components/LoginForm1',
  component: LoginForm1,
};

const Template = (args) => ({
  components: { LoginForm1 },
  setup() {
    return { args };
  },
  template: '<LoginForm1 v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
};