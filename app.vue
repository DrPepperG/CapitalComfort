<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();
    const { $settings } = useNuxtApp()

    const keywords = $settings.site_keywords.join()

    useHead({
        titleTemplate: (title) => { return title ? `${title} | ${$settings.site_name}` : `${$settings.site_name}` },
        htmlAttrs: {
            lang: 'en',
        },
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

            // Favicon
            { name: 'msapplication-TileColor', content: '#da532c'},
            { name: 'theme-color', content: '#ffffff'}
        ],
        link: [
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
            { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
        ]
    })
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#4172ff" />
        <NuxtPage />
    </NuxtLayout>
</template>
