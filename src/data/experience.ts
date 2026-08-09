import type { ExperienceRecord } from './types';

export const experience = [
  {
    id: 'innerspec-controls',
    company: 'Innerspec Technologies',
    role: 'Controls Engineer',
    years: '2021-2022',
    timelineYear: '2021',
    summary:
      'Delivered industrial automation systems around robotic ultrasonic inspection equipment, field hardware, PLCs, motion, and test integration.',
    detail:
      'This work combined controls programming, field-integrated equipment behavior, and the realities of inspection systems that had to function around real machinery.',
    domains: ['Ultrasonic inspection', 'PLCs', 'Motion', 'Field integration'],
    technologies: ['Allen-Bradley', 'Siemens', 'Beckhoff', 'Motion systems'],
    responsibilities: [
      'Built and supported control logic for industrial inspection systems',
      'Integrated PLCs, motion systems, and field hardware',
      'Worked through machine behavior in live industrial environments',
    ],
    image: {
      src: '/images/rollmate-inspection-system_innerspec.jpg',
      alt: 'Robotic ultrasonic inspection system operating on a large metal component',
      caption: 'Robotic mill-roll inspection system at Innerspec.',
    },
  },
  {
    id: 'mainstream-controls',
    company: 'Mainstream Fluid & Air',
    role: 'Controls Engineer',
    years: '2022-2024',
    timelineYear: '2022',
    summary:
      'Delivered controls for configurable commercial HVAC fan-array systems across design, startup, commissioning, quality, and field troubleshooting.',
    detail:
      'The job was not just writing logic. It was making the controls survive the drives, motors, equipment configuration, installer constraints, and building-integration reality.',
    domains: ['HVAC equipment', 'Controls', 'Commissioning', 'Integration'],
    technologies: ['PLCs', 'HMIs', 'VFDs', 'BACnet', 'Modbus'],
    responsibilities: [
      'Built and supported PLC and HMI logic for custom HVAC systems',
      'Programmed and commissioned drives and integrations',
      'Handled startup, quality issues, and field troubleshooting',
    ],
    image: {
      src: '/images/mainstream_rooftop_ahu_public.jpg',
      alt: 'Commercial HVAC equipment during installation and test work',
      caption: 'Commercial HVAC context where controls and commissioning had to hold up.',
    },
  },
  {
    id: 'mainstream-automation',
    company: 'Mainstream Fluid & Air',
    role: 'Automation Engineer',
    years: '2024-2025',
    timelineYear: '2024',
    summary:
      'Built internal quoting, fan-selection, dashboard, database, and process-automation tools around real engineering logic and operating workflows.',
    detail:
      'This moved product knowledge out of scattered spreadsheets and personal memory into software that supported quoting, engineering, and internal handoff.',
    domains: ['Software', 'Data', 'Engineering logic', 'Operations'],
    technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'REST APIs'],
    responsibilities: [
      'Built internal tools for product selection and quoting',
      'Mapped engineering calculations and pricing logic into software',
      'Connected workflow tooling to the people using it every day',
    ],
    image: {
      src: '/images/mainstream_fan_submittal_example_doc_public.jpg',
      alt: 'Fan submittal document used in an internal engineering selection workflow',
      caption: 'Internal fan-selection and quoting workflow materials.',
    },
  },
  {
    id: 'gaf-roads-platform',
    company: 'GAF Roads / Standard Industries',
    role: 'Senior Engineering & Technology Developer',
    years: '2025-2026',
    timelineYear: '2025',
    summary:
      'Worked across machine systems, CODESYS controls, telemetry paths, field failures, and operator workflows on an early electric sprayer platform.',
    detail:
      'The difficult part was the system around the machine: mechanical behavior, controls, data, OTA readiness, cloud paths, field troubleshooting, and operator use.',
    domains: ['Physical systems', 'Controls', 'Data', 'Field'],
    technologies: ['CODESYS', 'Telemetry', 'Operator workflows', 'Field diagnostics'],
    responsibilities: [
      'Worked through field failures and machine behavior',
      'Connected controls work to telemetry and operating workflows',
      'Helped move an early platform toward stronger reliability',
    ],
    image: {
      src: '/images/feature_road-application-1.jpg',
      alt: 'Electric road-application sprayer platform in an engineering context',
      caption: 'Electric sprayer platform work at GAF Roads.',
    },
    featured: true,
  },
] as const satisfies readonly ExperienceRecord[];
