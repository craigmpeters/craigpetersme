<template>
    <div>
       <NuxtImg :src="image.pictures"  :alt="image.description" class="w-2/3"/>
    </div>
</template>

<script setup>
const route = useRoute()

const { data: image } = await useAsyncData(route.path, () => {
    return queryCollection('images')
        .path(route.path)
        .first()
    })
</script>

<style lang="scss" scoped>

</style>