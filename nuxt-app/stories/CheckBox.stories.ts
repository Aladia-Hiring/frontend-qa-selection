import Checkbox from '~/components/CheckBox.vue';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args">{{ args.label }}</Checkbox>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'I accept Terms & Conditions and Privacy Policy',
  modelValue: true,
};


export const Marked = Template.bind({})
Marked.args = {
  label: 'I don\'t accept Terms & Conditions and Privacy Policy',
  modelValue: false,
};

