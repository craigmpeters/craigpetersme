export default defineEventHandler(async(event) => {
    const query = getQuery(event)
    const res = await $fetch('https://embed.bsky.app/oembed', {
        query
    })

    return res
})