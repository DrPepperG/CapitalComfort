<script setup lang="ts">
    import { colors } from '~~/composables/colors';

    const props = defineProps({
        color: {
            type: String,
            default: 'white'
        }
    })

    const color = colors[props.color]
</script>

<template>
    <div :class="[color, 'lg:py-10 p-6']">
        <div class="mx-auto container">
            <slot />
        </div>
    </div>
</template>
