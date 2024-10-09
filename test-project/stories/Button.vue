<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    const classes = computed(() => [
      'btn',
      props.primary ? 'btn-primary' : 'btn-secondary',
      `btn-${props.size}`,
    ]);

    const style = computed(() => ({
      backgroundColor: props.backgroundColor,
    }));

    const onClick = () => {
      emit('click');
    };

    return {
      classes,
      style,
      onClick,
    };
  },
};
</script>

<style scoped>
.btn {
  /* Add your button styles here */
}
.btn-primary {
  /* Add your primary button styles here */
}
.btn-secondary {
  /* Add your secondary button styles here */
}
.btn-small {
  /* Add your small button styles here */
}
.btn-medium {
  /* Add your medium button styles here */
}
.btn-large {
  /* Add your large button styles here */
}
</style>