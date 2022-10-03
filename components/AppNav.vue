<script setup lang="ts">
    import { Settings } from '~~/app.vue';
    const { getThumbnail: img } = useDirectusFiles();

    const settings: Settings = inject('settings')
</script>

<template>
    <nav>
        <div class="bg-cc-black p-3">
            <div class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6 relative">
                <!-- Logo -->
                <div class="flex flex-row items-center">
                    <img :src="img(settings.site_logo, { height: 50, width: 50 })" />
                    <span class="text-white font-bold uppercase text-xl ml-2">
                        {{ settings.site_name }}
                    </span>
                </div>

                <!-- Links -->

                <!-- Blue Corner Desktop -->
                <div class="hidden md:block absolute bg-cc-blue rounded-br-xl rounded-bl-xl p-5 -top-3 right-0">
                    <div class="text-white text-center">
                        <h1 class="text-white font-bold text-2xl uppercase">
                            Schedule a visit
                        </h1>
                        <h2 class="text-white font-bold text-2xl uppercase">
                            Call or Text:
                        </h2>
                        <a class="text-cc-yellow font-bold text-2xl" :href="`tel:${settings.site_phone_number}`">
                            {{ settings.site_phone_number }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:hidden bg-cc-blue text-center text-white">
            <h1 class="text-white font-bold text-2xl uppercase">
                Schedule a visit
            </h1>
            <h2 class="text-white font-bold text-2xl uppercase">
                Call or Text:
            </h2>
            <a class="text-cc-yellow font-bold text-2xl" :href="`tel:${settings.site_phone_number}`">
                {{ settings.site_phone_number }}
            </a>
        </div>
    </nav>
</template>
