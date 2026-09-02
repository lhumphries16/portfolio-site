export type ScheduleAudience = 'web' | 'controls';

const contactEmail = 'trehumphries16@gmail.com';
const contactPhone = '5739330405';
const contactPhoneDisplay = '(573) 933-0405';

type ScheduleConfig = {
  label: string;
  externalUrl?: string;
  fallbackHref: string;
};

const scheduleConfig: Record<ScheduleAudience, ScheduleConfig> = {
  web: {
    label: 'Schedule a Project Call',
    fallbackHref: '/contact?focus=web',
  },
  controls: {
    label: 'Schedule a Controls Consultation',
    fallbackHref: '/contact?focus=controls',
  },
};

export function getScheduleLink(audience: ScheduleAudience) {
  const config = scheduleConfig[audience];

  return {
    label: config.label,
    href: config.externalUrl ?? config.fallbackHref,
    external: Boolean(config.externalUrl),
  };
}

export const profile = {
  brand: {
    name: 'Tre Humphries',
    fullName: 'Larry "Tre" Humphries',
    role: 'Independent Web & Controls Practice',
    location: 'Based in New Jersey, working across the U.S.',
    email: contactEmail,
    phone: contactPhone,
    phoneDisplay: contactPhoneDisplay,
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
  scheduleConfig,
  portrait: {
    src: '/images/tre-box-desk-normalized.jpg',
    alt: 'Tre Humphries working on a laptop beside field documents in an industrial setting.',
    fileName: 'tre-box-desk-normalized.jpg',
    objectPosition: '78% center',
  },
  site: {
    origin: 'https://trehumphries.com',
    domain: 'trehumphries.com',
    socialImagePath: '/images/tre-box-desk-normalized.jpg',
  },
  contact: {
    ctaLabel: 'Contact',
    helper:
      'The most useful first note names the real problem, the current system, and what a clean handoff would look like.',
    success: 'Opening a direct email draft.',
    error: 'Please complete the required fields before opening the email draft.',
    submitLabel: 'Open email draft',
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
