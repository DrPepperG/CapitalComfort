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

// Create components for use
let components = []
page.sections.forEach((section) => {
    // Get rid of id since it will be appended to DOM
    delete section.item.id
    const collection = section.collection

    // Make sure we have values from the cms
    if (!collection || !section.item) return
    
    components.push({ 
        component: `Lazy${collection.charAt(0).toUpperCase() + collection.slice(1)}`,
        props: section.item
    })
})

// Setup header with data from cms
useHead({
    title: page.title
})
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
import { use } from 'h3';

    export default {
        components: {
            LazyBanner,
            LazyHero
        }, 
        mounted() {
            console.log('test')
        }
    }
</script>
