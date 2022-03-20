<template>
    <img :src="`${publicPath}images/cc640.png`">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
});
</script>
