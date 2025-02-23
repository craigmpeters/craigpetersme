<template>
    <div>
        <nav class="text-sm">
            <NuxtLink to="/">Back</NuxtLink>
        </nav>
        <h2 class="text-3xl pb-2 pt-1 text-orange-500">{{ post.title }}</h2>
        <ContentRenderer v-if="post" :value="post" :excerpt=false tag="article" class="space-y-4 text-"  />
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

<style scoped>

</style>