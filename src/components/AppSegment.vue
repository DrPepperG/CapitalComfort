<template>
    <div :class="[maxWidthClass, posClass]">
        <div :class="[color, 'overflow-hidden shadow-xl rounded-lg p-6']" v-bind="$attrs">
            <div class="flex items-center justify-center border-b" v-if="showLogo">
                <app-logo class="block h-14" />
                <h1 class="text-4xl font-bold">Capital Comfort</h1>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLogo from './AppLogo.vue';

export default defineComponent({
    components: {
        AppLogo,
    },
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
        showLogo: {
            type: Boolean,
            default: false,
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
