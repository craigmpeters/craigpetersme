export const siteUrl = 'https://www.craigpeters.me'
export const siteName = 'Craig Peters · craigpeters.me'
export const siteDescription = 'Thoughts, discoveries and occasional tangents from Craig Peters.'
export const defaultImage = '/social/default.png'

export function absoluteUrl(value, path = '/') {
  if (typeof value !== 'string' || !value.trim()) return undefined
  try {
    const url = new URL(value, new URL(path, siteUrl))
    return ['http:', 'https:'].includes(url.protocol) ? url.href : undefined
  } catch { return undefined }
}

// Nuxt Content stores Markdown as a compact minimark tree. Also accept the
// expanded AST so images in nested paragraphs, links and components work.
export function firstImage(node) {
  if (!node || typeof node !== 'object') return undefined
  const compact = Array.isArray(node)
  const tag = compact ? node[0] : node.tag
  const props = compact ? node[1] : node.props
  if (['img', 'nuxt-img', 'NuxtImg'].includes(tag) && props?.src) {
    return { src: props.src, alt: props.alt || '' }
  }
  const children = compact ? node.slice(2) : (node.children || node.value || [])
  for (const child of children) {
    const found = firstImage(child)
    if (found) return found
  }
}

export function socialImage(page, path = '/') {
  const first = firstImage(page?.body)
  const candidates = [
    { src: page?.shareImage, alt: page?.shareImageAlt || page?.title },
    { src: page?.pictures, alt: page?.description || page?.title },
    first
  ]
  for (const candidate of candidates) {
    const url = absoluteUrl(candidate?.src, path)
    if (url) return { url, alt: candidate.alt || page?.title || siteName, isDefault: false }
  }
  return { url: absoluteUrl(defaultImage), alt: 'Craig Peters — thoughts, discoveries & occasional tangents', isDefault: true }
}
