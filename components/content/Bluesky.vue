<template>
    <div>
        <div class="bsky-embed" v-html="html" v-if="html"></div>
    </div>
</template>

<script setup lang="ts">

    // get color mode
    const colorMode = useColorMode()
    console.log (colorMode)


    const props = defineProps({
        url: {type: String, required: true}
    })

    const {data: html} = await useAsyncData("bluesky-embed", async () => {
        const res = await $fetch<{ html: string }>('/api/bluesky-proxy', {
            method: 'GET',
            query: {
                url: props.url
            }
        })
        return res.html
        
    })
</script>

<style>
</style>