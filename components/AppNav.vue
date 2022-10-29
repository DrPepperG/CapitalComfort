<script setup lang="ts">
    let showingNavigationDropdown = ref(false)
</script>

<template>
    <nav>
        <!-- Brand Topper -->
        <div class="bg-cc-black p-3">
            <div class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6 relative">
                <!-- Logo -->
                <AppLogo />

                <!-- Mobile Hamburger -->
                <div class="ml-auto flex items-center md:hidden" >
                    <button
                        class="inline-flex items-center justify-center p-2 rounded-md text-white
                        hover:text-gray-400 hover:bg-asoc-black-lighter focus:outline-none focus:bg-asoc-black-lighter
                        focus-within:focus:text-gray-500 transition duration-150 ease-in-out"
                        @click="showingNavigationDropdown = ! showingNavigationDropdown"
                    >
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path 
                                :class="{ 'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                            <path
                                :class="{ 'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>
                </div>

                <!-- Blue Corner Desktop -->
                <div class="hidden md:block absolute bg-cc-blue rounded-br-xl rounded-bl-xl p-5 -top-3 right-0">
                    <div class="text-white text-center">
                        <h1 class="text-white font-bold text-2xl uppercase">
                            Schedule a visit
                        </h1>
                        <h2 class="text-white font-bold text-2xl uppercase">
                            Call or Text:
                        </h2>
                        <a class="text-cc-yellow font-bold text-2xl" :href="`tel:${$settings.site_phone_number}`">
                            {{ $settings.site_phone_number }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div class="bg-cc-black-lighter" v-if="$settings.site_nav_links">
            <div class="flex items-center h-full mx-auto max-w-7xl sm:px-3 lg:px-6">
                <!-- Nav Element -->
                <NuxtLink 
                    :to="link.url"
                    v-for="link in $settings.site_nav_links"
                    :key="link.text"
                >
                    <div class="p-3 px-5 mx-3 first:ml-0 hover:bg-cc-blue hover:cursor-pointer hover:scale-105">
                        <div class="text-white font-semibold uppercase">
                            {{ link.text }}
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <!-- Blue Info Mobile -->
        <div class="md:hidden bg-cc-blue text-center text-white">
            <h1 class="text-white font-bold text-2xl uppercase">
                Schedule a visit
            </h1>
            <h2 class="text-white font-bold text-2xl uppercase">
                Call or Text:
            </h2>
            <a class="text-cc-yellow font-bold text-2xl" :href="`tel:${$settings.site_phone_number}`">
                {{ $settings.site_phone_number }}
            </a>
        </div>

        <AppAlert v-if="$settings.site_alert">
            <span v-html="$settings.site_alert" />
        </AppAlert>

        <!-- Slot -->
        <slot />
    </nav>
</template>
