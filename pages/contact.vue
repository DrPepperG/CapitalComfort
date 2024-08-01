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
            options?: {
                value: string,
                default?: boolean
            }[]
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
            },
            {
                id: 'text',
                title: 'Message',
                type: 'textarea',
                fullWidth: true
            },
            {
                id: 'reason',
                title: 'Reason',
                type: 'select',
                fullWidth: true,
                options: [
                    {
                        value: 'test',
                        default: true
                    },
                    {
                        value: 'not default'
                    }
                ]
            }
        ]
    };

    const inputCss = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cc-blue focus:ring focus:ring-cc-blue focus:ring-opacity-50"
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
                            <label class="block">
                                <span class="text-white">{{ input.title }}</span>
                                <!-- Input -->
                                <input 
                                    :class="[inputCss]"
                                    :name="input.id"
                                    :type="input.inputType"
                                    :placeholder="input.placeholder"
                                    v-if="input.type === 'input'"
                                >
                                <!-- Select -->
                                <select
                                    :class="[inputCss]"
                                    :name="input.id"
                                    v-if="input.type === 'select'"
                                >
                                    <option
                                        :value="option.value"
                                        :selected="option.default"
                                        v-for="option in input.options"
                                    >
                                        {{ option.value }}
                                    </option>
                                </select>
                                <!-- Textarea -->
                                <textarea
                                    :class="[inputCss]"
                                    :name="input.id"
                                    :placeholder="input.placeholder"
                                    v-if="input.type === 'textarea'"
                                />
                            </label>


                        </div>
                    </div>
                </form>
            </AppSegment>
        </AppSection>
    </section>
</template>
