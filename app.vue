<script setup lang="ts">
    export interface Settings {
        id?: number,
        site_name: String,
        site_logo: string,
        site_phone_number: String,
        site_email: String,
        site_alert: String,
        site_description: String,
        date_created: Date,
        date_updated: Date,
    }

    const { getSingletonItem } = useDirectusItems();

    const settings: Settings = await getSingletonItem<Settings>({
        collection: 'site_settings'
    })

    useHead({
        titleTemplate: (title) => { return title ? `${title} | ${settings.site_name}` : 'Capital Comfort' }
    })

    provide('settings', settings as Settings)
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#4172ff" />
        <NuxtPage />
    </NuxtLayout>
</template>
