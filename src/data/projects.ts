import type { Project } from './types';

export const projects = [
  {
    slug: 'garage-horticulture',
    number: '000',
    title: 'Garage Horticulture System',
    timelineLabel: '2023',
    status: 'Archive',
    summary:
      'A controlled indoor horticulture system used to explore repeatable environmental control, logging, forecasting, and lightweight operational tooling.',
    tags: ['Environmental control', 'Logging', 'Forecasting', 'Physical systems'],
    currentStage:
      'The system is not the primary active R&D focus now, but it remains representative of how I approach instrumentation, repeatability, and operations around a physical process.',
    overview: [
      'This project grew out of controlled indoor growing and turned into a useful testbed for system behavior, logging, operational routines, and physical iteration.',
      'It matters less as a hobby label than as evidence of how I work: a physical setup, a process to observe, a set of constraints, and the need to build simple systems around it.',
    ],
    currentWork: [
      'Documenting the system as a representative R&D record',
      'Keeping the data model ready for future experimental builds',
    ],
    questions: [
      'What operational structure actually helps a small physical process stay repeatable?',
      'When does logging become useful instead of decorative?',
    ],
    lookingFor: [
      'Useful overlap with environmental control, sensing, or operational logging',
    ],
    lastUpdated: 'August 9, 2026',
    heroMediaType: 'image',
    heroMediaSrc: '/images/hydro_basil_rack_photo_my_garage.jpg',
    heroMediaAlt:
      'Indoor horticulture rack used for controlled growing and operational logging experiments',
    heroMediaCaption: 'Garage horticulture rack used as a physical systems testbed.',
  },
  {
    slug: 'flying-creatures',
    number: '001',
    title: 'Programmable Flying Creatures',
    timelineLabel: '2026',
    status: 'Active',
    statusTone: 'active',
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
    heroPlaceholder: {
      ariaLabel: 'Programmable Flying Creatures media placeholder',
      meta: [
        {
          label: 'Current stage',
          value: 'Prototype flying / active tuning',
        },
        {
          label: 'Seeking',
          value: 'Venues / event-production collaborators / technical overlap',
        },
      ],
    },
    featured: true,
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
