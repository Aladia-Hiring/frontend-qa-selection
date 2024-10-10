import type { Meta, StoryObj } from '@storybook/vue3'

import Login from '../pages/auth/login.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Aladia/Login',
  component: Login,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const AladiaLoginStory: Story = {
  args: {},
}
