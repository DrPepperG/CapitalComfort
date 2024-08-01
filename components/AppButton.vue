<template>
    <NuxtLink :class="[color, size]" v-bind="$attrs">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
import { colors } from '~~/composables/colors';

const props = defineProps({
    color: {
        type: String,
        default: 'white'
    },
    size: {
        type: String,
        default: 'regular'
    }
})

const size = {
    regular: 'text-center px-4 py-2 rounded-lg font-bold transition-colors ease-in-out duration-150 disabled:bg-gray-400 disabled:opacity-50',
    big: 'text-center w-full px-6 py-3 text-center rounded-lg text-3xl font-bold transition-colors ease-in-out duration-150 disabled:bg-gray-400 disabled:opacity-50'
}[props.size]

const color = colors[props.color]
</script>