import LoginCard from '../../../components/molecules/LoginCard.vue';

export default {
  title: 'Organisms/LoginCard',
  component: LoginCard,
};

const Template = (args) => ({
  components: { LoginCard },
  setup() {
    return { args };
  },
  template: '<LoginCard v-bind="args" />',
});

// Default Login Card
export const Default = Template.bind({});
Default.args = {};