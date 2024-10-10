import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: { Button },
  argTypes: {
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
  label: "Primary",
  onClick: () => console.log("Primary button clicked"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  onClick: () => console.log("Secondary button clicked"),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary",
  onClick: () => console.log("Tertiary button clicked"),
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger",
  onClick: () => console.log("Danger button clicked"),
};
