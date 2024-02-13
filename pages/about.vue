<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();
    const { getSingletonItem, getItems } = useDirectusItems();
    type Employee = {
        first_name: string,
        last_name: string,
        image: string,
        position: string
    }
    interface AboutSettings {
        about_description: string,
    }

    useHead({
        title: 'About'
    })

    const settings: AboutSettings = await getSingletonItem<AboutSettings>({
        collection: 'about_settings',
    })
    const employees: Employee[] = await getItems<Employee>({
        collection: 'employees',
    })
</script>

<template>
    <section>
        <AppSection>
            <template #title>
                About Us
            </template>
            <AppSegment class="max-w-4xl">
                <div class="prose prose-invert prose-lg min-w-full" v-html="settings.about_description" />
            </AppSegment>
        </AppSection>
    </section>
    <section>
        <AppSection>
            <template #title>
                Our Team
            </template>
            <div class="flex flex-row gap-4 flex-wrap">
                <AppCard class="w-full md:w-80 text-center" v-for="employee in employees">
                    <img class="rounded-full w-40 h-40 mx-auto" :src="img(employee.image, { format: 'webp' })" />

                    <h1 class="text-2xl font-bold">
                        {{ employee.first_name }} {{ employee.last_name }}
                    </h1>

                    <AppPill color="blue">
                        <h2 class="text-lg font-semibold">
                            {{ employee.position }}
                        </h2>
                    </AppPill>
                </AppCard>
            </div>
        </AppSection>
    </section>
</template>
