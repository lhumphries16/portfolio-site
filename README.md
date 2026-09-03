# trehumphries.com

Static portfolio site for Tre Humphries, built with React, TypeScript, Vite, and React Router, and deployed to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm test -- --run
npm run build
```

## Deployment

- Platform: Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`
- Static redirects and headers: `public/_redirects`, `public/_headers`

## Route structure

- `/` home
- `/web` web offer
- `/controls` controls offer
- `/work` selected work index
- `/work/homeems` flagship case study
- `/work/brazilian-sweet-bites-order-system` secondary case study
- `/about` about page
- `/contact` contact page

Legacy public URLs are preserved with redirects in both `src/App.tsx` and `public/_redirects`.

## Where content lives

- Global brand, navigation, contact, and metadata settings: `src/data/profile.ts`
- Page copy and CTA definitions: `src/data/site-content/content.ts`
- Portfolio and case-study records: `src/data/site-content/portfolio.ts`
- Production images and documents: `public/images/`, `public/cv/`

## Updating a portfolio project

1. Edit the matching project record in `src/data/site-content/portfolio.ts`.
2. If the project uses a case study, update the `caseStudy` object in the same record.
3. Add or replace approved production images under `public/images/portfolio/<project>/`.
4. If the change affects shared page copy or CTA labels, update `src/data/site-content/content.ts` or `src/data/profile.ts`.
5. Run `npm run lint`, `npm test -- --run`, and `npm run build`.
