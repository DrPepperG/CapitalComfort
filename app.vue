<script setup lang="ts">
    const { $settings } = useNuxtApp()

    useHead({
        titleTemplate: (title) => { return title ? `${title} | ${$settings.site_name}` : `${$settings.site_name}` }
    })
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#4172ff" />
        <NuxtPage />
    </NuxtLayout>
</template>
