<script setup lang="ts">
    let showingNavigation = ref(false)
</script>

<template>
    <div v-if="$settings.site_alert">
        <AppAlert :color="$settings.site_alert_color">
            <span class="prose prose-invert" v-html="$settings.site_alert" />
        </AppAlert>
    </div>

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
                        @click="showingNavigation = ! showingNavigation"
                    >
                        <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path 
                                :class="{ 'hidden': showingNavigation, 'inline-flex': ! showingNavigation }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                            <path
                                :class="{ 'hidden': ! showingNavigation, 'inline-flex': showingNavigation }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>
                </div>

                <!-- Orange Corner Desktop -->
                <div class="hidden md:block absolute bg-cc-orange rounded-b-xl p-5 -top-3 right-0">
                    <div class="text-white text-center">
                        <h1 class="text-white font-bold text-2xl uppercase">
                            Schedule a visit
                        </h1>
                        <h2 class="text-white font-bold text-2xl uppercase">
                            Call or Text:
                        </h2>
                        <a class="bg-cc-blue rounded-lg px-2 font-bold text-2xl" :href="`tel:${$settings.site_phone_number}`">
                            {{ $settings.site_phone_number }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation -->
        <div 
            class="bg-cc-black-lighter md:block"
            :class="[showingNavigation ? 'block' : 'hidden']"
            v-if="$settings.site_nav_links"
        >
            <div class="flex flex-col md:flex-row mx-auto max-w-7xl text-center lg:px-6">
                <!-- Nav Element -->
                <NuxtLink 
                    :to="link.url"
                    v-for="link in $settings.site_nav_links"
                    :key="link.text"
                    :target="link.new_tab ? '_blank' : null"
                >
                    <div class="p-3 px-5 md:mx-3 first:ml-0 hover:bg-cc-blue hover:cursor-pointer md:hover:scale-105">
                        <div class="text-white font-semibold uppercase">
                            {{ link.text }}
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <!-- Orange Info Mobile -->
        <div class="md:hidden bg-cc-orange text-center text-white">
            <h1 class="text-white font-bold text-2xl uppercase">
                Schedule a visit
            </h1>
            <h2 class="text-white font-bold text-2xl uppercase">
                Call or Text:
            </h2>
            <div class="pb-2">
                <a 
                    class="bg-cc-blue rounded-xl px-2 font-bold text-2xl"
                    :href="`tel:${$settings.site_phone_number}`"
                >
                    {{ $settings.site_phone_number }}
                </a>
            </div>
        </div>

        <!-- Slot -->
        <slot />
    </nav>
</template>
