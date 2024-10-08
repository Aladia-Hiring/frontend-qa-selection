import type{ Meta, StoryFn } from '@storybook/vue3';
import Button from '../Button.vue';
import type { ComponentPropsAndSlots } from '@storybook/vue3';

type StoryProps = ComponentPropsAndSlots<typeof Button>;

const meta: Meta<ComponentPropsAndSlots<typeof Button>> = {
    component: Button,
}

export default meta;

type Story = StoryFn<StoryProps>;

export const Primary: Story = () => ({})

// export default {
//   title: 'Components/Button',
//   component: Button,
//   argTypes: {
//     type: {
//       control: { type: 'select', options: ['primary', 'secondary', 'danger'] },
//     },
//     disabled: { control: 'boolean' },
//     click: { action: 'click' },
//   },
// } as Meta<typeof Button>;

// const Template: StoryFn<typeof Button> = (args) => ({
//   components: { Button },
//   setup() { 
//     return { args };
//   },
//   template: '<Button v-bind="args" @click="args.click">Button</Button>',
// });

// export const Primary = Template.bind({});
// Primary.args = {
//   type: 'primary',
//   disabled: false,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   type: 'secondary',
//   disabled: false,
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   type: 'danger',
//   disabled: false,
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   type: 'primary',
//   disabled: true,
// };