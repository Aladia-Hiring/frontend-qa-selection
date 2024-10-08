import Login from '../Login.vue'; // Correct the import path

export default {
  title: 'Login',
  component: Login,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
// export const Stored = {
//   render: (args) => ({
//     components: { Login },
//     setup() {
//       return { args };
//     },
//     template: '<Login v-bind="args" />',
//   }),
//   args: {
//     //👇 The args you need here will depend on your component
//     email: "Email"
//   },
// };

// Default export for Storybook
// export default {
//   title: 'Stories/Login',
//   component: Login,
//   argTypes: {
//     onSubmit: { action: 'submitted' },
//     username: { control: 'text' },
//     password: { control: 'text' },
//     errorMessage: { control: 'text' },
//   },
// };

// // Template
const Template = (args) => defineComponent({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<Login v-bind="args" @submit="args.onSubmit" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {email: "Email"};

// Filled story
// export const Filled = Template.bind({});
// Filled.args = {
//   username: 'exampleUser',
//   password: 'password123',
// };

// // Submitting story
// export const Submitting = Template.bind({});
// Submitting.args = {
//   username: 'submittingUser',
//   password: 'password456',
//   errorMessage: 'Submitting...',
// };

// Error story
// export const Error = Template.bind({});
// Error.args = {
//   username: 'errorUser',
//   password: 'password789',
//   errorMessage: 'Invalid credentials',
// };