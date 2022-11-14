<template>
    <AppHero>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-left uppercase mb-2">
            <slot name="title" />
        </h1>
        <slot />
    </AppHero>
</template>
