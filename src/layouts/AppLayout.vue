<template>
    <div class="flex flex-col h-full min-h-screen text-white bg-cc-black">
        <!-- Navbar -->
        <app-navbar />

        <main class="min-w-0 px-4 sm:px-6 xl:px-8 md:container md:mx-auto">
            <slot></slot>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppNavbar from '@/layouts/AppNavbar.vue';

export default defineComponent({
    name: 'Layout',
    components: {
        AppNavbar,
    },
    props: ['title'],
    watch: {
        title: {
            immediate: true,
            handler(title) {
                document.title = (title ? `Capital Comfort - ${title}` : 'Capital Comfort');
            },
        },
    },
});
</script>
