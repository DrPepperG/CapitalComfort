<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();

    const props = defineProps({
        size: {
            type: String,
            default: 'md'
        }
    })

    const size = {
        sm: 'h-10',
        md: 'h-20',
        lg: 'h-24',
        xl: 'h-30'
    }[props.size]
</script>

<template>
    <NuxtLink to="/" v-bind="$attrs">
        <div class="flex flex-row items-center">
            <img :class="size" :src="img($settings.site_logo)" />
        </div>
    </NuxtLink>
</template>
