<!-- eslint-disable max-len -->
<template>
    <div>
        <nav class="bg-cc-blue shadow-md mb-4 p-4 sm:px-6 lg:px-8">
            <!-- Primary Navigation Menu -->
            <div class="flex flex-col sm:flex-row items-center justify-between min-h-16 space-y-4 sm:space-y-0">
                <!-- Logo -->
                <app-logo />

                <div>
                    <div class="bg-cc-orange rounded-lg p-4">
                    </div>
                </div>

                <!-- Navigation Links
                <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <app-nav-link v-for="(link, title) in pages" v-bind:key="title" :to="link">
                        {{ title }}
                    </app-nav-link>
                </div>

                <div class="-mr-2 flex items-center sm:hidden">
                    <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="showingNavigationDropdown = ! showingNavigationDropdown">
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                -->
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLogo from '@/components/AppLogo.vue';

export default defineComponent({
    name: 'Navbar',
    components: {
        AppLogo,
    },
    data() {
        return {
            showingNavigationDropdown: false,
            pages: {
                About: '/',
            },
        };
    },
})
</script>
