import type { Era, EraId } from '../eras/types';
import { erasById } from '../eras';
import type {
  Artifact,
  ArtifactDomain,
  ArtifactDomainFilter,
  ArtifactFilters,
  ArtifactYearBounds,
  ArtifactYearRange,
  ArtifactSurface,
  ArtifactType,
  ArtifactTypeFilter,
} from './types';

const avionFuselageImage = '/images/artifacts/avion/fuselage-folding-shell.jpg';
const avionFlirMountImage = '/images/artifacts/avion/flir-mount-demo.jpg';
const rcGliderBuildImage = '/images/artifacts/rc-glider/build.png';
const rcGliderFeaturedImage = '/images/artifacts/rc-glider/featured.png';
const rcGliderFlightImage = '/images/artifacts/rc-glider/flight.png';
const flyingButterflyImage = '/images/artifacts/butterfly/flight.jpg';
const flyingButterflyControllerImage = '/images/artifacts/butterfly/controller.png';
const allSeasonsProofImage = '/images/portfolio/all-seasons/homepage.png';
const homeEmsProofImage = '/images/portfolio/homeems/homepage.png';

export const artifactTypeLabels: Record<ArtifactType, string> = {
  project: 'Project',
  experiment: 'Experiment',
  experience: 'Experience',
  writing: 'Writing',
};

export const artifactTypeFilterLabels: Record<ArtifactTypeFilter, string> = {
  all: 'All',
  project: 'Projects',
  experiment: 'Experiments',
  experience: 'Experience',
  writing: 'Writing',
};

export const artifactDomainLabels: Record<ArtifactDomain, string> = {
  physical: 'Physical',
  controls: 'Controls',
  embedded: 'Embedded',
  software: 'Software',
  web: 'Web',
  operations: 'Operations',
  data: 'Data',
  media: 'Media',
  design: 'Design',
  aerospace: 'Aerospace',
};

export const livingCvDomainFilters = [
  'all',
  'controls',
  'software',
  'web',
  'embedded',
  'physical',
  'data',
  'operations',
] as const satisfies readonly ArtifactDomainFilter[];

export const artifacts = [
  {
    id: 'space-exploration-website',
    slug: '2014-space-exploration',
    title: 'Space Exploration Website',
    subtitle: 'First website built for a high-school class',
    date: {
      start: '2014-01-01',
      precision: 'year',
    },
    sortDate: '2014-01-01',
    type: 'project',
    domains: ['web'],
    era: 'high-school',
    summary:
      'A multi-page HTML/XHTML site about space exploration with iframe navigation, custom graphics, an animated Earth, resource pages, and an email/newsletter form.',
    story:
      'This was the first full website build: messy in the useful way, but it established the pattern of learning by building a whole thing end to end.',
    highlights: ['multi-page HTML/XHTML', 'iframe navigation', 'custom graphics'],
    display: {
      weight: 'feature',
    },
    placement: {
      web: true,
    },
    order: {
      web: 4,
    },
    detail: {
      enabled: false,
      template: 'archive',
    },
  },
  {
    id: 'sierpinski-ti84',
    slug: '2015-sierpinski-ti84',
    title: 'Sierpinski Triangle on TI-84',
    date: {
      start: '2015-01-01',
      precision: 'approximate',
    },
    sortDate: '2015-01-01',
    type: 'experiment',
    domains: ['software', 'data'],
    era: 'high-school',
    summary:
      'A TI-84 program that generated Sierpinski’s triangle point by point on the calculator screen.',
    story:
      'The original calculator code is lost, so this record stays honest about what survives: the idea, the experiment, and the memory of building it.',
    status: 'Original code lost',
    display: {
      weight: 'marker',
    },
    detail: {
      enabled: false,
      template: 'archive',
    },
  },
  {
    id: 'bridge-engineering',
    slug: '2016-bridge-engineering',
    title: 'Bridge Engineering',
    subtitle: 'High-school structural design work',
    date: {
      start: '2016-01-01',
      precision: 'year',
    },
    sortDate: '2016-01-01',
    type: 'project',
    domains: ['physical'],
    era: 'high-school',
    summary:
      'School engineering work focused on bridge structures and structural design approaches.',
    story:
      'This is archived as early physical-systems thinking rather than as a polished artifact. Future media will likely be a slideshow, PDF, or build photos.',
    display: {
      weight: 'card',
    },
    placement: {
      industrial: true,
    },
    detail: {
      enabled: false,
      template: 'archive',
    },
  },
  {
    id: 'drone-videography',
    slug: '2018-drone-videography',
    title: 'Drone Videography',
    subtitle: 'One client project and a useful aerospace side path',
    date: {
      start: '2018-01-01',
      end: '2019-12-31',
      precision: 'year',
    },
    sortDate: '2018-01-01',
    type: 'project',
    domains: ['media', 'aerospace'],
    era: 'purdue',
    summary:
      'Experimented with real-estate drone videography and completed one client project during college.',
    story:
      'This is not presented as a formal business. It was a real client-facing experiment that sharpened comfort with flight, capture, and delivering something usable.',
    display: {
      weight: 'card',
    },
    detail: {
      enabled: false,
      template: 'archive',
    },
  },
  {
    id: 'servo-spider',
    slug: '2019-servo-spider',
    title: 'Servo Spider',
    date: {
      start: '2019-02-01',
      precision: 'month',
    },
    sortDate: '2019-02-01',
    type: 'experiment',
    domains: ['embedded', 'controls', 'physical'],
    era: 'purdue',
    summary: 'A homemade servo-driven walking robot built because it seemed cool and worth figuring out.',
    story:
      'No formal objective, no sanitized business case. It belongs here because building strange machines is part of the through-line.',
    display: {
      weight: 'card',
    },
    detail: {
      enabled: false,
      template: 'archive',
    },
  },
  {
    id: 'rc-glider',
    slug: '2019-rc-glider',
    title: 'RC Glider',
    subtitle: 'College-era hand-built glider archive',
    date: {
      start: '2019-01-01',
      precision: 'approximate',
    },
    sortDate: '2019-01-01',
    type: 'project',
    domains: ['physical', 'aerospace'],
    era: 'purdue',
    summary:
      'A hand-built RC glider preserved here through a small surviving set of build-table and flight-test photos from college.',
    story:
      'This stays intentionally narrow. What survives publicly is the physical build context and flying stills, not a complete design log or formal spec sheet.',
    highlights: ['RC glider', 'build archive', 'flight stills'],
    display: {
      weight: 'card',
    },
    media: [
      {
        type: 'image',
        src: rcGliderFeaturedImage,
        alt: 'Hand-built RC glider photographed from above during a college-era build and test period',
        caption: 'College-era RC glider archive image showing the full airframe and control layout.',
        featured: true,
        display: {
          variant: 'wide',
          objectPosition: 'center 56%',
        },
      },
      {
        type: 'image',
        src: rcGliderBuildImage,
        alt: 'RC glider structure and components spread across a work table during assembly',
        caption: 'Build-table context from the RC glider archive.',
      },
      {
        type: 'image',
        src: rcGliderFlightImage,
        alt: 'Hand-built RC glider captured during a flying test with blue wing surfaces visible',
        caption: 'Flight-test still from the RC glider archive.',
      },
    ],
    placement: {
      industrial: false,
    },
    detail: {
      enabled: false,
      template: 'archive',
    },
  },
  {
    id: 'jumper-robot',
    slug: '2019-jumper-robot',
    title: 'Jumper Robot',
    date: {
      start: '2019-08-01',
      precision: 'month',
    },
    sortDate: '2019-08-01',
    type: 'experiment',
    domains: ['embedded', 'physical'],
    era: 'purdue',
    summary: 'A small homemade jumping robot experiment.',
    display: {
      weight: 'marker',
    },
    detail: {
      enabled: false,
      template: 'archive',
    },
  },
  {
    id: 'avion-uas',
    slug: '2020-avion-uas',
    title: 'Avion Solutions UAS',
    subtitle: 'Summer 2020 in Huntsville, Alabama',
    date: {
      start: '2020-06-01',
      end: '2020-08-31',
      precision: 'month',
    },
    sortDate: '2020-06-01',
    type: 'experience',
    domains: ['aerospace', 'physical', 'controls', 'embedded'],
    era: 'purdue',
    summary:
      'Worked across drones, fixed-wing aircraft, quadrotors, and experimental UAS during a summer internship, including public-safe prototype, fabrication, and integration work.',
    story:
      'This public record stays intentionally high-level. The approved photos show fabrication and integration context, while technical scope, performance, and customer details stay out of the public archive.',
    status: 'Public detail intentionally limited',
    highlights: ['prototype fabrication', 'airframe process', 'integration work'],
    display: {
      weight: 'feature',
    },
    media: [
      {
        type: 'image',
        src: avionFlirMountImage,
        alt: 'Avion Solutions UAS lab setup with a drone-mounted thermal camera integration in view',
        caption: 'Approved public-safe UAS integration context from Avion Solutions work.',
        featured: true,
        display: {
          variant: 'wide',
          objectPosition: 'center 42%',
        },
      },
      {
        type: 'image',
        src: avionFuselageImage,
        alt: 'Laser-cut fixed-wing fuselage parts arranged on a cutting mat during airframe fabrication',
        caption: 'Approved fabrication photo from fixed-wing airframe process work.',
      },
    ],
    placement: {
      industrial: true,
    },
    order: {
      industrial: 5,
    },
    detail: {
      enabled: false,
      template: 'experience',
    },
    visibility: {
      safeForPublic: 'pending-review',
    },
  },
  {
    id: 'all-seasons',
    slug: 'all-seasons',
    title: 'All Seasons',
    subtitle: 'Website delivery and client-managed web presence',
    date: {
      start: '2021-01-01',
      precision: 'year',
    },
    sortDate: '2021-01-01',
    type: 'project',
    domains: ['web'],
    era: 'independent-work',
    summary:
      'Independent website delivery work around a client site that needed to be practical, editable, and usable by the business after handoff.',
    story:
      'This record stays intentionally compact because there is no approved public capture in the repo yet, but it marks the early web-delivery stream that later expanded into broader digital systems work.',
    links: [
      {
        label: 'Open live site',
        href: 'https://allseasonsmo.com/home/',
        external: true,
      },
    ],
    display: {
      weight: 'card',
    },
    media: [
      {
        type: 'image',
        src: allSeasonsProofImage,
        title: 'All Seasons homepage capture',
        alt: 'All Seasons Maintenance Services homepage hero with aerial photo and bright green call to action',
        caption: 'Captured public homepage from the live All Seasons website.',
        featured: true,
        display: {
          variant: 'wide',
          objectPosition: 'center top',
        },
      },
    ],
    placement: {
      web: true,
    },
    order: {
      web: 3,
    },
    detail: {
      enabled: false,
      template: 'case-study',
    },
  },
  {
    id: 'innerspec',
    slug: '2021-innerspec',
    title: 'Innerspec',
    subtitle: 'Industrial controls and field integration',
    date: {
      start: '2021-01-01',
      end: '2022-12-31',
      precision: 'year',
    },
    sortDate: '2021-01-01',
    type: 'experience',
    domains: ['controls', 'embedded', 'physical', 'operations'],
    era: 'innerspec',
    summary:
      'Industrial controls and robotics work around ultrasonic inspection systems, field integration, and electronics troubleshooting.',
    story:
      'Themes here include KUKA, Beckhoff, robotics, field integration, and the kind of troubleshooting that only makes sense near real equipment.',
    highlights: ['robotics', 'KUKA', 'Beckhoff', 'ultrasonic inspection'],
    display: {
      weight: 'card',
    },
    media: [
      {
        type: 'image',
        src: '/images/rollmate-inspection-system_innerspec.jpg',
        alt: 'Robotic ultrasonic inspection system operating on a large metal component',
        caption: 'Robotic ultrasonic inspection system context from Innerspec work.',
        featured: true,
      },
    ],
    placement: {
      industrial: true,
    },
    order: {
      industrial: 4,
    },
    detail: {
      enabled: false,
      template: 'experience',
    },
  },
  {
    id: 'mainstream',
    slug: '2022-mainstream',
    title: 'Mainstream',
    subtitle: 'HVAC controls and internal engineering software',
    date: {
      start: '2022-01-01',
      end: '2025-01-31',
      precision: 'year',
    },
    sortDate: '2022-01-01',
    type: 'experience',
    domains: ['controls', 'software', 'operations', 'physical'],
    era: 'mainstream',
    summary:
      'Worked across HVAC controls, fan arrays, VFDs, control architecture, and internal software and tooling tied directly to engineering and manufacturing workflows.',
    story:
      'The interesting overlap was between equipment behavior and the internal systems needed to quote, configure, and support that equipment without relying on tribal knowledge.',
    highlights: ['HVAC controls', 'fan arrays', 'VFDs', 'engineering tooling'],
    display: {
      weight: 'feature',
    },
    media: [
      {
        type: 'image',
        src: '/images/mainstream_rooftop_ahu_public.jpg',
        alt: 'Commercial HVAC equipment during installation and controls work',
        caption: 'Commercial HVAC equipment where controls and commissioning had to hold up.',
        featured: true,
        display: {
          variant: 'wide',
        },
      },
    ],
    placement: {
      industrial: true,
    },
    order: {
      industrial: 3,
    },
    detail: {
      enabled: false,
      template: 'experience',
    },
  },
  {
    id: 'garage-basil',
    slug: 'predictable-basil',
    title: 'Garage Basil / Predictable Basil',
    subtitle: 'Garage-scale hydroponic system',
    date: {
      start: '2023-01-01',
      precision: 'year',
    },
    sortDate: '2023-01-01',
    type: 'experiment',
    domains: ['physical', 'controls', 'embedded', 'software', 'data'],
    era: 'independent-work',
    summary:
      'A hydroponic basil system aimed at growing basil repeatedly and predictably, using canopy coverage as the main harvest-prediction metric.',
    story:
      'The research endpoint was straightforward: growing footprint to pounds of basil per month. The data exists, but the analysis, reporting, and whitepaper are still unfinished.',
    status: 'Research complete',
    highlights: ['hydroponics', 'canopy coverage', 'harvest prediction'],
    display: {
      weight: 'feature',
      featured: true,
    },
    placement: {
      industrial: true,
    },
    order: {
      industrial: 6,
    },
    media: [
      {
        type: 'image',
        src: '/images/hydro_basil_rack_photo_my_garage.jpg',
        alt: 'Garage hydroponic basil rack used as a repeatability and logging testbed',
        caption: 'Garage-scale hydroponic rack used for instrumentation and repeatability work.',
        featured: true,
        display: {
          variant: 'wide',
        },
      },
    ],
    detail: {
      enabled: false,
      template: 'paper',
    },
  },
  {
    id: 'homeems',
    slug: 'homeems',
    title: 'HomeEMS',
    subtitle: 'Website + lead / service-area system',
    date: {
      start: '2024-01-01',
      precision: 'year',
    },
    sortDate: '2024-01-01',
    type: 'project',
    domains: ['web', 'software', 'operations'],
    era: 'independent-work',
    summary:
      'Paid production website work for a restoration contractor focused on credibility, emergency lead flow, service-area logic, analytics, and client handoff.',
    story:
      'The system value was not just the public site. It was the surrounding operational logic that let the client own content, geography, media, and lead flow after launch.',
    highlights: ['service-area logic', 'client-controlled content', 'analytics'],
    links: [
      {
        label: 'Open live site',
        href: 'https://www.home-ems.net/',
        external: true,
      },
    ],
    display: {
      weight: 'feature',
      featured: true,
    },
    media: [
      {
        type: 'image',
        src: homeEmsProofImage,
        title: 'HomeEMS homepage capture',
        alt: 'HomeEMS public homepage showing restoration messaging, site navigation, and emergency service call to action',
        caption: 'Captured public homepage from the live HomeEMS website.',
        featured: true,
        display: {
          variant: 'wide',
          objectPosition: 'center top',
        },
      },
    ],
    placement: {
      home: true,
      web: true,
    },
    order: {
      home: 2,
      web: 1,
    },
    detail: {
      enabled: false,
      template: 'case-study',
    },
  },
  {
    id: 'gaf-roads',
    slug: 'gaf-roads-standard-industries',
    title: 'GAF Roads / Standard Industries',
    subtitle: 'Controls, telemetry, and full-system integration',
    date: {
      start: '2025-01-01',
      precision: 'year',
    },
    sortDate: '2025-01-01',
    type: 'experience',
    domains: ['controls', 'embedded', 'operations', 'data', 'physical'],
    era: 'gaf-roads',
    summary:
      'Experience work spanning CODESYS controls, edge hardware, EWON, telemetry, BigQuery, operator workflows, and field integration.',
    story:
      'This period centers on system behavior across machine, cloud path, field hardware, and the people who have to operate or debug the whole thing.',
    highlights: ['CODESYS', 'EWON', 'telemetry', 'operator workflows'],
    display: {
      weight: 'feature',
      featured: true,
    },
    media: [
      {
        type: 'image',
        src: '/images/feature_road-application-1.jpg',
        alt: 'Electric road-application sprayer platform in an engineering context',
        caption: 'Electric sprayer platform work spanning controls, telemetry, and field integration.',
        featured: true,
        display: {
          variant: 'wide',
        },
      },
    ],
    placement: {
      home: true,
      industrial: true,
    },
    order: {
      home: 3,
      industrial: 2,
    },
    detail: {
      enabled: false,
      template: 'experience',
    },
  },
  {
    id: 'govgraph',
    slug: 'govgraph',
    title: 'GovGraph',
    date: {
      start: '2025-03-01',
      precision: 'month',
    },
    sortDate: '2025-03-01',
    type: 'experiment',
    domains: ['software', 'data'],
    era: 'independent-work',
    summary:
      'Exploratory software for examining relationships across U.S. public-record datasets including government spending, lobbying, and campaign data.',
    story:
      'This stays intentionally conservative in public description. It is an exploration target and software direction, not a claim of complete coverage or finished insight.',
    display: {
      weight: 'card',
    },
    detail: {
      enabled: false,
      template: 'standard',
    },
  },
  {
    id: 'quant-research',
    slug: 'quant-research',
    title: 'Quant Research',
    date: {
      start: '2025-08-01',
      precision: 'month',
    },
    sortDate: '2025-08-01',
    type: 'experiment',
    domains: ['software', 'data'],
    era: 'independent-work',
    summary:
      'Quantitative market experiments focused on turning hypotheses into testable strategies and checking robustness.',
    story:
      'This is not presented as a fund, a product, or proof of profitability. The work is about building better tests and rejecting weak ideas faster.',
    display: {
      weight: 'card',
    },
    detail: {
      enabled: false,
      template: 'paper',
    },
  },
  {
    id: 'programmable-butterfly-controller',
    slug: 'programmable-butterfly-controller',
    title: 'Programmable Butterfly Controller',
    subtitle: 'Ongoing indoor bionic butterfly control work',
    date: {
      start: '2026-01-01',
      precision: 'year',
    },
    sortDate: '2026-01-01',
    type: 'experiment',
    domains: ['embedded', 'controls', 'physical', 'software'],
    era: 'independent-work',
    summary:
      'Ongoing control and interface experimentation around a programmable indoor bionic butterfly, including ESP-NOW control, handheld UX, calibration, trim behavior, and flight testing.',
    story:
      'The current work is about making a strange physical system more controllable and more understandable to the operator, not pretending it is already solved.',
    highlights: ['ESP-NOW', 'handheld UX', 'calibration', 'flight testing'],
    status: 'Ongoing',
    display: {
      weight: 'feature',
      featured: true,
      current: true,
    },
    media: [
      {
        type: 'image',
        src: flyingButterflyImage,
        alt: 'Programmable butterfly prototype held outdoors with illuminated wings and onboard electronics visible',
        caption: 'Flight-test visual for the programmable butterfly system.',
        featured: true,
        display: {
          variant: 'wide',
          objectPosition: 'center 58%',
        },
      },
      {
        type: 'image',
        src: flyingButterflyControllerImage,
        alt: 'Handheld controller setup and butterfly hardware used during programmable butterfly control testing',
        caption: 'Controller and interface hardware used during butterfly control experiments.',
      },
    ],
    placement: {
      home: true,
      industrial: true,
    },
    order: {
      home: 1,
      industrial: 1,
    },
    detail: {
      enabled: false,
      template: 'case-study',
    },
  },
  {
    id: 'mayara-miranda',
    slug: 'mayara-miranda',
    title: 'Mayara Miranda',
    subtitle: 'Minimalist portfolio system for a designer',
    date: {
      start: '2026-07-01',
      precision: 'month',
    },
    sortDate: '2026-07-01',
    type: 'project',
    domains: ['web', 'design', 'software'],
    era: 'independent-work',
    summary:
      'A minimalist portfolio system for a designer and prepress specialist with strong work presentation and simple long-term content ownership.',
    story:
      'The focus here was restraint: a presentation system that stays sharp without trapping the owner in a fragile publishing workflow.',
    display: {
      weight: 'feature',
      featured: true,
      current: true,
    },
    placement: {
      home: true,
      web: true,
    },
    order: {
      home: 4,
      web: 2,
    },
    detail: {
      enabled: false,
      template: 'case-study',
    },
  },
] as const satisfies readonly Artifact[];

export type TimelineEntry =
  | {
      kind: 'year';
      year: string;
    }
  | {
      kind: 'era';
      era: Era;
    }
  | {
      kind: 'artifact';
      artifact: Artifact;
    };

const yearFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  year: 'numeric',
});

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  month: 'short',
  year: 'numeric',
});

const dayFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

function formatDateValue(value: string, precision: Artifact['date']['precision']) {
  const date = new Date(`${value}T12:00:00Z`);

  if (precision === 'day') {
    return dayFormatter.format(date);
  }

  if (precision === 'month') {
    return monthFormatter.format(date);
  }

  return yearFormatter.format(date);
}

export function formatArtifactDate(date: Artifact['date']) {
  const precision = date.precision ?? 'year';
  const prefix = precision === 'approximate' ? '~' : '';
  const normalizedPrecision = precision === 'approximate' ? 'year' : precision;

  if (!date.end) {
    return `${prefix}${formatDateValue(date.start, normalizedPrecision)}`;
  }

  const start = formatDateValue(date.start, normalizedPrecision);
  const end = formatDateValue(date.end, normalizedPrecision);

  return start === end ? `${prefix}${start}` : `${prefix}${start}-${end}`;
}

export function normalizeArtifactTypeFilter(value: string | null | undefined): ArtifactTypeFilter {
  if (
    value === 'project' ||
    value === 'experiment' ||
    value === 'experience' ||
    value === 'writing'
  ) {
    return value;
  }

  return 'all';
}

export function normalizeArtifactDomainFilter(value: string | null | undefined): ArtifactDomainFilter {
  if (
    value === 'physical' ||
    value === 'controls' ||
    value === 'embedded' ||
    value === 'software' ||
    value === 'web' ||
    value === 'operations' ||
    value === 'data' ||
    value === 'media' ||
    value === 'design' ||
    value === 'aerospace'
  ) {
    return value;
  }

  return 'all';
}

function parseArtifactYear(value: string) {
  const match = value.match(/^(\d{4})/);

  if (!match) {
    throw new Error(`Unable to extract year from artifact date value: ${value}`);
  }

  return Number(match[1]);
}

export function getArtifactYearRange(date: Artifact['date']): ArtifactYearRange {
  const start = parseArtifactYear(date.start);
  const end = parseArtifactYear(date.end ?? date.start);

  return {
    start: Math.min(start, end),
    end: Math.max(start, end),
  };
}

export function getArtifactYearBounds(items: readonly Artifact[]): ArtifactYearBounds {
  const publishedItems = items.filter(isArtifactPublished);

  if (!publishedItems.length) {
    throw new Error('Artifact year bounds require at least one published artifact.');
  }

  return publishedItems.reduce<ArtifactYearBounds>((bounds, artifact) => {
    const years = getArtifactYearRange(artifact.date);

    return {
      min: Math.min(bounds.min, years.start),
      max: Math.max(bounds.max, years.end),
    };
  }, {
    min: Number.POSITIVE_INFINITY,
    max: Number.NEGATIVE_INFINITY,
  });
}

function clampYear(year: number, bounds: ArtifactYearBounds) {
  return Math.min(bounds.max, Math.max(bounds.min, year));
}

export function normalizeArtifactYearRange(
  fromValue: string | null | undefined,
  toValue: string | null | undefined,
  bounds: ArtifactYearBounds
): ArtifactYearRange {
  const parsedFrom = Number.parseInt(fromValue ?? '', 10);
  const parsedTo = Number.parseInt(toValue ?? '', 10);
  const from = Number.isFinite(parsedFrom) ? clampYear(parsedFrom, bounds) : bounds.min;
  const to = Number.isFinite(parsedTo) ? clampYear(parsedTo, bounds) : bounds.max;

  return {
    start: Math.min(from, to),
    end: Math.max(from, to),
  };
}

export function isArtifactPublished(artifact: Artifact) {
  return artifact.visibility?.published !== false;
}

export function sortArtifactsChronologically(items: readonly Artifact[]) {
  return [...items].sort((left, right) => left.sortDate.localeCompare(right.sortDate));
}

export function filterArtifacts(items: readonly Artifact[], filters: ArtifactFilters) {
  return sortArtifactsChronologically(items).filter((artifact) => {
    if (!isArtifactPublished(artifact)) {
      return false;
    }

    if (filters.type !== 'all' && artifact.type !== filters.type) {
      return false;
    }

    if (filters.domain !== 'all' && !artifact.domains.includes(filters.domain)) {
      return false;
    }

    const artifactYears = getArtifactYearRange(artifact.date);

    if (artifactYears.start > filters.years.end || artifactYears.end < filters.years.start) {
      return false;
    }

    return true;
  });
}

export function buildTimelineEntries(
  items: readonly Artifact[],
  eraLookup: Partial<Record<EraId, Era>> = erasById
) {
  const entries: TimelineEntry[] = [];
  let previousYear = '';
  let previousEraId: EraId | undefined;

  for (const artifact of sortArtifactsChronologically(items).filter(isArtifactPublished)) {
    const year = artifact.sortDate.slice(0, 4);

    if (year !== previousYear) {
      entries.push({
        kind: 'year',
        year,
      });
      previousYear = year;
    }

    if (artifact.era && artifact.era !== previousEraId) {
      const era = eraLookup[artifact.era];

      if (era) {
        entries.push({
          kind: 'era',
          era,
        });
      }

      previousEraId = artifact.era;
    }

    entries.push({
      kind: 'artifact',
      artifact,
    });
  }

  return entries;
}

export function getCurrentHighlights(items: readonly Artifact[], limit = 4) {
  const highlighted = [...items]
    .filter((artifact) => isArtifactPublished(artifact) && (artifact.display.current || artifact.display.featured))
    .sort((left, right) => right.sortDate.localeCompare(left.sortDate));

  return highlighted.slice(0, limit);
}

const industrialDomains: readonly ArtifactDomain[] = [
  'controls',
  'embedded',
  'physical',
  'operations',
  'aerospace',
];

function compareSurfaceOrder(surface: ArtifactSurface, left: Artifact, right: Artifact) {
  const leftOrder = left.order?.[surface] ?? Number.MAX_SAFE_INTEGER;
  const rightOrder = right.order?.[surface] ?? Number.MAX_SAFE_INTEGER;

  if (leftOrder !== rightOrder) {
    return leftOrder - rightOrder;
  }

  return right.sortDate.localeCompare(left.sortDate);
}

function isArtifactInSurface(artifact: Artifact, surface: ArtifactSurface) {
  if (!isArtifactPublished(artifact)) {
    return false;
  }

  if (surface === 'home') {
    return artifact.placement?.home === true;
  }

  if (surface === 'web') {
    if (artifact.placement?.web === false) {
      return false;
    }

    return artifact.placement?.web === true || artifact.domains.includes('web');
  }

  if (artifact.placement?.industrial === false) {
    return false;
  }

  if (artifact.placement?.industrial === true) {
    return true;
  }

  if (artifact.domains.includes('web')) {
    return false;
  }

  return artifact.domains.some((domain) => industrialDomains.includes(domain));
}

export function getArtifactsForSurface(
  items: readonly Artifact[],
  surface: ArtifactSurface,
  options?: {
    limit?: number;
  }
) {
  const selected = [...items]
    .filter((artifact) => isArtifactInSurface(artifact, surface))
    .sort((left, right) => compareSurfaceOrder(surface, left, right));

  if (!options?.limit) {
    return selected;
  }

  return selected.slice(0, options.limit);
}
