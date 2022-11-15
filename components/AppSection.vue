<template>
    <div class="p-6">
        <div class="mx-auto container">
            <h1 class="text-6xl font-bold text-left uppercase mb-2">
                <slot name="title" />
            </h1>
            <h2 class="font-semibold italic text-gray-700 mb-2">
                <slot name="description" />
            </h2>
            <slot />
        </div>
    </div>
</template>
