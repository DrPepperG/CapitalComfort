<!-- eslint-disable max-len -->
<template>
    <div class="flex flex-col h-full min-h-screen text-white bg-cc-black">
        <!-- Navbar -->
        <nav class="bg-cc-black-lighter shadow-md mb-4">
            <!-- Primary Navigation Menu -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <app-logo class="h-10 w-10 mr-1" />
                        <h1 class="text-xl font-bold uppercase">Capital Comfort</h1>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <app-nav-link v-for="(link, title) in pages" v-bind:key="title" :to="link">
                            {{ title }}
                        </app-nav-link>
                    </div>

                    <!-- Hamburger -->
                    <div class="-mr-2 flex items-center sm:hidden">
                        <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="showingNavigationDropdown = ! showingNavigationDropdown">
                            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <main class="min-w-0 px-4 sm:px-6 xl:px-8 md:container md:mx-auto">
            <slot></slot>
        </main>
    </div>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue';
import AppNavLink from '@/components/AppNavLink.vue';

export default {
    components: {
        AppLogo,
        AppNavLink,
    },
    props: ['title'],
    data() {
        return {
            showingNavigationDropdown: false,
            pages: {
                About: '/',
            },
        };
    },
    watch: {
        title: {
            immediate: true,
            handler(title) {
                document.title = (title ? `Capital Comfort - ${title}` : 'Capital Comfort');
            },
        },
    },
};
</script>
