<template>
    <div :class="[
        'group relative flex h-10 w-full rounded transition-all',
        error ? 'border border-red-500 bg-red-100' : 'bg-white mb-6',
    ]">
        <div class="flex w-10 items-center justify-center text-xl">
            <i class="fa fa-solid fa-key text-base" :class="error ? 'text-red-500' : 'text-black/70'"></i>
        </div>
        <input :maxlength="maxlength" class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none"
            :autocomplete="autocomplete" :type="inputType" v-model="internalValue" :placeholder="placeholder" />
        <i :class="[
            'fa fa-solid absolute right-3 top-[0.7rem] scale-100 cursor-pointer text-base transition-all active:scale-90',
            toggleIcon,
            error ? 'text-red-500' : 'text-black/50',
        ]" @click="togglePasswordVisibility"></i>
    </div>
    <div v-if="error && errorMessage" class="text-red-500 text-xs mt-1 self-start">
        {{ errorMessage }}
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    maxlength: {
        type: Number,
        default: 100,
    },
    autocomplete: {
        type: String,
        default: 'new-password',
    },
    placeholder: String,
    modelValue: String,
    error: {
        type: Boolean,
        default: false,
    },
    errorMessage: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['update:modelValue'])

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

const inputType = ref('password')
const toggleIcon = ref('fa-eye-slash')

const togglePasswordVisibility = () => {
    if (inputType.value === 'password') {
        inputType.value = 'text'
        toggleIcon.value = 'fa-eye'
    } else {
        inputType.value = 'password'
        toggleIcon.value = 'fa-eye-slash'
    }
}
</script>