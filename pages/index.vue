<template>
    <div>
        <div id="articles">
            <ul>
                <li v-for="post of posts" :key="post.path">
            
                    <h2 class="text-xl pb-2 pt-3 text-orange-500"><NuxtLink :to="post.path">{{ post.title }}</NuxtLink></h2>
                    {{ post.description }}
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