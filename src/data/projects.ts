import type { ImageAsset } from './siteContent';

export type ProjectLink = {
  href: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  status: string;
  seekingSupport?: string;
  summary: string;
  tags: readonly string[];
  currentStage: string;
  overview: readonly string[];
  currentWork: readonly string[];
  questions: readonly string[];
  lookingFor: readonly string[];
  lastUpdated: string;
  hero?: ImageAsset;
  externalLink?: ProjectLink;
};

export const projects = [
  {
    slug: 'flying-creatures',
    title: 'Programmable Flying Creatures',
    status: 'Active',
    seekingSupport: 'Seeking Support',
    summary:
      'Experimental R&D around controllable bio-inspired flying systems for indoor performance and interactive environments.',
    tags: [
      'Lightweight Flight',
      'Embedded Control',
      'ESP-NOW',
      'Operator Interface',
      'Telemetry',
    ],
    currentStage:
      'A lightweight butterfly prototype is flying, but the system is still being tuned. The control behavior, startup routine, and operator experience are active engineering work, and the project is still experimental rather than production-ready.',
    overview: [
      'Programmable Flying Creatures is an ongoing engineering project around controllable bio-inspired indoor flight.',
      'The work sits somewhere between lightweight physical systems, embedded control, wireless communication, and interactive performance technology. The interesting question is not just whether something can fly. It is how predictable, controllable, and useful that flight can become inside a real environment.',
    ],
    currentWork: [
      'More predictable flight',
      'Tuning behavior',
      'Repeatable startup',
      'Intuitive handheld controls',
      'Telemetry and lightweight payload exploration',
    ],
    questions: [
      'How predictable can bio-inspired indoor flight become?',
      'What operator interface makes it intuitive?',
      'What indoor experiences actually benefit from this?',
      'How much capability can be added before weight and endurance suffer?',
    ],
    lookingFor: [
      'Indoor spaces suitable for controlled testing and demos',
      'Event-production professionals interested in experimental flying effects',
      'Technical collaborators interested in lightweight or bio-inspired flight',
      'Embedded and controls people whose expertise overlaps',
    ],
    lastUpdated: 'August 9, 2026',
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
