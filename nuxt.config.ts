// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/sitemap',
      'nuxt-directus',
      'nuxt-gtag',
      '@nuxtjs/robots',
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
      '@nuxtjs/turnstile'
  ],

  sitemap: {
      autoLastmod: true
  },

  gtag: {
      id: 'G-34S1BJ1B1F'
  },

  turnstile: {
      siteKey: '3x00000000000000000000FF'
  },

  runtimeConfig: {
      public: {
          directus: {
              url: 'https://cms.capitalcomfort.net/'
          },
      },
      directus: {
          token: ''
      },
      turnstile: {
          secretKey: '2x0000000000000000000000000000000AA',
      },
  },

  compatibilityDate: '2024-08-01',

  devtools: {
    timeline: {
      enabled: true
    }
  }
})