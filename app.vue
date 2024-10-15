<script setup>
  const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <div>
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
    <NuxtPage />
    <pre>{{ navigation }}</pre>
  </div>
</template>
