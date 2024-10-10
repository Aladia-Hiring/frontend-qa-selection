// src/stories/Card.stories.js
import Card from '../pages/card.vue';

export default {
  title: 'Example/Card', // Title for your storybook
  component: Card, // Component to use in Storybook
  argTypes: {
    bgColor: { control: 'color' } // Control for selecting background color in the Storybook UI
  }
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />'
});

// Create different variations of the Card component
export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  description: 'This is the default card description.',
  bgColor: '#fff'
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary Card',
  description: 'This is a primary card with a blue background.',
  bgColor: '#007bff'
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  title: 'Custom Background',
  description: 'This card has a custom background color.',
  bgColor: '#f0f0f0'
};
