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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Convallis convallis tellus id interdum velit laoreet. Ut enim blandit volutpat maecenas. Venenatis urna
                    cursus
                    eget nunc scelerisque. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Blandit massa enim nec
                    dui
                    nunc mattis. Massa tempor nec feugiat nisl pretium fusce id. Ut eu sem integer vitae. Eget mi proin sed libero enim
                    sed
                    faucibus turpis in. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Maecenas ultricies mi
                    eget
                    mauris pharetra et ultrices neque ornare. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing.
                </p>
            </AppSegment>
        </AppSection>
    </section>
    <section>
        <AppSection class="mb-4">
            <template #title>
                Our Staff
            </template>
            <div class="flex flex-row gap-4 flex-wrap">
                <AppCard class="w-80 text-center" v-for="employee in employees">
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
