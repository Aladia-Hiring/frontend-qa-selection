import Button from './Button.vue';

export default {
  title: 'Atoms/Button',
  component: Button,
};

// Default Button
export const Default = () => ({
  components: { Button },
  template: '<Button>Login</Button>',
});

// Primary Variant
export const Primary = () => ({
  components: { Button },
  template: '<Button variant="primary">Primary Button</Button>',
});

// Secondary Variant
export const Secondary = () => ({
  components: { Button },
  template: '<Button variant="secondary">Secondary Button</Button>',
});

// Outline Variant
export const Outline = () => ({
  components: { Button },
  template: '<Button variant="outline">Outline Button</Button>',
});

// Large Button
export const Large = () => ({
  components: { Button },
  template: '<Button size="large">Large Button</Button>',
});

// Small Button
export const Small = () => ({
  components: { Button },
  template: '<Button size="small">Small Button</Button>',
});

// Example with Click Event
export const WithClickEvent = () => ({
  components: { Button },
  template: '<Button @click="handleClick">Click Me</Button>',
  methods: {
    handleClick() {
      alert('Button Clicked!');
    },
  },
});
