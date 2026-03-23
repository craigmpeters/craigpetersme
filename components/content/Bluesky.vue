<template>
    <div>
        <div class="bsky-embed" v-html="html" v-if="html"></div>
    </div>
</template>

<script setup lang="ts">

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

    onMounted(async () => {
        await nextTick()
        document.querySelector('script[src="https://embed.bsky.app/static/embed.js"]')?.remove()
        const script = document.createElement('script')
        script.src = 'https://embed.bsky.app/static/embed.js'
        script.async = true
        script.charset = 'utf-8'
        document.body.appendChild(script)
    })
</script>

<style>
</style>