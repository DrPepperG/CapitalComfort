<script setup lang="ts">
import { colors } from '~~/composables/colors';

defineEmits(['click']);

const props = defineProps({
    color: {
        type: String,
        default: 'white'
    },
    size: {
        type: String,
        default: 'regular'
    },
    type: {
        type: String,
        default: 'link'
    }
});

const defaultCss = 'text-center rounded-lg font-bold transition-colors ease-in-out duration-150 disabled:bg-gray-400 disabled:opacity-50'
const size = {
    regular: 'px-4 py-2 font-bold',
    full: 'px-4 py-2 font-bold w-full',
    big: 'px-6 py-3 text-3xl font-bold',
    bigFull: 'px-6 py-3 text-3xl font-bold w-full'
}[props.size];

const color = colors[props.color];
</script>

<template>
    <NuxtLink
        :class="['cursor-pointer', defaultCss, size, color]"
        v-bind="$attrs"
        v-if="$props.type === 'link'"
    >
        <div>
            <slot />
        </div>
    </NuxtLink>
    <button
        :class="['cursor-pointer', defaultCss, size, color]"
        v-bind="$attrs"
        @click="$emit('click')"
        v-if="$props.type === 'button'"
    >
        <div>
            <slot />
        </div>
    </button>
</template>