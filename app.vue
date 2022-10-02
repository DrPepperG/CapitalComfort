<script setup lang="ts">
    const { getSingletonItem } = useDirectusItems();

    interface Settings {
        id?: number,
        site_name: String,
        site_alert: String,
        site_description: String,
        date_created: Date,
        date_updated: Date,
    }

    const settings: Settings = await getSingletonItem<Settings>({
        collection: 'site_settings'
    })

    useHead({
        titleTemplate: (title) => { return title ? `${title} | ${settings.site_name}` : 'Capital Comfort' }
    })
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#4172ff" />
        <NuxtPage />
    </NuxtLayout>
</template>
