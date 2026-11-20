<template>
    <figure class="w-2/3">
        <NuxtImg :src="image.pictures" :alt="image.description" class="w-full" />
        <figcaption v-if="image.aiGenerated">
            <AiGeneratedCaption />
        </figcaption>
    </figure>
</template>

<script setup>
const route = useRoute()

const { data: image } = await useAsyncData(route.path, () => {
    return queryCollection('images')
        .path(route.path)
        .first()
    })

useSocialMeta(image, true)
</script>

<style lang="scss" scoped>

</style>
