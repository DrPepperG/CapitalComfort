<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();
    const { getSingletonItem } = useDirectusItems();

    interface IndexSettings {
        hero_paragraph: string,
        hero_image: string,
        services_list: Array<{
            icon: string,
            title: string,
            description: string
        }>
        companies_list: Array<{
            name: string,
            logo: string,
            link?: string
        }>
    }

    const settings: IndexSettings = await getSingletonItem<IndexSettings>({
        collection: 'index_settings'
    })
</script>

<template>
    <div>
        <section>
            <AppHero color="black">
                <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
                    <div class="text-center lg:text-left">
                        <div class="italic uppercase">
                            <h1 class="text-5xl lg:text-6xl font-extrabold text-white">
                                Your
                            </h1>
                            <h2 class="text-4xl lg:text-5xl font-extrabold text-white">
                                <span class="text-cc-orange">heating</span> & <span class="text-cc-blue">cooling</span>
                            </h2>
                            <h1 class="text-5xl lg:text-6xl font-extrabold text-white">
                                specialists
                            </h1>
                        </div>
                        <div class="mt-4">
                            <p class="text-xl font-semibold">
                                {{ settings.hero_paragraph }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <NuxtImg class="rounded-xl" :src="img(settings.hero_image, { format: 'webp' })" />
                    </div>
                </div>
            </AppHero>
        </section>
        <section>
            <AppSection>
                <template #title>Services</template>
                <template #description>
                    We do work for homeowners, contractors, landlords and more.
                </template>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <AppCard v-for="service in settings.services_list">
                        <div class="mx-auto" v-html="service.icon" />
                        <h1 class="text-2xl font-bold text-center">
                            {{ service.title }}
                        </h1>
                        <div class="border-t-2 border-gray-500 prose prose-invert" v-html="service.description" />
                    </AppCard>
                </div>
                <h2 class="text-2xl font-semibold italic text-gray-700 my-2">
                    Unsure if we offer a certain service? Contact us today!
                </h2>
            </AppSection>
        </section>
        <section>
            <AppSection>
                <template #title>Our Partners</template>
                <template #description>
                    We partner with knowledgeable companies to provide you with quality service!
                </template>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <NuxtLink :to="company.link" target="_blank" v-for="company in settings.companies_list">
                        <AppCard class="justify-center h-full" color="green">
                            <NuxtImg :src="img(company.logo, { format: 'webp' })" />
                        </AppCard>
                    </NuxtLink>
                </div>
            </AppSection>
        </section>
    </div>
</template>
