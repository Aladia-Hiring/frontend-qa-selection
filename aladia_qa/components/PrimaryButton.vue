<template>
  <button :class="[
    'relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm mb-6',
    {
      'pointer-events-none opacity-70': disabled,
    },
  ]" @click="handleClick">
    <div class="absolute inset-0 opacity-50"
      style="background: linear-gradient(15deg, #fff0 9.55%, #fff0 30.28%, #fff6, #fff0 41.58%, #fff0 59.02%, #fff 67.97%, #fff0 74.56%, #fff);">
    </div>
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <i class="fa fa-solid fa-spinner animate-spin text-xs"></i>
    </div>
    <div v-else class="relative z-10">
      <slot />
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const handleClick = () => {
  if (!props.disabled && !props.loading) {
    emit('click')
  }
}
</script>
