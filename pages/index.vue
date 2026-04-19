<template>
  <div class="space-y-12">

    <!-- Recent Writing -->
    <section>
      <div class="flex items-baseline justify-between mb-4">
        <h2 class="text-xl font-bold">Recent Writing</h2>
        <NuxtLink to="/posts" class="text-sm text-orange-500 hover:text-orange-400 transition-colors">All posts &rarr;</NuxtLink>
      </div>
      <ul class="divide-y divide-gray-200 dark:divide-gray-600">
        <li v-for="post of posts" :key="post.path" class="py-4">
          <h3 class="text-lg pb-1 text-orange-500 hover:text-orange-400 transition-colors">
            <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.description }}</p>
        </li>
      </ul>
    </section>

    <!-- Recent Photos -->
    <section>
      <div class="flex items-baseline justify-between mb-4">
        <h2 class="text-xl font-bold">Recent Photos</h2>
        <NuxtLink to="/images" class="text-sm text-orange-500 hover:text-orange-400 transition-colors">All photos &rarr;</NuxtLink>
      </div>
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
    </section>

  </div>
</template>

<script setup>
  const [{ data: posts }, { data: images }] = await Promise.all([
    useAsyncData('indexPosts', () =>
      queryCollection('blog').order('date', 'DESC').limit(3).all()
    ),
    useAsyncData('indexImages', () =>
      queryCollection('images').order('date', 'DESC').limit(6).all()
    )
  ])
</script>
