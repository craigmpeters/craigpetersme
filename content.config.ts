import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      // Load every file inside the `content` directory
      source: 'posts/**',
      // Specify the type of content in this collection
      type: 'page',
      schema: z.object({
        date: z.date(),
        excerpt: z.object({
          type: z.string(),
          children: z.any(),
        })
      })
    }),
    images: defineCollection({
      source: 'images/**',
      type: 'page',
      schema: z.object({
        pictures: z.string(),
        date: z.date()
      })
    })
  }
})