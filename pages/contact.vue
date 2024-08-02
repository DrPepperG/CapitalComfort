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
                default?: boolean,
            }[],
            fullWidth?: boolean,
            required?: boolean
        }[]
    };
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
                id: 'phone_number',
                title: 'Phone Number',
                placeholder: '919-779-5950',
                type: 'input',
                inputType: 'tel',
                required: true,
            },
            {
                id: 'email',
                title: 'Email',
                placeholder: 'john.doe@gmail.com',
                type: 'input',
                inputType: 'email',
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
                        value: 'Maintenance List',
                        default: true
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
                fullWidth: true,
            },
        ],
    };

    const formData: any = ref({});
    function setupForm() {
        // Reset form
        formData.value = {};

        // Select a default option
        Object.values(contactForm.forms).forEach((input) => {
            if (input.options) {
                input.options.forEach((option) => {
                    if (option.default) {
                        formData.value[input.id] = option.value
                    }
                })
            }
        })
    }
    setupForm();

    const token = ref();
    const status= ref<'pending' | 'sending' | 'sent' | 'error'>('pending');

    async function submitForm() {
        // Set to sending
        status.value = 'sending'

        $fetch('/api/contact', {
            method: 'POST',
            body: {
                form: formData.value,
                token: token.value
            }
        }).then(() => {
            // Set to sent
            status.value = 'sent';
            // Remove previous values
            setupForm();
        }).catch(() => {
            status.value = 'error';
        })
    };
</script>

<template>
    <section>
        <AppSection>
            <template #title>
                Contact Us
            </template>
            <AppSegment class="max-w-4xl">
                <div v-if="status === 'sent'">
                    <AppSegment color="green">
                        Your message has been successfully sent, we've cleared the contact form for you.
                    </AppSegment>
                </div>
                <div v-else-if="status === 'error'">
                    <AppSegment color="red">
                        An error has occurred, please double check your message and try again.
                    </AppSegment>
                </div>
                <form class="text-black" @submit.prevent="submitForm">
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
                        <AppButton color="blue" size="bigFull" type="button" :disabled="status === 'sending'">
                            Submit
                        </AppButton>
                    </div>
                    <NuxtTurnstile class="mt-2" v-model="token" />
                </form>
            </AppSegment>
        </AppSection>
    </section>
</template>
