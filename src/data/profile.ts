export type ScheduleAudience = 'project' | 'web' | 'controls';

const contactEmail = 'trehumphries16@gmail.com';

type ScheduleConfig = {
  label: string;
  description: string;
  href: string;
};

const scheduleConfig: Record<ScheduleAudience, ScheduleConfig> = {
  project: {
    label: 'Discuss a Project',
    description: 'Project Call - product development, controls, automation, test systems, and engineering software',
    href: 'https://cal.com/tre-humphries/project-call',
  },
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
    role: 'Product & Systems Engineer',
    location: 'Based in New Jersey, working across the U.S.',
    email: contactEmail,
  },
  navigation: [
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
      'The most useful first note names the technical problem, the current system, what has already been tried, and what a finished handoff should look like.',
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
    'Independent product and systems engineering across physical systems, controls, automation, test equipment, and engineering software.',
} as const;
