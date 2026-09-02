# DESIGN_PLAN

Source basis for this plan:
- Approved brief and strategy docs in [`trehumphries-codex-source-package/`](./trehumphries-codex-source-package/)
- Approved HomeEMS case-study source in [`trehumphries-codex-source-package/source/case-studies/homeems.md`](./trehumphries-codex-source-package/source/case-studies/homeems.md)
- Customer-facing controls offer PDFs in [`trehumphries-codex-source-package/source/offers/`](./trehumphries-codex-source-package/source/offers/)
- Current repository content and assets
- Live site captures taken on Wednesday, September 2, 2026 in [`output/playwright/`](./output/playwright/)

## Recommended final sitemap

- `/` homepage
- `/web` Web & Digital offer page
- `/controls` Controls Engineering offer page
- `/work` curated work index
- `/work/homeems` flagship case study
- `/work/brazilian-sweet-bites-order-system` supporting case study
- `/work/mayara-miranda` optional supporting case study only if stronger approved interior/project visuals are provided; otherwise keep as a strong project card on `/work`
- `/about`
- `/contact`

Redirect plan from current routes:
- `/industrial` -> `/controls`
- `/consulting` -> `/controls`
- `/projects` -> `/work`
- `/client-work` -> `/work`
- `/experience` -> `/about` or `/controls` depending on final content split
- `/index` and `/living-cv` -> `/about` or `/work`

## Homepage content hierarchy

1. Opening reputation block
- Tre Humphries name, one-sentence through-line, and two immediately clear paths
- Primary CTA: `Schedule a Project Call`
- Secondary CTA: `Explore Controls Engineering`

2. Selected proof
- HomeEMS gets dominant visual weight
- Two smaller supporting proofs beside or below it
- Best supporting pair now: Brazilian Sweet Bites Order System and Mayara

3. Web & Digital front-door offer
- Fixed-Scope Website & Search Foundation
- Who it is for
- What is included
- Starting-price framing
- CTA to `/web`

4. Controls Engineering credibility block
- Short bounded-offer summary
- Two offer cards: Controls Audit / Design-for-Hire and Process & Information Flow Audit
- 3-4 selected controls proof cards
- CTA to `/controls`

5. Personal credibility
- Short biography and portrait
- Mechanical foundation, controls background, systems thinking, clean handoff

6. Final conversion section
- Scheduler-first CTA
- Secondary email path

## Web & Digital page structure

1. Hero
- Positioning for established service businesses and local brands
- Fixed-scope, client-owned delivery
- `Schedule a Project Call`

2. Who this is for
- Established service businesses
- Local brands with real operations
- Businesses whose real-world quality exceeds their current web presence

3. Core offer
- Strategy and site architecture
- Responsive custom design/build
- Core service or offering pages
- Intake/contact flow
- Search foundation
- Analytics/Search Console where appropriate
- Launch and handoff

4. Selected web proof
- HomeEMS large
- Brazilian Sweet Bites Order System medium
- Mayara and Brazilian Sweet Bites as supporting cards
- All Seasons optional legacy card only

5. How projects work
- Scope
- Build
- Review
- Launch
- Handoff

6. Pricing section
- Website engagements typically start around `$3,000`
- Fixed fee
- No hourly pricing
- No required retainer

7. Boundaries / FAQ
- Not a full-service marketing agency
- No indefinite web ownership
- Additional workflow/search work separately scoped

8. Final CTA
- `Schedule a Project Call`
- `Send Project Details`

## Controls Engineering page structure

1. Hero
- Serious technical positioning
- Defined problem, defined deliverable, clean handoff
- `Schedule a Controls Consultation`

2. Offer surface
- Controls Audit
- Controls Design-for-Hire
- Process & Information Flow Audit

3. Offer details
- Good-fit conditions
- Typical review/design elements
- Deliverables
- Boundaries
- Timing and fee ranges from the approved PDFs

4. Controls proof
- GAF Roads / Standard Industries
- Mainstream HVAC controls
- Mainstream internal tooling / engineering workflow software
- Innerspec
- Avion only if used carefully as secondary background proof

5. How engagements work
- Scope confirmation
- Independent review/design work
- Walkthrough and clean close

6. Boundaries
- No open-ended support
- No staff augmentation positioning
- Implementation separately scoped if needed

7. Final CTA
- `Schedule a Controls Consultation`
- `Email Tre`

## Work / gallery structure

Purpose:
- Curated sales proof, not an archive

Recommended layout:
- Flagship case study
- Supporting case studies
- Supporting project cards
- Controls proof cards

Do not preserve:
- full "living CV" behavior
- equally weighted archive grid
- school and hobby artifacts in front-line buyer paths

Possible `/work` grouping:
- `Flagship`
- `Web & Digital`
- `Controls Engineering`
- optional `Selected archive` only if it helps the About page rather than sales conversion

## Case-study hierarchy

Flagship:
- HomeEMS

Supporting case studies:
- Brazilian Sweet Bites Order System
- One controls proof page later if Tre can provide one stronger public-safe artifact set

Supporting project cards:
- Mayara
- Brazilian Sweet Bites
- All Seasons
- GAF Roads / Standard Industries
- Mainstream HVAC controls
- Mainstream internal tooling
- Innerspec

## About / contact structure

### About
- Short personal intro with portrait
- Mechanical engineering foundation
- Controls, software, and operations overlap
- Why Tre works well on bounded scopes
- Quiet geography note: based in New Jersey, working across the U.S.

### Contact
- One shared contact page with two CTA variants
- Web path: `Schedule a Project Call`
- Controls path: `Schedule a Controls Consultation`
- Secondary email path
- Brief intake guidance by audience

## Scheduling CTA strategy

- Use scheduler as the primary CTA across the site
- Use audience-specific labels, not one generic "contact me"
- Keep email as the fallback path
- Do not make phone the primary sales path
- Track CTA variants separately:
  - web project call
  - controls consultation
  - send project details

## Pricing presentation

Web:
- `Website engagements typically start around $3,000`
- Fixed scope, fixed fee
- No hourly rate

Controls:
- Controls Audit / Design-for-Hire: commonly `$3,000-$15,000`
- Process & Information Flow Audit: typically `$5,000-$10,000`
- Frame ranges as common engagement parameters, not promises

## Visual direction and system

Shared identity:
- premium independent practice
- commercially credible
- calm and direct
- technically literate

Recommended visual split inside one system:
- Web side: warmer, more photographic, more commercially polished
- Controls side: more restrained, denser information rhythm, diagrammatic accents

Recommended system characteristics:
- warm neutrals plus deep navy / slate foundation
- one strong accent family, likely red-oxide or muted signal red, not startup purple
- typography with a sturdy sans core and a restrained serif accent, not a design-school art direction exercise
- real photography and captured interfaces as proof
- large, clean blocks with disciplined spacing

Avoid:
- glossy SaaS minimalism
- fake dashboards
- icon-wall service sections
- loud gradients
- contractor cliches

## Responsive behavior principles

- On mobile, the first screen must still clarify Web vs Controls without a gimmicky chooser
- CTA stays visible early on every audience page
- Featured case study stacks before supporting proof
- Proof cards should collapse cleanly without making screenshots unreadable
- Case-study screenshots need intentional crops for mobile, not raw desktop shrinks
- Contact/scheduling blocks should stay short and decisive on mobile

## Reusable case-study / project data model

Recommended TypeScript content model:

```ts
type ProofAsset = {
  kind: 'photo' | 'screenshot' | 'ui' | 'diagram';
  src: string;
  alt: string;
  caption?: string;
  audience?: 'web' | 'controls' | 'both';
  approvedForPublic: boolean;
  priority?: 'hero' | 'supporting' | 'archive';
};

type SourceRef = {
  kind: 'approved-md' | 'offer-pdf' | 'live-site' | 'repo-asset';
  pathOrUrl: string;
  notes?: string;
};

type PortfolioItem = {
  slug: string;
  title: string;
  category: 'web' | 'controls' | 'process' | 'brand';
  treatment: 'flagship' | 'medium-case-study' | 'project-card' | 'omit';
  buyerProof: string;
  summary: string;
  factualHighlights: string[];
  claimsToAvoid: string[];
  sourceRefs: SourceRef[];
  assets: ProofAsset[];
  ctaVariant: 'project-call' | 'controls-consult';
};
```

## Technical implementation approach

- Stay on the existing Vite + React + TypeScript + React Router stack
- Keep static deployment to Cloudflare Pages unless a concrete constraint appears
- Use typed local content modules rather than adding a CMS
- Replace the current broad artifact/archive model with a simpler buyer-focused content model
- Keep metadata handling, accessible layout shell, and route-level structure
- Add redirects from legacy routes
- Preserve lean dependencies

Implementation note:
- `README.md` says SPA fallback uses `public/_redirects`, but the repository currently shows `public/_headers` and no visible `_redirects` file. Routing/deploy config should be verified during implementation.

## Current components / content worth retaining

Code and structure:
- `src/App.tsx` route shell and lazy-loading pattern
- `src/components/AppLayout.tsx`
- `src/components/RouteMeta.tsx`
- `src/components/ScrollManager.tsx`
- the existing typed content pattern in `src/data/types.ts`

Reusable UI pieces:
- Header/footer shell structure
- contact CTA pattern
- media/figure components

Content worth retaining in some form:
- public-safe controls images already in `public/images/`
- HomeEMS and All Seasons proof captures already in repo
- factual consulting offer ranges and boundaries already reflected in `src/data/consultingContent.ts`

## Current components / content worth removing

- "living CV" / "index" framing as a major user path
- broad archive-first positioning
- "Whole-System Engineer" as the homepage lead message
- experiment-forward homepage emphasis
- current `/projects` R&D framing in the main buyer journey
- copy that makes web, controls, and experiments feel equally important commercially

## Exact live assets / screenshots proposed for use

Production-candidate proof captures from Wednesday, September 2, 2026:
- `output/playwright/homeems-home-desktop-full.png`
- `output/playwright/homeems-service-area-desktop-full.png`
- `output/playwright/homeems-gallery-desktop-full.png`
- `output/playwright/homeems-contact-desktop-full.png`
- `output/playwright/bsb-order-desktop-full.png`
- `output/playwright/mayara-home-desktop-full.png`
- `output/playwright/bsb-home-desktop-full.png`
- `output/playwright/allseasons-home-desktop-full.png`

Best HomeEMS moments to reuse:
- homepage hero and emergency CTA
- service-area map block
- contact form with photo-upload field
- gallery grid with real restoration imagery

Internal archive / before-redesign record:
- `output/playwright/trehumphries-desktop-full.png`
- `output/playwright/trehumphries-mobile-full.png`
- `output/playwright/tre-industrial-desktop-full.png`
- `output/playwright/tre-web-desktop-full.png`

## Photo archive inventory

`photo_assets.zip` exists at repo root and is already extracted to `photo_assets/`.

Inventory:
- `avion_3d_printed_drone_bizcard_holder.JPG`
- `avion_custom_laser_cut_fuselage_folding_shell.jpg`
- `avion_drone_3dprint_flir_mount_demo.jpg`
- `college_rc_glider_1.png`
- `college_rc_glider_2.png`
- `college_rc_glider_3.png`
- `flying_butterfly.jpg`
- `flying_butterfly_controller.png`

Recommendation:
- Do not use these as front-line Web & Digital proof
- Use only selectively for About/background/archive support if needed

## Genuine missing inputs that block implementation

Not blocking planning:
- nothing fundamental blocks IA or the technical build approach

Blocking stronger implementation quality:
- final scheduler URL and preferred scheduling tool
- final decision on whether `/controls` fully replaces `/industrial`
- approved portrait selection for Tre
- confirmation of which controls employers/projects can support named public case-study pages versus short proof cards only
- stronger public-safe controls artifacts if Tre wants the controls side to feel as rich visually as the web side
- stronger approved Mayara interior/project visuals if it should become a real case study rather than a polished card

Source note:
- `SOURCE_URLS.md` lists `https://hom-ems.net`, but on Wednesday, September 2, 2026 that hostname failed DNS resolution in Playwright while `https://www.home-ems.net` resolved normally.
