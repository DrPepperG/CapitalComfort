<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();
    const { $settings } = useNuxtApp()

    const keywords = $settings.site_keywords.join()

    useHead({
        titleTemplate: (title) => { return title ? `${title} | ${$settings.site_name}` : `${$settings.site_name}` },
        meta: [
            { name: 'title', content: $settings.site_name },
            { name: 'description', content: $settings.site_description },
            { name: 'keywords', content: keywords },

            // Open Graph / Facebook
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://capitalcomfort.net' },
            { property: 'og:title', content: $settings.site_name },
            { property: 'og:description', content: $settings.site_description },
            { property: 'og:image', content: img($settings.site_image) },

            // Twitter
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:url', content: 'https://capitalcomfort.net' },
            { property: 'twitter:title', content: $settings.site_name },
            { property: 'twitter:description', content: $settings.site_description },
            { property: 'twitter:image', content: img($settings.site_image) },
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
