<script setup lang="ts">
    const { getThumbnail: img } = useDirectusFiles();
    const { getItems } = useDirectusItems();
    type Employee = {
        first_name: string,
        last_name: string,
        image: string,
        position: string
    }

    useHead({
        title: 'About'
    })

    const employees: Employee[] = await getItems<Employee[]>({
        collection: 'employees'
    })
</script>

<template>
    <section>
        <AppSection>
            <template #title>
                About Us
            </template>
            <AppSegment>
                <p>
                    Capital Comfort is a locally owned and operated business founded in 2008 by Thomas Crain,
                    providing quality craftmanship and services to all surrounding areas of The Triangle.
                </p>
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
                    <img class="rounded-full w-40 h-40 mx-auto" :src="img(employee.image)" />
                    <h1 class="text-2xl font-bold">
                        {{ employee.first_name }} {{ employee.last_name }}
                    </h1>
                    <h2 class="text-lg font-semibold">
                        {{ employee.position }}
                    </h2>
                </AppCard>
            </div>
        </AppSection>
    </section>
</template>
