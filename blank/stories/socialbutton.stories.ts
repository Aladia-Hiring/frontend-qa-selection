import type { Meta, StoryObj } from '@storybook/vue3'

import SocialButton from '../components/SocialButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Aladia/SocialButton',
  component: SocialButton,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof SocialButton>

export default meta
type Story = StoryObj<typeof meta>

export const SocialButtonStory: Story = {
  args: {},
}