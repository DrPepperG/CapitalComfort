<script setup lang="ts">
    import { colors } from '~~/composables/colors';

    const props = defineProps({
        color: {
            type: String,
            default: 'black'
        }
    })

    const color = colors[props.color]
</script>

<template>
    <div
        class="rounded-lg p-6"
        :class="color"
    >
        <slot />
    </div>
</template>
