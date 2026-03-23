<template>
    <div>
        <div id="articles">
            <ul class="divide-y divide-gray-200 dark:divide-gray-600">
                <li v-for="post of posts" :key="post.path" class="py-5">
                    <h2 class="text-xl pb-1 text-orange-500 hover:text-orange-400 transition-colors"><NuxtLink :to="post.path">{{ post.title }}</NuxtLink></h2>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.description }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const { data: posts } = await useAsyncData('blogIndex', () => {
    return queryCollection('blog')
      .order('date' , 'DESC')
      .limit(3)
      .all()
    })

</script>

<style lang="scss" scoped>

</style>