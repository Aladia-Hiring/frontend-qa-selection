import { defineComponent } from "vue";

import Input from "../../components/atoms/Input.vue";

export default {
  title: "atoms/Input",
  component: Input,
  argTypes: {
    type: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    name: { control: { type: "text" } },
  },
};

const Template = (args) =>
  defineComponent({
    setup() {
      return { args };
    },
    template: `
    <Field v-bind="args" />
  `,
  });

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  as: "input",
  type: "text",
  name: "email",
  placeholder: "Email Address",
};

// You can add more stories for different states of the input, such as error, disabled, etc.
export const DisabledInput = Template.bind({});
DisabledInput.args = {
  as: "input",
  type: "text",
  name: "email",
  placeholder: "Email Address",
  disabled: true,
};
