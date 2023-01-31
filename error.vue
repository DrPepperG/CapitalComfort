<script setup lang="ts">
    const { error } = defineProps(['error'])
</script>

<template>
    <NuxtLayout>
        <div class="m-auto p-6">
            <AppSegment>
                <h1 class="text-6xl font-bold">
                    Error {{ error.statusCode }}
                </h1>
                <h2 class="text-4xl font-semibold">{{ error.message }}</h2>
                <p class="text-lg mt-2">
                    If you believe this error should not be occuring please email us
                    <NuxtLink class="text-cc-blue" :to="`tel:${$settings.site_email}`">
                        {{ $settings.site_email }}
                    </NuxtLink>.
                </p>
            </AppSegment>
        </div>
    </NuxtLayout>
</template>
