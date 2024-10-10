<template>
    <div :class="[
        'group relative flex h-10 w-full rounded transition-all',
        error ? 'border border-red-500 bg-red-100' : 'bg-white  mb-6',
    ]">
        <div class="flex w-10 items-center justify-center text-xl">
            <i :class="[iconClass, error ? 'text-red-500' : 'text-black/70']"></i>
        </div>
        <input :maxlength="maxlength"
            class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all pl-2"
            :autocomplete="autocomplete" :type="type" :placeholder="placeholder" v-model="internalValue"
            @keyup.enter="$emit('keyup.enter')" :disabled="disabled" />
    </div>
    <div v-if="error && errorMessage" class="text-red-500 text-xs mt-1 self-start">
        {{ errorMessage }}
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    iconClass: String,
    maxlength: {
        type: Number,
        default: 100,
    },
    autocomplete: String,
    type: {
        default: 'text',
    },
    placeholder: String,
    modelValue: [String, Number],
    disabled: {
        type: Boolean,
        default: false,
    },
    error: {
        type: Boolean,
        default: false,
    },
    errorMessage: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue', 'keyup.enter'])

const internalValue = ref(props.modelValue)

watch(
    () => props.modelValue,
    (newValue) => {
        internalValue.value = newValue
    }
)

watch(internalValue, (newValue) => {
    emit('update:modelValue', newValue)
})
</script>