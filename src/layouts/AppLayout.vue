<template>
    <div class="flex flex-col h-full min-h-screen text-white bg-cc-blue">
        <main class="min-w-0 px-4 sm:px-6 xl:px-8 md:container md:mx-auto">
            <slot></slot>
        </main>
    </div>
</template>

<script>
export default {
    props: ['title'],
    watch: {
        title: {
            immediate: true,
            handler(title) {
                document.title = (title ? `Capital Comfort - ${title}` : 'Capital Comfort');
            },
        },
    },
};
</script>
