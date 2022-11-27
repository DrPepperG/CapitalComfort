<script setup lang="ts">
    import { MailIcon, PhoneCallIcon } from 'vue-tabler-icons'
</script>

<template>
    <main class="flex flex-col bg-cc-white min-h-screen">
        <AppNav />
        
        <slot />

        <div class="mt-auto">
            <AppCTA color="orange">
                <template #title>
                    Contact us today
                </template>
                <ul class="font-bold">
                    <li>
                        <NuxtLink class="flex flex-row items-center text-2xl" :to="`mailto:${$settings.site_email}`">
                            <MailIcon size="48" />
                            {{ $settings.site_email }}
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="flex flex-row items-center text-2xl" :to="`tel:${$settings.site_phone_number}`">
                            <PhoneCallIcon size="48" />
                            {{ $settings.site_phone_number }}
                        </NuxtLink>
                    </li>
                </ul>
            </AppCTA>

            <AppFooter />
        </div>
    </main>
</template>
