# Multiphonics

A minimal personal blog at https://multiphonics.xyz, built with Next.js App Router and React Server Components.

## Development

Use Node.js 22. Run `npm ci`, then `npm run dev`.
For production, run `npm run build` followed by `npm start`.

Both `/` and `/about` call `connection()` to render on each request rather than being prerendered as static pages. The old `/about.html` and `/index.html` paths redirect to the new routes.

- `app/page.js`: blog home
- `app/about/page.js`: About page
- `components/Header.js`: shared navigation
- `app/globals.css`: shared typography and layout
- `public/`: self-hosted EB Garamond fonts and favicon assets

Vercel deploys commits to `main` using `vercel.json`. GitHub Pages cannot run the Next.js server; the root HTML files forward its visitors to the Vercel-hosted custom domain.
