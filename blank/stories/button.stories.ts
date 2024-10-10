import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '../components/Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Aladia/Button',
  component: Button,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonStory: Story = {
  args: {},
}