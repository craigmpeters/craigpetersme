# Content templates

Copy a template into `content/` (or create the file in Nuxt Studio and paste the front matter).

| Template | Copy to | URL |
|---|---|---|
| `post.md` | `content/posts/<slug>.md` | `/posts/<slug>` |
| `image.md` | `content/images/<slug>.md` | `/images/<slug>` |
| `page.md` | `content/<path>.md` | `/<path>` |

Rules (enforced by `content.config.ts`):

- `date` must be ISO 8601 UTC, e.g. `2026-04-22T00:00:00.000Z`. Other formats (like `2026-04-22 00:00:00`) make Nuxt Studio report a conflict with GitHub.
- `draft: true` hides a post/photo from the home page and lists; set it to `false` to publish.
- Use lowercase-hyphenated slugs for file names.
- Put images in `public/uploads/` and reference them as `/uploads/<file>`; resize large photos before uploading (originals over ~2 MB slow the build).
- Don't add Hugo front matter (`+++`, `aliases`, `seo: … file`) or trailing spaces at the end of lines.
