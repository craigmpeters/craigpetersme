<template>
  <div>
    <h2 class="text-2xl font-bold mb-6">Photos</h2>
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
      <NuxtLink v-for="image of images" :key="image.path" :to="image.path" class="block group">
        <NuxtImg
          fit="cover"
          :src="image.pictures"
          :alt="image.title"
          width="300"
          height="300"
          class="w-full aspect-square object-cover rounded group-hover:opacity-90 transition-opacity"
        />
        <p class="text-sm mt-1 text-gray-500 dark:text-gray-400 truncate">{{ image.title }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const { data: images } = await useAsyncData('allImages', () =>
    queryCollection('images').order('date', 'DESC').all()
  )
</script>
