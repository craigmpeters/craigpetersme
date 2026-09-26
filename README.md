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
