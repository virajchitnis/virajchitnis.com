# virajchitnis.com

Personal site for Viraj Chitnis. Astro, static output, deployed to Cloudflare Pages via GitHub Actions.

## Editing content

The bio, tagline, links, and "Selected work" cards are plain Markdown/YAML — no code changes needed:

- `src/content/profile.md` — name, tagline, and links live in the frontmatter; the bio is the file body.
- `src/content/work/*.md` — one file per Selected work card (`title`, `description`, optional `url`, `order`). Add or delete a file to add or remove a card.

Edit these directly in GitHub's web editor or locally, then commit. A typo or missing field fails the build rather than the live site, since both collections are schema-validated (`src/content.config.ts`).

Portrait, favicon, and OG image live in `src/assets/` and `public/`.

## Local development

Requires Node ≥22.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # serve the production build locally
npm run check     # typecheck (astro check)
npm run test      # Playwright smoke test (against a running preview build)
npm run lint:links  # crawl ./dist for dead links
npm run lhci      # Lighthouse CI against a preview build
```

If you don't have Node installed, all of the above can run inside the official Node Docker image with the project mounted as a volume.

## Deployment

Push to `main` deploys to production automatically. Every pull request gets its own preview URL. Both go through the same test gate first (typecheck, build, link check, Lighthouse budgets, Playwright smoke test) — see `.github/workflows/deploy.yml`.

### One-time setup (not yet done — required before the first successful deploy)

**GitHub repository:**
- The repo's default branch is still `master` from the old site; this rewrite lives on `main`. Switch the default branch to `main` in *Settings → General → Default branch*.

**Cloudflare Pages:**
1. Create a Direct Upload Pages project named `virajchitnis`: `wrangler pages project create virajchitnis`, or via the dashboard (Workers & Pages → Create → Pages → Direct Upload).
2. Create a scoped API token: *My Profile → API Tokens → Create Token*, permission *Account → Cloudflare Pages → Edit*.
3. Add two repo secrets (*Settings → Secrets and variables → Actions*): `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
4. Attach the custom domain in the Pages project's *Custom domains* tab — since `virajchitnis.com` is already on this Cloudflare account, the DNS record is created automatically.

**Contact form (Fastmail + Turnstile):**
1. Create a Fastmail API token scoped to *Email* and *Email Submission*: `app.fastmail.com` → *Settings → Security → API tokens*.
2. Create a Turnstile widget in the Cloudflare dashboard for `virajchitnis.com`.
3. In the Cloudflare Pages project's environment variables (both Production and Preview), set:
   - `FASTMAIL_API_TOKEN` (secret) — the token from step 1.
   - `TURNSTILE_SECRET_KEY` (secret) — from the Turnstile widget.
   - `PUBLIC_TURNSTILE_SITE_KEY` (plain variable, must be set at build time) — the Turnstile site key.

No MX or DNS changes — mail keeps flowing through Fastmail exactly as it does today.

**Analytics:**
1. Enable Cloudflare Web Analytics for `virajchitnis.com` in the dashboard and copy the beacon token.
2. Set `PUBLIC_CF_ANALYTICS_TOKEN` (plain variable, build-time) in the Pages project's environment variables.

Until the Turnstile and Analytics variables are set, the site still builds and deploys fine — the contact form's Turnstile widget and the analytics beacon simply don't render (checked via `import.meta.env` at build time), so nothing breaks by deploying before this step is done.

### Verifying after first deploy

- Submit the contact form and confirm the message arrives at `mail@virajchitnis.com` with reply-to set to the submitter.
- Confirm an empty/invalid Turnstile token is rejected (try with the widget blocked or a stale token).
- Check Cloudflare Web Analytics for a recorded page view.
- Confirm the sitemap (`/sitemap-index.xml`) and `robots.txt` are reachable, and that a link-preview tool renders the OG card correctly.
