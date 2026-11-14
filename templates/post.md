---
title: Post title
description: One or two sentences shown on the home page, the posts list and in search results.
date: 2026-01-01T00:00:00.000Z
draft: true
---

Opening paragraph. Keep it short – it's the first thing readers see.

<!--more-->

## A section heading

Body text. Images go in `public/uploads/` and are referenced from the site root:

![Describe the image for screen readers](/uploads/example.jpeg)

To embed a Bluesky post:

::bluesky{url="https://bsky.app/profile/craigpeters.me/post/POST_ID"}
::

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
