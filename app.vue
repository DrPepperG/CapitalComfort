<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();
    const { $settings } = useNuxtApp()

    const keywords = $settings.site_keywords.join()

    useHead({
        titleTemplate: (title) => { return title ? `${title} | ${$settings.site_name}` : `${$settings.site_name}` },
        meta: [
            { name: 'description', content: $settings.site_description },
            { name: 'keywords', content: keywords },
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: img($settings.site_favicon, { format: 'png' }) }
        ]
    })
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#4172ff" />
        <NuxtPage />
    </NuxtLayout>
</template>
