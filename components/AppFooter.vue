<script setup lang="ts">
    import { MailIcon, PhoneCallIcon } from 'vue-tabler-icons'
</script>

<template>
    <div class="mt-auto">
        <AppCTA color="orange">
            <template #title>
                Contact us today
            </template>
            <ul class="font-bold">
                <li>
                    <NuxtLink 
                        class="flex flex-row items-center text-2xl"
                        :to="`mailto:${$settings.site_email}`"
                    >
                        <MailIcon size="48" />
                        {{ $settings.site_email }}
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        class="flex flex-row items-center text-2xl"
                        :to="`tel:${$settings.site_phone_number}`"
                    >
                        <PhoneCallIcon size="48" />
                        {{ $settings.site_phone_number }}
                    </NuxtLink>
                </li>
            </ul>
        </AppCTA>
        <footer class="mt-auto bg-cc-black text-white py-8 px-16 space-y-4">
            <div class="flex flex-col lg:flex-row gap-4">
                <!-- Logo -->
                <AppLogo class="md:mr-4" size="lg" />
                <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 items-start gap-8">
                    <div
                        v-for="category in $settings.site_footer_links"
                        :key="category.category_title"
                    >
                        <span class="text-xl font-bold uppercase">{{ category.category_title }}</span>
                        <ul class="mt-2">
                            <li
                                class="font-semibold text-gray-300"
                                v-for="link in category.category_links"
                            >
                                <NuxtLink
                                    :to="link.link"
                                    :target="link.new_tab ? '_blank' : null"
                                    v-if="link.is_link"
                                >
                                    {{ link.text }}
                                </NuxtLink>

                                <span v-else>
                                    {{ link.text }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container border-t-2 border-white">
                <div class="flex flex-col mt-4">
                    <span class="font-semibold">NC License #20269</span>
                    <span class="font-bold">Copyright &copy; {{ new Date().getFullYear() }} {{ $settings.site_name }}</span>
                </div>
            </div>
        </footer>
    </div>
</template>
