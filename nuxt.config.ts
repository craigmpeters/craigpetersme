// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    } 
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@vesp/nuxt-fontawesome',
    '@nuxthub/core'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  image: {
    provider: "ipx"
  },

  compatibilityDate: '2025-02-23'
})