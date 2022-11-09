<script setup lang="ts">
    import { GaugeIcon } from 'vue-tabler-icons';

    const services = [
        {
            icon: GaugeIcon,
            title: 'HVAC Service',
            description: "<ul><li>tdd</li></ul>",
        }
    ]
</script>

<template>
    <div>
        <section>
            <AppHero color="black">
                <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 p-6">
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
                                Providing service to The Triangle and surrounding areas since 2008,
                                Capital Comfort is a family owned/operated business that strives to deliver the best quality service and workmanship.
                                Let us be your HVAC company of choice today!
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            class="rounded-xl"
                            src="https://i.imgur.com/yH7biJ2.jpeg" 
                        />
                    </div>
                </div>
            </AppHero>
        </section>
        <section>
            <div class="mx-auto container p-6">
                <h1 class="text-6xl font-bold text-left uppercase mb-4">
                    Services
                </h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <AppCard v-for="service in services">
                        <component class="mx-auto" :is="service.icon" size="48" />
                        <h1 class="text-2xl font-bold text-center">
                            {{ service.title }}
                        </h1>
                        <div class="prose prose-invert" v-html="service.description" />
                    </AppCard>
                </div>
            </div>
        </section>
    </div>
</template>
