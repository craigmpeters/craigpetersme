<template>
    <div class="blueSkyEmbed" v-html="html" v-if="html">

    </div>
</template>

<script setup lang="ts">
    const html = ref<string | null>(null)
    const props = defineProps({
        url: {type: String, required: true}
    })

    const { data: result, error } = await useFetch('https://embed.bsky.app/oembed', {
        method: 'get',
        query: {
            url: props.url
        }
    })
    html.value = (result?.value as { html?: string })?.html ?? null

</script>

<style scoped>

</style>