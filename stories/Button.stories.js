// components/Button.stories.js
import Button from "../.storybook/components/Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: { control: "text" },
    label: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  type: "primary",
};
