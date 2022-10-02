<template>
    <div :style="{'background-color': background_color}">
        <div class="md:container mx-auto">
            <div v-html="text" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hero',
        props: ['background_color', 'text']
    }
</script>
