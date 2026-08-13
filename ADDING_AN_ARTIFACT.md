# Adding an Artifact

Artifacts live in `src/content/artifacts/index.ts`.
Era definitions live in `src/content/eras/index.ts`.

Each artifact is one typed content record with optional media.

## Required metadata

- `id`: stable internal identifier
- `slug`: future-friendly public slug
- `title`
- `date.start`
- `sortDate`: ISO-style date string used for chronology
- `type`: `project | experiment | experience | writing`
- `domains`: one or more of `physical | controls | embedded | software | web | operations | data | media | design | aerospace`
- `summary`
- `display.weight`: `marker | card | feature`

## Optional metadata

- `subtitle`
- `date.end`
- `date.precision`
- `era`
- `story`
- `status`
- `highlights`
- `links`
- `media`
- `detail`
- `visibility`

## Marker, Card, Feature

- `marker`: compact timeline row
- `card`: medium archive entry with optional media
- `feature`: largest editorial treatment with optional media

No homepage or route-specific conditionals should be needed. Rendering should follow metadata, especially `display.weight`.

## Media

Supported media types:

- `image`
- `video`
- `pdf`
- `iframe`
- `preserved-site`
- `interactive`
- `audio`

Media is optional. If no media is present, or if the media type does not have an inline preview yet, the timeline falls back to a deliberate placeholder instead of breaking layout.

Public asset locations should live under `public/artifacts/<slug>/`.

Examples:

- `public/artifacts/2014-space-exploration/original-site/`
- `public/artifacts/homeems/`
- `public/artifacts/predictable-basil/`

## Detail pages

Use:

- `detail.enabled: true` when the artifact should eventually support a dedicated detail route
- `detail.template` to declare the intended page shape

Phase 1 does not require implementing `/artifacts/:slug`.

## Public-safety review

Use `visibility.safeForPublic` when a record needs extra caution:

- `true`: public-safe
- `false`: do not publish yet
- `'pending-review'`: safe summary only, with limited detail/media

If `visibility.published` is explicitly set to `false`, the artifact is excluded from the public archive.

## Chronology and sorting

- `sortDate` controls timeline order
- `date.start` and `date.end` control display labeling
- Use ISO-style strings such as `2026-07-01`
- If the date is approximate, set `date.precision: 'approximate'`

The timeline sorts chronologically and groups by year automatically. If the artifact has an `era`, the timeline inserts the correct era marker without needing page edits.

## Registering a new artifact

1. Add the new record to the `artifacts` array in `src/content/artifacts/index.ts`.
2. Add or reuse an `era` from `src/content/eras/index.ts`.
3. Add optional media files under `public/artifacts/<slug>/` if approved.
4. Set `display.weight` to control marker/card/feature rendering.
5. Set `visibility.safeForPublic` if the content needs review.
6. Confirm `sortDate` is correct.
7. Run `npm run lint`, `npm run test`, and `npm run build`.

Adding an artifact should be boring: one record, optional media, no homepage surgery.
