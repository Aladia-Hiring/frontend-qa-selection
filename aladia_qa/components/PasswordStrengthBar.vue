<template>
    <div class="flex h-4 w-full items-center justify-between text-xs mb-2">
        <div></div>
        <div class="h-1.5 w-36 rounded bg-[#4e4e4e]">
            <div class="h-full rounded transition-all duration-300" :style="{ width: strength + '%' }"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    strength: {
        type: Number,
        default: 0,
    },
})
</script>