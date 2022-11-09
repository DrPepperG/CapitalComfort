<script setup lang="ts">
    const { error } = defineProps(['error'])
</script>

<template>
    <NuxtLayout color="black">
        <div class="m-auto">
            <AppSegment>
                <h1 class="text-6xl font-bold">
                    Error {{ error.statusCode }}
                </h1>
                <h2 class="text-4xl font-semibold">{{ error.message }}</h2>
                <p class="text-lg mt-2">
                    Some errors are ok but if you do believe that this one is not then please email us at 
                    <NuxtLink class="text-cc-blue" :to="`tel:${$settings.site_email}`">
                        {{ $settings.site_email }}
                    </NuxtLink>.
                </p>
            </AppSegment>
        </div>
    </NuxtLayout>
</template>
