import type { SystemRecord } from './types';

export const systems = [
  {
    id: 'fan-selection-platform',
    index: '01',
    title: 'Fan Selection + Quoting Platform',
    metadata: 'Software / Data / Engineering knowledge',
    href: '/experience#mainstream-automation',
  },
  {
    id: 'electric-sprayer-platform',
    index: '02',
    title: 'Electric Sprayer Platform',
    metadata: 'Physical / Controls / Data / Field',
    href: '/experience#gaf-roads-platform',
  },
  {
    id: 'hvac-controls-delivery',
    index: '03',
    title: 'HVAC Controls Delivery',
    metadata: 'Controls / Commissioning / Integration',
    href: '/experience#mainstream-controls',
  },
  {
    id: 'homeems-system',
    index: '04',
    title: 'HomeEMS',
    metadata: 'Web / CMS / GIS / Business systems',
    href: '/client-work#homeems',
  },
  {
    id: 'programmable-flying-creatures',
    index: '05',
    title: 'Programmable Flying Creatures',
    metadata: 'Embedded / Flight / Interaction',
    href: '/projects/flying-creatures',
    status: 'Active',
  },
] as const satisfies readonly SystemRecord[];
