import type { Meta, StoryObj } from '@storybook/vue3'

import Login from "../components/Login.vue"


const meta = {
  title: 'Login',
  component: Login,

} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const NuxtWelcomeStory: Story = {
  args: {
    email: ''
  },
}
