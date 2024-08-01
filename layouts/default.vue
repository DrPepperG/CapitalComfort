<script setup lang="ts">
    import { MailIcon, PhoneCallIcon } from 'vue-tabler-icons';
</script>

<template>
    <main class="flex flex-col bg-cc-white min-h-screen">
        <AppNav />
        
        <slot />

        <div class="mt-auto">
            <div v-show="!$route.meta.disableCTA">
                <AppCTA color="blue">
                    <template #title>
                        Join our maintenance list
                    </template>
                    <template #description>
                        Don't worry about being locked into unnecessary contracts, we reach out to you each Spring/Fall! 
                    </template>
                    <div class="mt-4">
                        <AppButton to="contact" size="big" color="orange">
                            Get Added!
                        </AppButton>
                    </div>
                </AppCTA>
                <AppCTA color="orange">
                    <template #title>
                        Contact us today
                    </template>
                    <ul class="font-bold">
                        <li>
                            <NuxtLink class="flex flex-row items-center text-2xl" :to="`mailto:${$settings.site_email}`">
                                <MailIcon class="mr-2" size="48" />
                                {{ $settings.site_email }}
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="flex flex-row items-center text-2xl" :to="`tel:${$settings.site_phone_number}`">
                                <PhoneCallIcon class="mr-2" size="48" />
                                {{ $settings.site_phone_number }}
                            </NuxtLink>
                        </li>
                    </ul>
                    <div class="mt-6">
                        <AppButton to="contact" size="big" color="blue">
                            Contact Us
                        </AppButton>
                    </div>
                </AppCTA>
            </div>

            <AppFooter />
        </div>
    </main>
</template>
