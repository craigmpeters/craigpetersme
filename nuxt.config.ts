// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  content: {
    navigation: {
      fields: ['date', 'pictures']
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content', '@nuxt/image'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-10-15'
})