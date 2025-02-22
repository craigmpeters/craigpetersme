// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },
  modules: ['@nuxt/content', '@nuxt/image','@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      brands: ['letterboxd'],
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-10-15'
})