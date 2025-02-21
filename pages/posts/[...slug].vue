<template>
    <div>
        <h2 class="text-xl pb-2 pt-1 text-orange-500">{{ post.title }}</h2>
        <ContentRenderer v-if="post" :value="post" :excerpt=false />
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