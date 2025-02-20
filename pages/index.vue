<template>
    <div>
        <div id="articles">
            <ContentList :query="blogQuery" v-slot=" {list}">
                <ul>
                    <li v-for="link of list" :key="link._path">
                        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                    </li>
                </ul>
            </ContentList>
        </div>
        <div id="main">
            <ContentRenderer
            v-if="page"
            :value="page"
            />
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()

    // Get index post
    const { data: page } = await useAsyncData('page-' + route.path, () => {
        return queryCollection('content').path(route.path).first()
    })


    // const imageQuery= await queryContent('images').limit(6).find()

    const blogQuery = { path: '/posts', limit: 6, sort: [{ date: -1 }]}
     
</script>

<style lang="scss" scoped>

</style>