<script setup>
  import { faLetterboxd, faBluesky, faGithub, faDiscord, faFlickr, faLinkedin, faGoodreads } from '@fortawesome/free-brands-svg-icons'
  import { faAt, faMugHot, faPen, faImage, faUser, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

  const route = useRoute()
  const carousel = ref(null)
  const mobileMenuOpen = ref(false)

  // Detect Nuxt Studio — it injects a <nuxt-studio> element into the page
  const isStudio = ref(false)
  onMounted(() => {
    isStudio.value = !!document.querySelector('nuxt-studio')
    if (!isStudio.value) {
      const observer = new MutationObserver(() => {
        if (document.querySelector('nuxt-studio')) {
          isStudio.value = true
          observer.disconnect()
        }
      })
      observer.observe(document.body, { childList: true, subtree: true })
      onUnmounted(() => observer.disconnect())
    }
  })

  // Close mobile menu on navigation
  watch(() => route.path, () => { mobileMenuOpen.value = false })

  // Hide BMAC on /clarity/* (Apple App Store guideline 3.1.1 — no external payment links in app web views)
  // Also hide when running inside a native iOS WKWebView (UA contains iPhone/iPad but not "Safari")
  const showBmac = computed(() => {
    if (route.path.startsWith('/clarity')) return false
    if (import.meta.client) {
      const ua = navigator.userAgent
      if (/iPhone|iPad|iPod/.test(ua) && !/Safari/.test(ua)) return false
    }
    return true
  })

  function scrollCarousel(dir) {
    if (carousel.value) {
      carousel.value.scrollBy({ left: dir * 172, behavior: 'smooth' })
    }
  }

  const { data } = await useAsyncData('images', () => {
    return queryCollection('images')
      .order('date', 'DESC')
      .limit(6)
      .all()
  })

  useSeoMeta({
    title: "Craigpeters.me Blag",
    ogTitle: "Blag Home",
    description: "Blog of Craig Peters, I talk about random stuff which is terrible for SEO but I am including this which is good for SEO",
    ogDescription: "A homepage of delights by Craig Peters",
    ogImage: "https://www.craigpeters.me/public/title-starbucks.gif"
  })
</script>

<template>
  <div class="dark:bg-gray-800 dark:text-white min-h-screen">

    <!-- Mobile: sticky top bar (also used in Nuxt Studio) -->
    <header :class="isStudio ? '' : 'md:hidden'" class="sticky top-0 z-50 bg-amber-50 dark:bg-orange-900 px-4 py-3 flex items-center justify-between shadow-sm border-b border-black/10 dark:border-white/10">
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="p-1.5 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <font-awesome :icon="mobileMenuOpen ? faXmark : faBars" class="w-5 h-5" />
      </button>
      <NuxtLink to="/" class="font-black text-lg" @click="mobileMenuOpen = false">
        craigpeters dot me
      </NuxtLink>
      <div class="w-8" /><!-- balance spacer -->
    </header>

    <!-- Mobile/Studio: collapsible nav drawer -->
    <div
      v-show="mobileMenuOpen"
      :class="isStudio ? '' : 'md:hidden'"
      class="bg-amber-50 dark:bg-orange-900 px-5 py-4 border-b border-black/10 dark:border-white/10 z-40"
    >
      <ul class="flex flex-col gap-0.5 text-sm font-semibold mb-4">
        <li>
          <NuxtLink to="/posts" class="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
            <font-awesome :icon="faPen" class="w-4 shrink-0" /> Writing
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/images" class="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
            <font-awesome :icon="faImage" class="w-4 shrink-0" /> Photos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
            <font-awesome :icon="faUser" class="w-4 shrink-0" /> About
          </NuxtLink>
        </li>
      </ul>

      <div class="border-t border-black/10 dark:border-white/10 pt-3">
        <h3 class="text-xs uppercase tracking-widest opacity-50 mb-2 px-3">Find me on</h3>
        <ul class="flex flex-wrap gap-1 px-2">
          <li><a href="https://bsky.app/profile/craigpeters.me" target="_new" class="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors block" title="Bluesky"><font-awesome :icon="faBluesky" class="w-5 h-5" /></a></li>
          <li><a href="https://letterboxd.com/craigmpeters/" target="_new" class="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors block" title="Letterboxd"><font-awesome :icon="faLetterboxd" class="w-5 h-5" /></a></li>
          <li><a href="https://github.com/craigmpeters" target="_new" class="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors block" title="GitHub"><font-awesome :icon="faGithub" class="w-5 h-5" /></a></li>
          <li><a href="https://discordapp.com/users/283708674357198853" target="_new" class="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors block" title="Discord"><font-awesome :icon="faDiscord" class="w-5 h-5" /></a></li>
          <li><a href="mailto:craig@craigpeters.me" class="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors block" title="Email"><font-awesome :icon="faAt" class="w-5 h-5" /></a></li>
          <li><a href="https://www.flickr.com/photos/craigmpeters/" target="_new" class="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors block" title="Flickr"><font-awesome :icon="faFlickr" class="w-5 h-5" /></a></li>
          <li><a href="https://linkedin.com/in/craigmpeters" target="_new" class="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors block" title="LinkedIn"><font-awesome :icon="faLinkedin" class="w-5 h-5" /></a></li>
          <li><a href="https://www.goodreads.com/user/show/187014383-craig-peters" target="_new" class="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors block" title="Goodreads"><font-awesome :icon="faGoodreads" class="w-5 h-5" /></a></li>
          <li v-if="showBmac"><a href="https://buymeacoffee.com/craigmpeters" target="_new" class="p-2 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors block" title="Buy me a coffee"><font-awesome :icon="faMugHot" class="w-5 h-5" /></a></li>
        </ul>
      </div>
    </div>

    <!-- Desktop layout -->
    <div class="md:flex">

      <!-- Desktop: fixed left sidebar (hidden in Nuxt Studio) -->
      <nav :class="isStudio ? 'hidden' : 'hidden md:flex'" class="md:w-64 md:fixed md:left-0 md:top-0 md:h-screen bg-amber-50 dark:bg-orange-900 text-gray-800 dark:text-white py-8 px-5 flex-col gap-6 overflow-y-auto">

        <!-- Title -->
        <div>
          <NuxtLink to="/">
            <h1 class="text-2xl font-black text-center leading-tight">craigpeters dot me</h1>
            <img src="/public/title-starbucks.gif" alt="" class="m-auto py-2">
          </NuxtLink>
        </div>

        <!-- Section navigation -->
        <ul class="flex flex-col gap-0.5 text-sm font-semibold">
          <li>
            <NuxtLink to="/posts" class="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-black/10 transition-colors" active-class="bg-black/10">
              <font-awesome :icon="faPen" class="w-4 shrink-0" /> Writing
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/images" class="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-black/10 transition-colors" active-class="bg-black/10">
              <font-awesome :icon="faImage" class="w-4 shrink-0" /> Photos
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="flex items-center gap-2.5 px-3 py-2 rounded hover:bg-black/10 transition-colors" active-class="bg-black/10">
              <font-awesome :icon="faUser" class="w-4 shrink-0" /> About
            </NuxtLink>
          </li>
        </ul>

        <!-- Recent photos carousel -->
        <div class="relative">
          <button @click="scrollCarousel(-1)" class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-gray-800 dark:text-white rounded-r px-1 py-3 transition-colors" aria-label="Previous">&lsaquo;</button>
          <ul ref="carousel" class="flex snap-x gap-3 overflow-x-auto pb-2 scroll-smooth" style="scrollbar-width: none;">
            <li v-for="image of data" :key="image.path" class="flex-shrink-0 snap-start">
              <NuxtLink :to="image.path">
                <NuxtImg fit="cover" :src="image.pictures" width="160" height="160" class="rounded w-40 h-40 object-cover block" />
              </NuxtLink>
            </li>
          </ul>
          <button @click="scrollCarousel(1)" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-gray-800 dark:text-white rounded-l px-1 py-3 transition-colors" aria-label="Next">&rsaquo;</button>
        </div>

        <!-- Social links -->
        <div>
          <h3 class="text-xs uppercase tracking-widest opacity-50 mb-2 px-3">Find me on</h3>
          <ul class="flex flex-col gap-0.5 text-sm">
            <li><a href="https://bsky.app/profile/craigpeters.me" target="_new" class="flex items-center gap-2.5 px-3 py-1.5 rounded hover:bg-black/10 transition-colors"><font-awesome :icon="faBluesky" class="w-4 shrink-0" /> Bluesky</a></li>
            <li><a href="https://letterboxd.com/craigmpeters/" target="_new" class="flex items-center gap-2.5 px-3 py-1.5 rounded hover:bg-black/10 transition-colors"><font-awesome :icon="faLetterboxd" class="w-4 shrink-0" /> Letterboxd</a></li>
            <li><a href="https://github.com/craigmpeters" target="_new" class="flex items-center gap-2.5 px-3 py-1.5 rounded hover:bg-black/10 transition-colors"><font-awesome :icon="faGithub" class="w-4 shrink-0" /> GitHub</a></li>
            <li><a href="https://discordapp.com/users/283708674357198853" target="_new" class="flex items-center gap-2.5 px-3 py-1.5 rounded hover:bg-black/10 transition-colors"><font-awesome :icon="faDiscord" class="w-4 shrink-0" /> Discord</a></li>
            <li><a href="mailto:craig@craigpeters.me" class="flex items-center gap-2.5 px-3 py-1.5 rounded hover:bg-black/10 transition-colors"><font-awesome :icon="faAt" class="w-4 shrink-0" /> Email</a></li>
            <li><a href="https://www.flickr.com/photos/craigmpeters/" target="_new" class="flex items-center gap-2.5 px-3 py-1.5 rounded hover:bg-black/10 transition-colors"><font-awesome :icon="faFlickr" class="w-4 shrink-0" /> Flickr</a></li>
            <li><a href="https://linkedin.com/in/craigmpeters" target="_new" class="flex items-center gap-2.5 px-3 py-1.5 rounded hover:bg-black/10 transition-colors"><font-awesome :icon="faLinkedin" class="w-4 shrink-0" /> LinkedIn</a></li>
            <li><a href="https://www.goodreads.com/user/show/187014383-craig-peters" target="_new" class="flex items-center gap-2.5 px-3 py-1.5 rounded hover:bg-black/10 transition-colors"><font-awesome :icon="faGoodreads" class="w-4 shrink-0" /> Goodreads</a></li>
            <li v-if="showBmac"><a href="https://buymeacoffee.com/craigmpeters" target="_new" class="flex items-center gap-2.5 px-3 py-1.5 rounded hover:bg-black/10 transition-colors"><font-awesome :icon="faMugHot" class="w-4 shrink-0" /> Buy me a coffee</a></li>
          </ul>
        </div>

      </nav>

      <!-- Main content -->
      <div id="main" :class="isStudio ? '' : 'md:ml-64'" class="w-full p-5 md:p-10 md:min-h-screen">
        <NuxtPage />
      </div>

    </div>
  </div>
</template>
