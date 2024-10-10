import Button from './Button.vue';


const meta = {
  title:'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    buttonClass: 'w-full py-2 text-white bg-gradient-to-r from-gray-950 to-black text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300',
  },
}

export default meta;

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />',
});


export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

