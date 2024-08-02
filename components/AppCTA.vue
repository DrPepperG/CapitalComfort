<template>
    <AppHero>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-left uppercase mb-2">
            <slot name="title" />
        </h1>
        <h2 class="text-lg md:text-xl lg:text-2xl font-semibold text-gray-200 mb-2">
            <slot name="description" />
        </h2>
        <slot />
    </AppHero>
</template>
