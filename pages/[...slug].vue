<script setup lang="ts">
const { getItems } = useDirectusItems();
const route = useRoute();

// Contact cms for page information
const page = await getItems(
    {
        collection: 'pages',
        params: {
            filter: { slug: route.params.slug[0] },
            fields: ['*','sections.item.*', 'sections.collection'],
            limit: 1,
        }
    }).then((value) => {
        return value[0]
    });

// If cms returns no page then redirect home
if (!page) clearError({ redirect: '/' })

let components = []
page.sections.forEach((section) => {
    delete section.item.id

    components.push({ 
        component: `Lazy${section.collection.charAt(0).toUpperCase() + section.collection.slice(1)}`,
        props: section.item
    })
})

console.log(components)
</script>

<template>
    <div>
        <NuxtLink to="/test">Test</NuxtLink>
        <NuxtLink to="/">Test2</NuxtLink>
        <component :is="item.component" v-bind="item.props" v-for="item in components"/>
    </div>
</template>

<script lang="ts">
    import {
        LazyBanner,
        LazyHero
    } from '#components'

    export default {
        components: {
            LazyBanner,
            LazyHero
        }
    }
</script>
