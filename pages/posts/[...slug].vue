<template>
    <div>
        <nav class="text-sm pb-4">
            <NuxtLink to="/" class="text-gray-400 hover:text-orange-500 transition-colors">&larr; Back</NuxtLink>
        </nav>
        <h1 v-if="post" class="article-title">{{ post.title }}</h1>
        <ContentRenderer v-if="post" :value="post" :excerpt=false tag="article" class="article-prose"  />
    </div>
</template>

<script setup>
    const route = useRoute()

    const { data: post } = await useAsyncData(route.path, () => {
        return queryCollection('blog')
            .path(route.path)
            .first()
        })

useSocialMeta(post, true)
</script>
