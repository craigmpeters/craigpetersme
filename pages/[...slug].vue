<template>
  <div>
    <h2 class="text-3xl pb-2 pt-1 text-orange-500">{{ page?.title }}</h2>
    <ContentRenderer v-if="page" :value="page" tag="article" class="space-y-4 text-base" id="article" />
  </div>
</template>

<script setup>
  const route = useRoute()

  const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('docs').path(route.path).first()
  })
</script>

<style>
  #article > h2 {
    font-size: 1.5rem;
  }

  #article > ul li {
    margin-left: 1rem;
    list-style-type: initial;
  }
</style>
