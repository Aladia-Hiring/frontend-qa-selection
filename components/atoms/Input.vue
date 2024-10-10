<template>
  <span :class="`icon icon-${size}`" :style="{ color }">
    <svg v-if="type === 'home'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 3l10 9h-3v9h-6v-6h-4v6H5v-9H2l10-9z" />
    </svg>
    <svg v-if="type === 'user'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-10 1.67-10 5v2h20v-2c0-3.33-6.69-5-10-5z" />
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'medium',
    },
    color: {
      type: String,
      default: 'black',
    },
  },
};
</script>

<style scoped>
.icon {
  display: inline-block;
}
.icon-small {
  width: 16px;
  height: 16px;
}
.icon-medium {
  width: 24px;
  height: 24px;
}
.icon-large {
  width: 32px;
  height: 32px;
}
</style>