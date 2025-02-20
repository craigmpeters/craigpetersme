<script setup>
    // Get Image List
    const query = { path: '/images', limit: 6, sort: [{ date: -1 }] }

  // Content Queries
  // const postQuery = queryContent('posts')

  // Font Awesome
  import {faLetterboxd, faBluesky, faGithub} from '@fortawesome/free-brands-svg-icons'

</script>

<template>
  <div>
    <nav>
    <NuxtLink to="/">
      <h1 class="text-7xl font-black text-center">Craigs Blag</h1>
    </NuxtLink>
    </nav>
    <div>
      <NuxtPage />
    </div>
    <div id="sidebar">
      <div id="images">
            <h1 class="decoration-sky-500 text-xl">Images</h1>
            <ContentList :query="query" v-slot="{ list }">
            <ul class="grid grid-cols-2 md:grid-cols-6 gap-3 p-4 place-items-center">
                <li v-for="link of list" :key="link._path">
                    <NuxtLink :to="link._path"><NuxtImg fit="cover" :src="link.pictures" width="300px" height="300px" class="rounded object-contain h-48 w-96"  />
                    </NuxtLink>
                </li>
            </ul>
            </ContentList>
        </div>
        <ul id="socials">
          <li><a href="https://letterboxd.com/craigmpeters/"><font-awesome :icon="faLetterboxd" />craigmpeters</a></li>
          <li><a href="https://bsky.app/profile/craigpeters.me"><font-awesome :icon="faBluesky" />@craigpeters.me</a></li>
          <li><a href="https://github.com/craigmpeters"></a><font-awesome :icon="faGithub" /></li>
        </ul>
    </div>
   
  </div>

</template>
