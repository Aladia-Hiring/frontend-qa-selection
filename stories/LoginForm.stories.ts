import type { Meta, StoryObj } from '@storybook/vue3';
import { userEvent, within, expect } from '@storybook/test';
import LoginForm from '../components/molocules/LoginForm.vue';
const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
  render: () => ({
    components: { LoginForm },
    template: `<LoginForm />`,
  }),
};

export const FilledForm: Story = {
  render: () => ({
    components: { LoginForm },
    template: `<LoginForm />`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for the elements to be available in the DOM
    await new Promise((resolve) => setTimeout(resolve, 300)); // Wait for a short period

    // Log the current HTML structure for debugging
    console.log(canvasElement.innerHTML);

    // Check if the elements can be found
    const emailInput = canvas.getByTestId('email');
    const passwordInput = canvas.getByTestId('password');
    const button = canvas.getByRole('button');

    // Log to verify elements found
    console.log('Email input found:', emailInput);
    console.log('Password input found:', passwordInput);
    console.log('Login button found:', button);

    // Simulate interactions with the component
    await userEvent.type(emailInput, 'email@provider.com');
    await userEvent.type(passwordInput, 'a-random-password');
    await userEvent.click(button);

    // Assert the success message
    await expect(
      canvas.getByText(
        'Everything is perfect. Your account is ready and we should probably get you started!'
      )
    ).toBeInTheDocument();
  },
};
