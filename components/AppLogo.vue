<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();
</script>

<template>
    <NuxtLink to="/">
        <div class="flex flex-row items-center">
            <img :src="img($settings.site_logo, { height: 50, width: 50 })" />
            <span class="text-white font-bold uppercase text-xl ml-2">
                {{ $settings.site_name }}
            </span>
        </div>
    </NuxtLink>
</template>
