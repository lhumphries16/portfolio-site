export type ScheduleAudience = 'web' | 'controls';

const contactEmail = 'trehumphries16@gmail.com';

type ScheduleConfig = {
  label: string;
  description: string;
  href: string;
};

const scheduleConfig: Record<ScheduleAudience, ScheduleConfig> = {
  web: {
    label: 'Schedule a Project Call',
    description: 'Project Call - websites, digital systems, service businesses, local brands',
    href: 'https://cal.com/tre-humphries/project-call',
  },
  controls: {
    label: 'Schedule a Controls Consultation',
    description: 'Controls Consultation - OEM, controls, engineering discussions',
    href: 'https://cal.com/tre-humphries/controls-consultation',
  },
};

export function getScheduleLink(audience: ScheduleAudience) {
  const config = scheduleConfig[audience];

  return {
    ...config,
    external: true,
  };
}

export const profile = {
  brand: {
    name: 'Tre Humphries',
    role: 'Independent Web & Controls Practice',
    location: 'Based in New Jersey, working across the U.S.',
    email: contactEmail,
  },
  navigation: [
    { label: 'Web', href: '/web' },
    { label: 'Controls', href: '/controls' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ] as const,
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lhumphr',
    },
  ],
  portrait: {
    src: '/images/tre-box-desk-normalized.jpg',
    alt: 'Tre Humphries working on a laptop beside field documents in an industrial setting.',
    fileName: 'tre-box-desk-normalized.jpg',
    objectPosition: '78% center',
  },
  site: {
    origin: 'https://trehumphries.com',
    socialImagePath: '/images/tre-box-desk-normalized.jpg',
  },
  contact: {
    helper:
      'The most useful first note names the real problem, the current system, and what a clean handoff would look like.',
    methods: [
      {
        label: 'Email',
        href: `mailto:${contactEmail}`,
        value: contactEmail,
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/lhumphr',
        value: 'linkedin.com/in/lhumphr',
      },
    ],
  },
  footerNote:
    'Independent practice for established service businesses, local brands, and defined engineering problems that need a clear owner handoff.',
} as const;
