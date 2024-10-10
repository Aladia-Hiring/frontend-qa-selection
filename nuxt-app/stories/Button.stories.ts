import Button from '~/components/Button.vue';

export default {
  title: 'Atoms/Button',  // Placing the button under the Atoms section
  component: Button,
  argTypes: {
    size: { 
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Defines the size of the button',
    },
    disabled: { 
      control: 'boolean',
      description: 'Disables the button if true',
    },
    onClick: { action: 'click', description: 'Handles button click' },
  },
};

// Default button story
const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{ args.label }}</Button>',
});

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  disabled: false,
  label: 'Click Me',  // Using a slot for label
};

// Story: Small button
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  disabled: false,
  label: 'Small Button',
};

// Story: Large button
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  disabled: false,
  label: 'Large Button',
};

// Story: Disabled button
export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  disabled: true,
  label: 'Disabled Button',
};
