<script setup>

  // Content Queries
  const postQuery = queryContent('posts')
  const imageQuery = await queryContent('images').find()

  
</script>

<template>
  <div>
    <<NuxtLink to="/">
      <h1 class="text-7xl font-black text-center">Craigs Blag</h1>
    </NuxtLink>
    
    <nav>
      <h2>Images</h2>
      <ContentList path="/images" v-slot="{ list }">
        <ul>
          <li v-for="link of list" :key="link._path">
            <NuxtLink :to="link._path"><NuxtImg :src="link.pictures" sizes="100px"  />
            </NuxtLink>
            
            <img  />
          </li>
        </ul>
      </ContentList>
    </nav>
    <NuxtPage />
  </div>
</template>
