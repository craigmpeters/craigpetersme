<script setup>
  import {faLetterboxd, faBluesky, faGithub, faDiscord, faFlickr, faLinkedin, faGoodreads} from '@fortawesome/free-brands-svg-icons'
  import { faAt } from '@fortawesome/free-solid-svg-icons'

  const route = useRoute()
  const carousel = ref(null)

  function scrollCarousel(dir) {
    if (carousel.value) {
      carousel.value.scrollBy({ left: dir * 172, behavior: 'smooth' })
    }
  }

  const { data } = await useAsyncData('images', () => {
    return queryCollection('images')
      .order('date' , 'DESC')
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
  <div id="container" class="flex flex-wrap dark:bg-gray-800 dark:text-white md:px-40">
    <nav class="flex-row md:flex-1 w-full md:w-3/12 md:fixed md:right-0 top-0 md:h-screen bg-slate-500 dark:bg-orange-900 py-10 px-15 items-center">
      <div id="title">
        <NuxtLink to="/">
          <h1 class="text-3xl font-black text-center">craigpeters dot me</h1>
          <img src="/public/title-starbucks.gif" alt="" class="m-auto py-2">
        </NuxtLink>
      </div>
      <div id="images" class="relative">
            <button @click="scrollCarousel(-1)" class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-r px-1 py-3 transition-colors" aria-label="Previous">&lsaquo;</button>
            <ul ref="carousel" class="flex snap-x gap-3 overflow-x-auto pb-2 scroll-smooth" style="scrollbar-width: none;">
                <li v-for="image of data" :key="image.path" class="flex-shrink-0 snap-start">
                    <NuxtLink :to="image.path"><NuxtImg fit="cover" :src="image.pictures" width="160" height="160" class="rounded w-40 h-40 object-cover block"  />
                    </NuxtLink>
                </li>
            </ul>
            <button @click="scrollCarousel(1)" class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-l px-1 py-3 transition-colors" aria-label="Next">&rsaquo;</button>
        </div>
        <ul id="socials" class="text-2xl p-5 text-center">
          <li><a href="https://letterboxd.com/craigmpeters/" target="_new" class="hover:text-orange-300 transition-colors"><font-awesome :icon="faLetterboxd" title="Letterboxd - craigmpeters" /></a></li>
          <li><a href="https://bsky.app/profile/craigpeters.me" target="_new" class="hover:text-orange-300 transition-colors"><font-awesome :icon="faBluesky" title="Blue Sky - craigpeters.me"/></a></li>
          <li><a href="https://github.com/craigmpeters" target="_new" class="hover:text-orange-300 transition-colors"><font-awesome :icon="faGithub" title="Github - craigmpeters"/></a></li>
          <li><a href="https://discordapp.com/users/283708674357198853" target="_new" class="hover:text-orange-300 transition-colors"><font-awesome :icon="faDiscord" title="Discord"/></a></li>
          <li><a href="mailto:craig@craigpeters.me" target="_new" class="hover:text-orange-300 transition-colors"><font-awesome :icon="faAt" title="E-Mail: craig@craigpeters.me" /></a></li>
          <li><a href="https://www.flickr.com/photos/craigmpeters/" target="_new" class="hover:text-orange-300 transition-colors"><font-awesome :icon="faFlickr" title="Flickr - craigmpeters" /></a></li>
          <li><a href="https://linkedin.com/in/craigmpeters" target="_new" class="hover:text-orange-300 transition-colors"><font-awesome :icon="faLinkedin" title="LinkedIn - craigmpeters" /></a></li>
          <li><a href="https://www.goodreads.com/user/show/187014383-craig-peters" target="_new" class="hover:text-orange-300 transition-colors"><font-awesome :icon="faGoodreads" title="Goodreads" /></a></li>
        </ul>
      </nav>
    <div id="main" class="flex-row md:flex-1 m-auto md:mr-64 p-5 md:p-10 md:min-h-screen">
      <NuxtPage />
    </div>

   
  </div>

</template>

<style>
#socials li {
  display: inline-flex;
  padding: 0 0.2em;
}
</style>