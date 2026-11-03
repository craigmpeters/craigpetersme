# www.craigpeters.me blag
The Blog for craigpeters.me

This is a nuxt content blag
## Nuxt Studio (production sign-in)

Studio uses a GitHub OAuth App. Callback URL: `https://www.craigpeters.me/__nuxt_studio/auth/github`

Cloudflare Worker `craigpetersme` needs these set in **both** Settings → Build → Variables and secrets (build-time, so the module is included) **and** Settings → Variables and Secrets (runtime):

| Name | Value |
|---|---|
| `STUDIO_GITHUB_CLIENT_ID` | OAuth App client ID |
| `STUDIO_GITHUB_CLIENT_SECRET` | OAuth App client secret (secret) |
| `STUDIO_GITHUB_MODERATORS` | Comma-separated GitHub emails allowed to sign in |
| `NUXT_STUDIO_AUTH_SESSION_SECRET` | Random 64-char string, runtime only (secret) — overrides the build-derived session key |

Without the client ID/secret at build time, Studio is left out of the production build.

## Social sharing previews

Pages include server-rendered Open Graph and Twitter/X large-image card metadata,
canonical URLs, and article author/publication dates. Image selection is automatic:

1. Optional `shareImage` front matter (with optional `shareImageAlt`).
2. A photo page's `pictures` image, or the first image in an article's Markdown.
3. The branded 1200 × 630 `/social/default.png` card for text-only pages.

Use public image URLs or root-relative paths such as `/uploads/photo.jpeg`.
No `/public` prefix is needed. The editable default artwork is in
`public/social/default.svg`; regenerate its PNG after editing it with Sharp.
Check the selection logic with `node --test tests/social.test.mjs`.
Social networks may cache older previews after a deployment.
