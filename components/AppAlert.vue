<script setup lang="ts">
    import { colors } from '~~/composables/colors';

    const props = defineProps({
        color: {
            type: String,
            default: 'red'
        }
    })

    const color = colors[props.color]
</script>

<template>
    <div :class="[color, 'text-center font-bold text-xl p-4 lg:mx-auto']">
        <slot />
    </div>
</template>
