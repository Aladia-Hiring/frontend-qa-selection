import type { Meta, StoryObj } from '@storybook/vue3';
import Login from "../components/Login.vue";


const meta = {
  title: 'Login/Password',
  component: Login,
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Valid: Story = {
  args: {
    emailValue: "someone@example.com",
    name: "someone",
    surname: "some",
    password: "Someone1!",
    confirm: "Someone1!",
  },
}

export const PasswordWeakLength: Story = {
  args: {
    emailValue: "someone@example.com",
    name: "someone",
    surname: "some",
    password: "Abc1!",
    confirm: "Abc1!",
  },
};

export const PasswordWeakUppercase: Story = {
  args: {
    emailValue: "someone@example.com",
    name: "someone",
    surname: "some",
    password: "abcde123!",
    confirm: "abcde123!",
  },
};

export const PasswordWeakNumber: Story = {
  args: {
    emailValue: "someone@example.com",
    name: "someone",
    surname: "some",
    password: "Abcdefg!",
    confirm: "Abcdefg!",
  },
};

export const PasswordWeakSpecial: Story = {
  args: {
    emailValue: "someone@example.com",
    name: "someone",
    surname: "some",
    password: "Abcdefg1",
    confirm: "Abcdefg1",
  },
};

export const PasswordMismatch: Story = {
  args: {
    emailValue: "someone@example.com",
    name: "someone",
    surname: "some",
    password: "Someone1!",
    confirm: "Someone12!",
  },
}
