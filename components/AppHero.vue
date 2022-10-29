<template>
    <div class="bg-cc-black p-6" v-bind="$attrs">
        <div class="mx-auto container">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <slot />
            </div>
        </div>
    </div>
</template>
