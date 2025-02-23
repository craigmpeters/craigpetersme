<template>
    <div>
        <h2 class="text-xl pb-2 pt-1 text-orange-500">{{ post.title }}</h2>
        <ContentRenderer v-if="post" :value="post" :excerpt=false tag="article"  />
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
    article p {
        margin-bottom: 0.5rem;
    }

</style>