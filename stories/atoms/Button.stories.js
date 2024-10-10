import { fn } from "@storybook/test";
// import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "../../components/atoms/Button.vue";

export default {
  title: "atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
