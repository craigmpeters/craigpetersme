import { absoluteUrl, siteName, siteDescription, socialImage } from '~/utils/social.mjs'

export function useSocialMeta(page: any = ref(null), article = false) {
  const route = useRoute()
  const content = computed(() => unref(page))
  const title = computed(() => content.value?.title || siteName)
  const description = computed(() => content.value?.description || siteDescription)
  const image = computed(() => socialImage(content.value, route.path))
  const canonical = computed(() => absoluteUrl(route.path))
  useSeoMeta({
    title: () => title.value,
    description: () => description.value,
    author: 'Craig Peters',
    ogTitle: () => title.value,
    ogDescription: () => description.value,
    ogType: article ? 'article' : 'website',
    ogSiteName: siteName,
    ogLocale: 'en_GB',
    ogUrl: () => canonical.value,
    ogImage: () => image.value.url,
    ogImageAlt: () => image.value.alt,
    ogImageWidth: () => image.value.isDefault ? 1200 : null,
    ogImageHeight: () => image.value.isDefault ? 630 : null,
    twitterCard: 'summary_large_image',
    twitterTitle: () => title.value,
    twitterDescription: () => description.value,
    twitterImage: () => image.value.url,
    twitterImageAlt: () => image.value.alt,
    articleAuthor: article ? ['https://www.craigpeters.me/about'] : undefined,
    articlePublishedTime: () => article && content.value?.date
      ? new Date(content.value.date).toISOString() : undefined
  })
  useHead(() => ({ link: [{ rel: 'canonical', href: canonical.value }] }))
}
