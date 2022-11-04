<script setup lang="ts">
    const { error } = defineProps(['error'])
</script>

<template>
    <NuxtLayout color="black">
        <div class="mx-auto mt-4">
            <h1 class="text-6xl font-bold">
                Error {{ error.statusCode }}
            </h1>
            <h2 class="text-4xl font-semibold">{{ error.message }}</h2>
        </div>
    </NuxtLayout>
</template>
