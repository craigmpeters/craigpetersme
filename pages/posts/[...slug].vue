<template>
    <div>
        <nav class="text-sm pb-4">
            <NuxtLink to="/" class="text-gray-400 hover:text-orange-500 transition-colors">&larr; Back</NuxtLink>
        </nav>
        <h2 class="text-3xl pb-2 pt-1 text-orange-500">{{ post.title }}</h2>
        <ContentRenderer v-if="post" :value="post" :excerpt=false tag="article" class="space-y-4 text-base" id="article"  />
    </div>
</template>

<script setup>
    const route = useRoute()

    const { data: post } = await useAsyncData(route.path, () => {
        return queryCollection('blog')
            .path(route.path)
            .first()
        })
</script>

<style>

    #article  > h2 {
        font-size: 1.5rem;
    }

    #article > ul li {
        margin-left: 1rem;
        list-style-type:initial
    }
</style>