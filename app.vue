<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();
    const { $settings } = useNuxtApp()

    useHead({
        link: [
            { rel: 'icon', type: 'image/png', href: img($settings.site_logo, { format: 'png' }) }
        ],
        titleTemplate: (title) => { return title ? `${title} | ${$settings.site_name}` : `${$settings.site_name}` }
    })
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#4172ff" />
        <NuxtPage />
    </NuxtLayout>
</template>
