// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

// Nuxt Studio is only bundled when GitHub OAuth is configured for the build
// (or in local dev). This prevents a production build with no auth and a
// predictable session secret. See README "Nuxt Studio" for the required variables.
const studioEnabled = process.env.NODE_ENV === 'development'
  || Boolean(process.env.STUDIO_GITHUB_CLIENT_ID && process.env.STUDIO_GITHUB_CLIENT_SECRET)

export default defineNuxtConfig({
  app: {
    head: {
      title: "craigpeters.me blag",
      htmlAttrs: {
        lang: "en"
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: process.env.NODE_ENV === 'development' },
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
    '@nuxtjs/color-mode',
    ...(studioEnabled ? ['nuxt-studio'] : [])
  ],
    studio: {
    repository: {
      provider: 'github', 
      owner: 'craigmpeters',
      repo: 'craigpetersme',
      branch: 'master'
    }
  },

  // routeRules: {
  //   '/': { prerender: process.env.NODE_ENV != 'development' }
  // },

  image: {

    provider: process.env.NODE_ENV === 'development' ? "ipx" : "ipxStatic",
    quality: 75,
    domains: ['craigpeters.me'],
    
  },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: false,
      nodeCompat: true
    },
    prerender: {
      routes: ['/', '/about', '/newsletter', '/clarity', '/clarity/privacy'],
      crawlLinks: true
    },
    routeRules: {
      '/bsky-proxy/**': {
        proxy: 'https://embed.bsky.app/**'
      },
    }
  },
  compatibilityDate: '2025-02-23',
  colorMode: {
    classSuffix: ''
  }
})