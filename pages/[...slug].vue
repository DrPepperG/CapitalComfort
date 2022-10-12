<script setup lang="ts">
interface PageComponent {
    component: String,
    props: Array<any>
}

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
if (!page) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

// Create components for use
let components: PageComponent[] = []
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
        }, 
    }
</script>
