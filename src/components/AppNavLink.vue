<template>
    <router-link :href="href" :class="classes" :to="to">
        <slot />
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        to: {
            type: String,
            default: '',
        },
        href: {
            type: String,
            default: null,
        },
    },
    computed: {
        classes() {
            return this.active
                ? 'inline-flex items-center px-1 pt-1 cursor-pointer border-b-2 border-cc-blue text-md font-semibold leading-5 text-white focus:outline-none focus:border-cc-blue transition duration-150 ease-in-out'
                : 'inline-flex items-center px-1 pt-1 cursor-pointer border-b-2 border-transparent text-md font-semibold leading-5 text-white hover:text-gray-300 hover:border-gray-500 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out';
        },
    },
});
</script>
