<script setup lang="ts">
    const error = defineProps(['error'])
</script>

<template>
    <NuxtLayout>
        <div class="text-white">
            {{ error }}
        </div>
    </NuxtLayout>
</template>
