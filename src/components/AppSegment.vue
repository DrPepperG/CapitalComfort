<template>
    <div :class="[maxWidthClass, posClass]">
        <div :class="[color, 'overflow-hidden shadow-xl rounded-lg p-6']" v-bind="$attrs">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        maxWidth: {
            type: String,
            default: '2xl',
        },
        posClass: {
            type: String,
        },
        color: {
            type: String,
            default: 'bg-cc-black',
        },
    },
    computed: {
        maxWidthClass() {
            return {
                sm: 'sm:max-w-sm',
                md: 'sm:max-w-md',
                lg: 'sm:max-w-lg',
                xl: 'sm:max-w-xl',
                '2xl': 'sm:max-w-2xl',
                full: 'sm:max-w-full',
            }[this.maxWidth];
        },
    },
});
</script>
