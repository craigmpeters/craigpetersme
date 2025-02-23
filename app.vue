<script setup>
  import {faLetterboxd, faBluesky, faGithub, faDiscord, faFlickr, faLinkedin} from '@fortawesome/free-brands-svg-icons'
  import { faAt } from '@fortawesome/free-solid-svg-icons'

  const route = useRoute()

  const { data } = await useAsyncData('images', () => {
    return queryCollection('images')
      .order('date' , 'DESC')
      .limit(6)
      .all()
  })

</script>

<template>
  <div id="container" class="flex dark:bg-gray-800 dark:text-white px-40">
    <div id="main" class="flex-1 mr-64 p-10 min-h-screen">
      <NuxtPage />
    </div>
    <nav class="w-3/12 fixed right-0 top-0 h-screen bg-slate-500 dark:bg-orange-900 py-10 px-15 items-center">
      <div id="title">
        <NuxtLink to="/">
          <h1 class="text-xxl font-black text-center">craigpeters dot me</h1>
          <img src="/public/title-starbucks.gif" alt="" class="m-auto py-2">
        </NuxtLink>
      </div>
      <div id="images">
            <ul class="grid grid-cols-2 md:grid-cols-2 gap-4 p-4 place-items-center">
                <li v-for="image of data" :key="image.path">
                    <NuxtLink :to="image.path"><NuxtImg fit="cover" :src="image.pictures" width="300px" height="300px" class="rounded object-contain w-96"  />
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <ul id="socials" class="text-2xl p-5 text-center">
          <li><a href="https://letterboxd.com/craigmpeters/" target="_new"><font-awesome :icon="faLetterboxd" title="Letterboxd - craigmpeters" /></a></li>
          <li><a href="https://bsky.app/profile/craigpeters.me" target="_new"><font-awesome :icon="faBluesky" title="Blue Sky - craigpeters.me"/></a></li>
          <li><a href="https://github.com/craigmpeters" target="_new"><font-awesome :icon="faGithub" title="Github - craigmpeters"/></a></li>
          <li><a href="https://discordapp.com/users/283708674357198853" target="_new"><font-awesome :icon="faDiscord" title="Discord"/></a></li>
          <li><a href="mailto:craig@craigpeters.me" target="_new"><font-awesome :icon="faAt" title="E-Mail: craig@craigpeters.me" /></a></li>
          <li><a href="https://www.flickr.com/photos/craigmpeters/" target="_new"><font-awesome :icon="faFlickr" title="Flickr - craigmpeters" /></a></li>
          <li><a href="https://linkedin.com/in/craigmpeters" target="_new"><font-awesome :icon="faLinkedin" title="LinkedIn - craigmpeters" /></a></li>
        </ul>
      </nav>
   
  </div>

</template>

<style>
#socials li {
  display: inline-flex;
  padding: 0 0.2em;
}
</style>