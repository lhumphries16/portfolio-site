import type { NavItem } from './types';

const contactEmail = 'trehumphries16@gmail.com';
const contactPhone = '5739330405';
const contactPhoneDisplay = '(573) 933-0405';

export const profile = {
  brand: {
    name: 'Tre Humphries',
    fullName: 'Larry "Tre" Humphries',
    role: 'Whole-System Engineer',
    location: 'Morristown, New Jersey',
    email: contactEmail,
    phone: contactPhone,
    phoneDisplay: contactPhoneDisplay,
  },
  navigation: [
    { label: 'Industrial', href: '/industrial' },
    { label: 'Web', href: '/web' },
    { label: 'Index', href: '/index' },
    { label: 'About', href: '/about' },
  ] satisfies readonly NavItem[],
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lhumphr',
    },
  ],
  site: {
    origin: 'https://trehumphries.com',
    domain: 'trehumphries.com',
    cvUrl: '/cv/tre-humphries-cv.pdf',
    socialImagePath: undefined as string | undefined,
  },
  hero: {
    eyebrow: 'Whole-System Engineer',
    name: 'Tre Humphries',
    role: 'Whole-System Engineer',
    statement: 'I build systems that have to work.',
    support:
      'Hardware, controls, software, interfaces, and operations. One engineer, defined scopes, real handoff.',
    actions: [
      { label: 'Industrial & Controls', href: '/industrial' },
      { label: 'Web & Digital Systems', href: '/web' },
    ],
    image: {
      src: '/images/tre-panel-work-normalized.jpg',
      alt: 'Tre working inside an industrial control panel during field engineering work',
      caption: 'Panel work, field constraints, and systems that have to survive the real site.',
    },
    systemsProfile: [
      'Hardware + Controls',
      'Software + Interfaces',
      'Operations',
      'Clean Handoff',
    ],
  },
  about: {
    label: 'About',
    title: 'A mechanical engineer who keeps following the whole system.',
    paragraphs: [
      'My work usually lands where hardware, controls, software, interfaces, and operating reality start affecting each other.',
      'That can mean machines, field failures, internal tools, client websites, automation logic, or independent R&D. The through-line is building something useful that can survive real use.',
    ],
  },
  contact: {
    label: 'Contact',
    ctaLabel: 'Contact',
    title: 'Start with the actual problem.',
    intro:
      'If the scope can be defined, the deliverable can be named, and the handoff can be clean, that is enough to start.',
    helper:
      'Helpful context: what the system is trying to do, where it breaks down, and what a useful deliverable or handoff would look like.',
    success:
      'Required details are in place. Sending opens an email draft so the conversation can continue directly.',
    error: 'Please fill in the required fields before sending the note.',
    submitLabel: 'Start the conversation',
    methods: [
      {
        label: 'Email me',
        href: `mailto:${contactEmail}`,
        value: contactEmail,
      },
      {
        label: 'Call or text',
        href: `tel:${contactPhone}`,
        value: contactPhoneDisplay,
      },
    ],
    image: {
      src: '/images/tre-work-contact-normalized.jpg',
      alt: 'Tre beside road-application equipment during field engineering work',
    },
  },
  footerNote: 'One whole-system engineer working across controls, hardware, software, interfaces, and operations.',
} as const;
