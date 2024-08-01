<script setup lang="ts">
    useHead({
        title: 'Contact Us'
    })

    definePageMeta({
        disableCTA: true
    })

    const contactForm: {
        forms: {
            id: string,
            fullWidth?: boolean,
            title: string,
            placeholder?: string
            type: 'input' | 'select' | 'textarea'
            inputType?: 'text' | 'password' | 'email' | 'number' | 'url' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'search' | 'tel' | 'checkbox' | 'radio',
            options?: string[]
        }[]
    } = {
        forms: [
            {
                id: 'first_name',
                title: 'First Name',
                placeholder: 'John',
                type: 'input',
                inputType: 'text'
            },
            {
                id: 'last_name',
                title: 'Last Name',
                placeholder: 'Wick',
                type: 'input',
                inputType: 'text'
            }
        ]
    };
</script>

<template>
    <section>
        <AppSection>
            <template #title>
                Contact Us
            </template>
            <AppSegment class="max-w-4xl">
                <form class="text-black" @submit.prevent="console.log">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div v-for="input in contactForm.forms" :class="{ 'col-span-2': input.fullWidth }">
                            <label class="block" v-if="input.type === 'input'">
                                <span class="text-white">{{ input.title }}</span>
                                <input 
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cc-blue focus:ring focus:ring-cc-blue focus:ring-opacity-50"
                                    :type="input.inputType"
                                    :placeholder="input.placeholder"
                                >
                            </label>
                        </div>
                    </div>
                </form>
            </AppSegment>
        </AppSection>
    </section>
</template>
