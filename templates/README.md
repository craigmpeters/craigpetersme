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

## Article image layout

Images are responsive and have no lightbox. Alt text is not shown as a caption.

```md
![Email Icon](/uploads/IMG-3805.jpeg){float="left" size="small"}

![A mountain landscape](/uploads/photo.jpeg){caption="Looking towards Loch Tulla"}
```

Use `float="left"` or `float="right"` to wrap desktop text around an image.
Floats stack and centre below 1024px. `size="small"` caps width at 200px,
`medium` at 320px, and `full` fills the article (the default). Floats default
to medium when size is omitted. Explicit width/height dimensions are supported;
images always shrink to fit and retain their proportions. Captions are opt-in
using `caption`, independently of accessible alt text. No front matter is needed.

Below 768px, a blurred copy of each image extends behind it to both screen
edges. The original stays sharp at its chosen size, with captions below the
background. This is automatic; desktop images keep their existing layout.
