import type { Era, EraId } from './types';

export const eras = [
  {
    id: 'high-school',
    label: 'High School',
    span: '2014-2017',
    date: {
      start: '2014-01-01',
      end: '2017-12-31',
    },
    summary: 'Early experiments in websites, school engineering projects, and small computational curiosities.',
    themes: ['first websites', 'structural design', 'math experiments'],
  },
  {
    id: 'purdue',
    label: 'Purdue',
    span: '2017-2021',
    date: {
      start: '2017-01-01',
      end: '2021-12-31',
    },
    summary: 'A period shaped by physical experimentation, drones, and hands-on embedded builds.',
    themes: ['student experiments', 'robotics', 'flight systems'],
  },
  {
    id: 'innerspec',
    label: 'Innerspec',
    span: '2021-2022',
    date: {
      start: '2021-01-01',
      end: '2022-12-31',
    },
    summary: 'Industrial inspection systems with controls, robotics, field integration, and troubleshooting.',
    themes: ['industrial controls', 'robotics', 'ultrasonic inspection'],
  },
  {
    id: 'mainstream',
    label: 'Mainstream',
    span: '2022-2025',
    date: {
      start: '2022-01-01',
      end: '2025-12-31',
    },
    summary: 'HVAC controls, configurable equipment, and internal software tied directly to engineering workflows.',
    themes: ['HVAC controls', 'fan arrays', 'engineering tooling'],
  },
  {
    id: 'gaf-roads',
    label: 'GAF Roads / Standard Industries',
    span: '2025-2026',
    date: {
      start: '2025-01-01',
      end: '2026-12-31',
    },
    summary: 'Early-platform machine systems spanning CODESYS controls, telemetry, field hardware, and operator workflows.',
    themes: ['edge controls', 'telemetry', 'full-system integration'],
  },
  {
    id: 'independent-work',
    label: 'Independent Work',
    span: '2023-present',
    date: {
      start: '2023-01-01',
    },
    summary: 'Client delivery, self-directed experiments, and long-horizon technical work that can keep accumulating.',
    themes: ['client systems', 'independent R&D', 'applied software'],
  },
] as const satisfies readonly Era[];

export const erasById = eras.reduce(
  (accumulator, era) => {
    accumulator[era.id] = era;
    return accumulator;
  },
  {} as Record<EraId, Era>
);
