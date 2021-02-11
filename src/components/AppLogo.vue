<template>
    <img :src="`${publicPath}images/cc640.png`">
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
        };
    },
};
</script>
