# humphries-portfolio

Static React rebuild of Larry "Tre" Humphries' portfolio, based on the existing Webflow site and local reference captures.

## Stack

- React
- Vite
- TypeScript
- Global CSS
- Vitest + Testing Library

## Getting started

```bash
npm install
npm run prepare:assets
npm run dev
```

## Available scripts

- `npm run prepare:assets` copies the local reference images and captures into the app-friendly structure.
- `npm run dev` starts the Vite dev server.
- `npm run build` creates the production static build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint.
- `npm run test` runs the Vitest suite.

## Project structure

```text
src/
  components/
  sections/
  data/
  styles/
  assets/
public/
  images/
reference/
  screenshots/
  webflow-capture.pdf
scripts/
  normalize-images.mjs
```

## Notes

- The app is fully static. The contact form validates locally and opens the user's email client with a drafted message.
- Reference materials are preserved and copied into `reference/` by `npm run prepare:assets`.
