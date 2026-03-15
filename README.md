# personal-website

A modern, minimal personal website built with Astro and prepared for static deployment on Cloudflare Pages.

## Stack

- Astro
- Astro sitemap integration
- Static output for Cloudflare Pages

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Run type and content checks:

   ```bash
   npm run check
   ```

4. Build the production site:

   ```bash
   npm run build
   ```

## Formatting and pre-commit

This repo uses Prettier for consistent formatting across the main text-based file types in the project, including:

- `.astro`
- `.ts`
- `.mjs`
- `.css`
- `.json`
- `.md`
- `.yaml`
- `.svg`

Available commands:

```bash
npm run format
npm run format:check
```

To enable automatic formatting before each commit with `pre-commit`:

1. Create a local virtual environment:

   ```bash
   python3 -m venv .venv
   ```

2. Install `pre-commit` into that environment:

   ```bash
   .venv/bin/python -m pip install pre-commit
   ```

3. Install the Git hook:

   ```bash
   .venv/bin/pre-commit install
   ```

4. Format the whole repo once:

   ```bash
   .venv/bin/pre-commit run --all-files
   ```

After that, the pre-commit hook will run automatically on every commit and apply the same formatting rules.

GitHub Actions also runs the same `pre-commit` checks in CI on pushes to `main` and on pull requests:

- Workflow file: `.github/workflows/pre-commit.yml`
- CI command: `pre-commit run --all-files --show-diff-on-failure`

## Project structure

```text
src/
  components/   Reusable UI pieces
  config/       Centralized personal data and projects
  content/      Blog posts for Astro content collections
  layouts/      Shared page layout
  pages/        Route-based Astro pages
```

## Where to edit personal info

Update your personal details, social links, site URL, and project cards in:

`src/config/site.ts`

That file is the main editing surface for:

- name
- title
- short bio
- long bio
- email
- GitHub
- LinkedIn
- X/Twitter
- projects

## Blog scaffold

A lightweight blog scaffold is included using Astro content collections.

- Content folder: `src/content/blog/`
- Collection schema: `src/content.config.ts`
- Blog index: `src/pages/blog/index.astro`

If you do not want a blog later, you can remove the `blog` pages and content collection without affecting the rest of the portfolio.

## Cloudflare Pages deployment

Use these settings when creating the Cloudflare Pages project:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`

This site builds to static files, which makes it compatible with free hosting on Cloudflare Pages.

After you create the Pages project, update the production URL in `src/config/site.ts` and `astro.config.mjs` to match your real domain, for example:

- `https://personal-website-963.pages.dev`
- or your custom domain

## Notes

- Dark mode is built in and stored in local browser storage.
- SEO basics, Open Graph metadata, and sitemap generation are included.
- No backend, database, auth, or analytics are required.
