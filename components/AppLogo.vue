<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();

    const props = defineProps({
        size: {
            type: String,
            default: 'md'
        }
    })

    const size = {
        xs: 'h-10',
        sm: 'h-20',
        md: 'h-24',
        lg: 'h-28',
        xl: 'h-32'
    }[props.size]
</script>

<template>
    <NuxtLink to="/" v-bind="$attrs">
        <div class="flex flex-row items-center">
            <NuxtImg :class="size" :src="img($settings.site_logo, { format: 'webp'})" />
        </div>
    </NuxtLink>
</template>
