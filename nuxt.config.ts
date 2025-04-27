// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "craigpeters.me blag",
      htmlAttrs: {
        lang: "en"
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/icons/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
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

  hub: {
    blob: true
  },

  compatibilityDate: '2025-02-23'
})