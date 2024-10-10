import type { Meta, StoryObj } from '@storybook/vue3'

import Login from "../components/Login.vue"



const meta = {
  title: 'Login/Email',
  component: Login,

} satisfies Meta<typeof Login>


export default meta
type Story = StoryObj<typeof meta>


export const Empty: Story = {
  args: {
    emailValue: "",
    name: "",
    surname: "",
    password: "",
    confirm: "",
  },
}

export const Valid: Story = {
  args: {
    emailValue: "someone@example.com",
    name: "someone",
    surname: "some",
    password: "someone1!",
    confirm: "someone1!",
  },
}


export const InvalidEmail: Story = {
  args: {
    emailValue: "someone",
    name: "someone",
    surname: "some",
    password: "someone1!",
    confirm: "someone1!",
  },
}





