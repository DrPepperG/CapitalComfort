<template>
    <app-layout>
        <div class="flex h-screen">
            <div class="m-auto w-full">
                <app-segment showLogo="true" maxWidth="full" posClass="text-center">
                    <h1 class="text-2xl font-bold mb-2">
                        Your heating and cooling specialists
                    </h1>
                    <h2 class="text-xl font-bold ">About Us</h2>
                    <!-- eslint-disable-next-line -->
                    <p class="font-bold">With more than 22 years of experience, Thomas Crain and his professional technicians in training take pride in being one of the most trusted residential heating and cooling companies serving Wake and Johnston Counties. Thomas, who is married and has three sons, attended North Carolina State University and received his mechanical contractor license in 1996.</p>
                </app-segment>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';
import AppSegment from '@/components/AppSegment.vue';

export default {
    name: 'Home',
    components: {
        AppLayout,
        AppSegment,
    },
};
</script>
