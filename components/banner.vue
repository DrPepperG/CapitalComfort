<template>
    <div>
       <img :src="`http://localhost:8055/assets/${image}`">
    </div>
</template>

<script>
export default {
    name: 'banner',
    props: ['image']
}
</script>
