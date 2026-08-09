import type { NavItem } from './types';

export const profile = {
  brand: {
    name: 'Tre Humphries',
    fullName: 'Larry "Tre" Humphries',
    role: 'Mechanical Engineer / Systems Builder',
    location: 'Morristown, New Jersey',
    email: 'trehumphries16@gmail.com',
  },
  navigation: [
    { label: 'Overview', href: '/' },
    { label: 'Experience', href: '/experience' },
    { label: 'Client Work', href: '/client-work' },
    { label: 'Projects', href: '/projects' },
    { label: 'Consulting', href: '/consulting' },
    { label: 'About', href: '/#about' },
    { label: 'CV', href: 'mailto:trehumphries16@gmail.com?subject=CV%20request', external: true },
  ] satisfies readonly NavItem[],
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lhumphr',
    },
  ],
  hero: {
    eyebrow: 'Overview',
    name: 'Tre Humphries',
    role: 'Mechanical Engineer / Systems Builder',
    statement: 'I design and build physical systems, controls, and the software around them.',
    support:
      'Controls engineering, industrial automation, embedded systems, internal software, data tools, commissioning, and operational workflows.',
    actions: [
      { label: 'View engineering experience', href: '/experience' },
      { label: 'View client work', href: '/client-work' },
    ],
    image: {
      src: '/images/tre-panel-work-normalized.jpg',
      alt: 'Tre working inside an industrial control panel during field engineering work',
      caption: 'Panel work, field constraints, and real commissioning conditions.',
    },
    systemsProfile: [
      'Physical Systems',
      'Controls + Embedded',
      'Software + Data',
      'Operations',
    ],
  },
  about: {
    label: 'About',
    title: 'A mechanical engineer who keeps getting pulled toward the full system.',
    paragraphs: [
      'My work tends to land at the seam between hardware, controls, software, and the operational decisions around them.',
      'That can mean machine behavior, commissioning, internal tools, field failures, client delivery, or independent R&D. The consistent part is building something useful that can survive contact with the real work.',
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Available for scoped engineering work.',
    intro:
      'If the problem is real, the scope can be defined, and there is a useful handoff on the other side, that is enough to start.',
    helper:
      'Helpful context: what the system is trying to do, where it breaks down, and what a useful deliverable or handoff would look like.',
    success:
      'Required details are in place. Sending opens an email draft so the conversation can continue directly.',
    error: 'Please fill in the required fields before sending the note.',
    submitLabel: 'Start the conversation',
    image: {
      src: '/images/tre-work-contact-normalized.jpg',
      alt: 'Tre beside road-application equipment during field engineering work',
    },
  },
  footerNote: 'Engineering work across physical systems, controls, software, and operations.',
} as const;
