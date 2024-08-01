// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/sitemap',
      'nuxt-directus',
      'nuxt-gtag',
      'nuxt-simple-robots',
      '@nuxtjs/tailwindcss',
      "@nuxt/image"
  ],

  sitemap: {
      autoLastmod: true
  },

  directus: {
      url: 'https://cms.capitalcomfort.net/'
  },

  gtag: {
      id: 'G-34S1BJ1B1F'
  },

  compatibilityDate: '2024-08-01'
})