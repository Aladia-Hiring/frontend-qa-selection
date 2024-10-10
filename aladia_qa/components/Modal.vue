<template>
    <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50" @click="$emit('close')">
        <div class="relative flex h-[40rem] w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 backdrop-blur transition-all duration-300"
            @click.stop>
            <GradientBorder />
            <div class="relative z-10 h-full p-5 text-sm">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import GradientBorder from './GradientBorder.vue'
defineEmits(['close'])
</script>