<script setup lang="ts">
    useHead({
        title: 'Contact Us'
    });

    definePageMeta({
        disableCTA: true
    });

    type ContactForm = {
        forms: {
            id: string,
            title: string,
            placeholder?: string
            type: 'input' | 'select' | 'textarea'
            inputType?: 'text' | 'password' | 'email' | 'number' | 'url' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'search' | 'tel' | 'checkbox' | 'radio',
            options?: {
                value: string,
            }[],
            fullWidth?: boolean,
            required?: boolean
        }[]
    }

    const contactForm: ContactForm = {
        forms: [
            {
                id: 'first_name',
                title: 'First Name',
                placeholder: 'John',
                type: 'input',
                inputType: 'text',
                required: true,
            },
            {
                id: 'last_name',
                title: 'Last Name',
                placeholder: 'Doe',
                type: 'input',
                inputType: 'text',
                required: true,
            },
            {
                id: 'email',
                title: 'Email',
                placeholder: 'john.doe@gmail.com',
                type: 'input',
                inputType: 'email',
                fullWidth: true,
                required: true,
            },
            {
                id: 'reason',
                title: 'Reason',
                type: 'select',
                fullWidth: true,
                required: true,
                options: [
                    {
                        value: 'Maintenance List'
                    },
                    {
                        value: 'General Question'
                    }
                ]
            },
            {
                id: 'text',
                title: 'Message',
                type: 'textarea',
                required: true,
                fullWidth: true
            },
        ],
    };

    const formData: any = ref({
        reason: 'Maintenance List'
    })
</script>

<template>
    {{ formData }}
    <section>
        <AppSection>
            <template #title>
                Contact Us
            </template>
            <AppSegment class="max-w-4xl">
                <form class="text-black" @submit.prevent>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div v-for="input in contactForm.forms" :class="{ 'md:col-span-2': input.fullWidth }">
                            <!-- Input -->
                            <AppInput
                                :title="input.title"
                                :name="input.id"
                                :type="input.inputType"
                                :placeholder="input.placeholder"
                                :required="input.required"
                                v-model="formData[input.id]"
                                v-if="input.type === 'input'"
                            />
                            <!-- Select -->
                            <AppInput
                                :title="input.title"
                                :name="input.id"
                                :required="input.required"
                                inputType="select"
                                v-model="formData[input.id]"
                                v-if="input.type === 'select'"
                            >
                                <option
                                    :value="option.value"
                                    :required="input.required"
                                    v-for="option in input.options"
                                >
                                    {{ option.value }}
                                </option>
                            </AppInput>
                            <!-- Textarea -->
                            <AppInput
                                :title="input.title"
                                :name="input.id"
                                :placeholder="input.placeholder"
                                inputType="textarea"
                                v-model="formData[input.id]"
                                v-if="input.type === 'textarea'"
                            />
                        </div>
                    </div>
                    <div class="mt-4">
                        <AppButton color="blue" size="bigFull" type="button">
                            Submit
                        </AppButton>
                    </div>
                </form>
            </AppSegment>
        </AppSection>
    </section>
</template>
