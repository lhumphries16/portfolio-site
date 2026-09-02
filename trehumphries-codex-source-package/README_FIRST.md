# TreHumphries.com — Codex Source Package

This package is the source-of-truth bundle for the first planning pass of the trehumphries.com redesign.

## Use it this way

1. Copy this entire folder into the root of the existing `trehumphries.com` repository, or make it available to Codex alongside the repo.
2. Add the separately uploaded `photo_assets.zip` to `source/photos/photo_assets.zip` if it is not already present.
3. Give Codex the contents of `KICKOFF_PROMPT.md` as its first instruction.
4. Codex should **audit and plan first**. It should not redesign the production site on the first pass.
5. When Codex produces `DESIGN_PLAN.md` and `PORTFOLIO_INVENTORY.md`, review those before authorizing implementation.

## Source hierarchy

When sources conflict, prefer them in this order:

1. Approved case-study/source material in this package.
2. Attached customer-facing offer PDFs.
3. Facts observable on the current live project sites.
4. Existing trehumphries.com project copy, only where it remains accurate.
5. Inference — clearly labeled as inference, never presented as fact.

Do not invent performance metrics, testimonials, scope, client results, credentials, or business claims.
