<script setup lang="ts">
    const props = defineProps({
        color: {
            type: String,
            default: 'black'
        }
    })

    const color = {
        black: 'bg-cc-black text-white',
        red: 'bg-red-500 text-white'
    }[props.color]
</script>

<template>
    <div :class="[color, 'p-6']" v-bind="$attrs">
        <div class="mx-auto container">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <slot />
            </div>
        </div>
    </div>
</template>
