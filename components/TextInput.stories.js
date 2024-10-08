
import TextInput from './TextInput.vue';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { TextInput },
  setup() {
    return { args };
  },
  template: '<TextInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Type here...',
};