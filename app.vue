<script setup lang="ts">
    export interface Settings {
        id?: number,
        site_name: string,
        site_logo: string,
        site_phone_number: string,
        site_email: string,
        site_alert: string,
        site_description: string,
        site_nav_links: Array<{
            text: string,
            url: string,
            external?: boolean
        }>
        date_created: Date,
        date_updated: Date,
    }

    const { getSingletonItem } = useDirectusItems();

    const settings: Settings | void = await getSingletonItem<Settings>({
        collection: 'site_settings'
    }).catch(() => {})

    if (!settings) {
        throw createError({ statusCode: 500 })
    }

    useHead({
        titleTemplate: (title) => { return title ? `${title} | ${settings.site_name}` : `${settings.site_name}` }
    })

    provide('settings', settings)
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#4172ff" />
        <NuxtPage />
    </NuxtLayout>
</template>
