<script setup lang="ts">
    const props = defineProps({
        color: {
            type: String,
            default: 'red'
        }
    })

    const color = {
        red: 'bg-red-500 text-white',
        blue: 'bg-cc-blue text-white'
    }[props.color]
</script>

<template>
    <div :class="[color, 'text-center font-bold text-xl p-4 lg:mx-auto']">
        <slot />
    </div>
</template>
