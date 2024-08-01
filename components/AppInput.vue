<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

defineProps({
    title: {
        type: String
    },
    inputType: {
        type: String,
        default: 'input'
    }
});

const inputCss = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cc-blue focus:ring focus:ring-cc-blue focus:ring-opacity-50";
</script>

<template>
    <label class="block">
        <span class="text-white">{{ title }}</span>
        <!-- Input -->
        <input 
            :class="[inputCss]"
            v-bind="$attrs"
            v-if="inputType === 'input'"
        >
        <!-- Select -->
        <select
            :class="[inputCss]"
            v-bind="$attrs"
            v-if="inputType === 'select'"
        >
            <slot/>
        </select>
        <!-- Textarea -->
        <textarea
            :class="[inputCss]"
            v-bind="$attrs"
            v-if="inputType === 'textarea'"
        />
    </label>
</template>