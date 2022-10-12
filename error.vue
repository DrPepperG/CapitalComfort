<script setup lang="ts">
    defineProps(['error'])
</script>

<template>
    <div>
        {{ error.url }}
    </div>
</template>
