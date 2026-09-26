import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Front matter schemas. Templates for new files live in /templates.
export default defineContentConfig({
  collections: {
    // Stand-alone pages, e.g. /about, /clarity, /clarity/privacy
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**/*.md',
        exclude: ['posts/**', 'images/**']
      },
      schema: z.object({
        title: z.string(),
        description: z.string().optional()
      })
    }),
    // Blog posts: content/posts/<slug>.md
    blog: defineCollection({
      type: 'page',
      source: 'posts/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        draft: z.boolean().default(false)
      })
    }),
    // Photo pages: content/images/<slug>.md
    images: defineCollection({
      type: 'page',
      source: 'images/**',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        draft: z.boolean().default(false),
        pictures: z.string()
      })
    })
  }
})
