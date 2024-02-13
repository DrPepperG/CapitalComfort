// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['nuxt-directus', 'nuxt-gtag', '@nuxtjs/tailwindcss'],
    directus: {
        url: 'https://cms.capitalcomfort.net/'
    },
    gtag: {
        id: 'G-34S1BJ1B1F'
    }
})
