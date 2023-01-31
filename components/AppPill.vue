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
    <a
        :class="[color, 'rounded-lg px-2 font-bold text-2xl']"
        v-bind="$attrs"
        v-if="$attrs.href"
    >
        <slot />
    </a>

    <div :class="[color, 'rounded-lg px-2 font-bold text-2xl']" v-else>
        <slot />
    </div>
</template>
