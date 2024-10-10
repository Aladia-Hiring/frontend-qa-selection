import type { Meta, StoryObj } from '@storybook/vue3'

import Signup from '../pages/auth/signup.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Aladia/Signup',
  component: Signup,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Signup>

export default meta
type Story = StoryObj<typeof meta>

export const AladiaSignupStory: Story = {
  args: {},
}
