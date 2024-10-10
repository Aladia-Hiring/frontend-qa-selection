<template>
    <div class="flex items-center gap-2 mb-4">
        <div class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white"
            @click="toggleCheck">
            <i class="fa fa-solid fa-check text-sm" v-show="checked"></i>
        </div>
        <div class="text-xs text-white/70">
            I accept
            <span class="underline text-white">Terms &amp; Conditions</span> and
            <span class="underline text-white">Privacy Policy</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:checked'])

const checked = ref(false)

const toggleCheck = () => {
    checked.value = !checked.value
    emit('update:checked', checked.value)
}
</script>