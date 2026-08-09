export type NavItem = {
  href: string;
  label: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export const siteContent = {
  brand: {
    name: 'Larry "Tre" Humphries',
    role: 'Engineer & Systems Builder',
    location: 'Morristown, New Jersey',
    email: 'trehumphries16@gmail.com',
  },
  socialLink: {
    href: 'https://www.linkedin.com/in/lhumphr',
    label: 'LinkedIn',
  },
  navigation: [
    { href: '/#about', label: 'About' },
    { href: '/#work', label: 'Work' },
    { href: '/consulting', label: 'Consulting' },
    { href: '/projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ] satisfies NavItem[],
  hero: {
    label: 'Engineer & Systems Builder',
    title: 'I build the systems between the machine and the business.',
    paragraphs: [
      'I work across mechanical engineering, controls, industrial automation, embedded systems, software, commissioning, troubleshooting, and operational workflows.',
      'I am most useful when the problem crosses those boundaries, the scope can be defined clearly, and the result needs to hold up after handoff.',
    ],
    credibility:
      'Mechanical engineer. Field-tested controls experience. Software shaped around real operations.',
    primaryAction: { href: '#contact', label: 'Start a scoped conversation' },
    secondaryAction: { href: '#work', label: 'View selected work' },
    photo: {
      src: '/images/tre-work-contact-normalized.jpg',
      alt: 'Tre working on an industrial control panel',
    } satisfies ImageAsset,
    annotations: ['Physical System', 'Controls', 'Software', 'Operations'],
  },
  systems: {
    id: 'about',
    label: 'What I work across',
    title: 'I work where equipment, controls, software, and operations meet.',
    intro: [
      'Most operational problems are not contained inside one discipline.',
      'The equipment behaves one way. The controls describe another. The software captures only part of the picture. The people doing the work create their own process around the gaps.',
      'My work is usually connecting those layers.',
    ],
    layers: [
      {
        index: '01',
        title: 'Physical System',
        body: 'Equipment, motors, sensors, mechanisms, and field conditions.',
      },
      {
        index: '02',
        title: 'Controls',
        body: 'PLCs, HMIs, VFDs, CODESYS, BACnet, Modbus, and motion systems.',
      },
      {
        index: '03',
        title: 'Software',
        body: 'Python, React, Flask, APIs, databases, dashboards, and internal tools.',
      },
      {
        index: '04',
        title: 'Operations',
        body: 'Quoting, configuration, testing, production, commissioning, and handoffs.',
      },
    ],
  },
  career: {
    id: 'experience',
    label: 'Career path',
    title: 'My work keeps moving toward the seam between disciplines.',
    intro: [
      'The industries and job titles changed, but the pattern stayed consistent: I kept getting pulled toward the problems between equipment, controls, software, and the people responsible for keeping everything moving.',
    ],
    proof: {
      src: '/images/tre-box-desk-normalized.jpg',
      alt: 'Tre working from a temporary workstation during an industrial engineering project',
      caption: "Sometimes I'm lucky enough to get a box desk.",
    } satisfies ImageAsset,
    proofGallery: [
      {
        src: '/images/tre-panel-work-normalized.jpg',
        alt: 'Tre working on an industrial control panel',
        caption: 'Panel build and wiring work in progress.',
      },
    ] satisfies ImageAsset[],
    entries: [
      {
        shortDate: '21-22',
        yearRange: '2021-2022',
        role: 'Controls Engineer',
        company: 'Innerspec Technologies',
        body: 'Delivered industrial automation systems using Allen-Bradley, Siemens, and Beckhoff PLCs, motion systems, and field-integrated ultrasonic inspection equipment.',
        image: {
          src: '/images/rollmate-inspection-system_innerspec.jpg',
          alt: 'Industrial ultrasonic inspection equipment operating on a large metal component',
          caption: 'Mill-roll robotic inspection project',
        } satisfies ImageAsset,
      },
      {
        shortDate: '22-24',
        yearRange: '2022-2024',
        role: 'Controls Engineer',
        company: 'Mainstream Fluid & Air',
        body: 'Led controls work for custom commercial HVAC fan-array systems using PLCs, HMIs, VFDs, BACnet, and Modbus, including startup, commissioning, quality, and field troubleshooting.',
      },
      {
        shortDate: '24-25',
        yearRange: '2024-2025',
        role: 'Automation Engineer',
        company: 'Mainstream Fluid & Air',
        body: 'Built internal quoting, fan-selection, dashboard, database, and process-automation tools using React, Python, Flask, PostgreSQL, REST APIs, authentication, and engineering logic.',
      },
      {
        shortDate: '25-26',
        yearRange: '2025-2026',
        role: 'Senior Engineering & Technology Developer',
        company: 'GAF Roads / Standard Industries',
        body: 'Worked across CODESYS controls, mechanical behavior, field troubleshooting, edge data, OTA readiness, cloud integration paths, and operator workflows on an early electric sprayer platform.',
      },
    ],
    close:
      'Across each role, I became increasingly responsible for the system around the system: the tools, information, configuration, testing, and operating processes that made the core product usable.',
  },
  work: {
    id: 'work',
    label: 'Selected work',
    title: 'Projects where I built the system around the work.',
    intro: [
      'The work varies in form: a control system, an internal platform, a commissioning workflow, or a business tool, but it usually begins with the same question:',
      'What is making the real work harder than it needs to be?',
    ],
    featured: [
      {
        kicker: 'Internal platform',
        title: 'Turning product knowledge into an internal quoting and selection system',
        problem:
          'A technically complex product-selection and quoting workflow depended on spreadsheets, product rules, pricing logic, engineering knowledge, and handoffs.',
        listLabel: 'Built',
        items: [
          'React frontend',
          'Python/Flask backend',
          'PostgreSQL',
          'Authentication and roles',
          'Engineering calculations',
          'Pricing logic',
          'Product-selection workflow',
          'Windows-only vendor DLL integration',
        ],
        why:
          'It moved engineering knowledge into a clearer internal system with better handoffs and less dependence on individual memory.',
        images: [
          {
            src: '/images/mainstream_fan_submittal_example_doc_public.jpg',
            alt: 'Fan performance data used in an internal product-selection workflow',
            caption: 'Internal fan-selection workflow',
            className: 'image-frame--interface',
          },
        ] satisfies ImageAsset[],
      },
      {
        kicker: 'Field reliability',
        title: 'Stabilizing an early electric sprayer in real field conditions',
        problem:
          'An early electric sprayer platform needed stronger reliability and production readiness.',
        listLabel: 'Worked across',
        items: [
          'CODESYS controls',
          'Mechanical behavior',
          'Field failure investigation',
          'Edge data',
          'OTA readiness',
          'Cloud integration',
          'Operator workflows',
          'Cross-functional technical communication',
        ],
        why:
          'The issue was the whole operating system around the machine, not just one controller.',
        reverse: true,
        images: [
          {
            src: '/images/feature_road-application-1.jpg',
            alt: 'Early electric road-treatment sprayer platform concept',
            caption: 'Sprayer platform concept',
          },
          {
            src: '/images/roads-decline2.avif',
            alt: 'Road surface field-condition comparison',
            caption: 'Field-condition reference',
            className: 'image-frame--wide',
          },
        ] satisfies ImageAsset[],
      },
      {
        kicker: 'Controls delivery',
        title: 'Connecting HVAC equipment, controls, and commissioning',
        problem:
          'Configurable commercial HVAC fan-array systems needed practical controls, integration, commissioning, and field support.',
        listLabel: 'Built and supported',
        items: [
          'PLC/HMI logic',
          'VFD programming',
          'BACnet',
          'Modbus',
          'Product testing',
          'Startup',
          'Commissioning',
          'Quality support',
          'Field troubleshooting',
        ],
        why:
          'A controls design only works when it survives the drive, motor, equipment, building system, installer, and actual operating conditions.',
        images: [
          {
            src: '/images/mainstream_rooftop_ahu_public.jpg',
            alt: 'Industrial HVAC equipment and manufacturing test setup',
            caption: 'Installed HVAC equipment context',
          },
        ] satisfies ImageAsset[],
      },
    ],
    additionalLabel: 'Other systems',
    additionalTitle: 'Supporting tools, workflows, and smaller builds',
    additional: [
      {
        title: 'Project queue dashboard',
        body: 'Internal visibility for tracking work moving across teams and priorities.',
        tags: ['Software', 'Operations'],
      },
      {
        title: 'Drive-programming workflow',
        body: 'Standardized workflow for configuring drives more reliably and repeatably.',
        tags: ['Controls', 'Workflow'],
        image: {
          src: '/images/yaskawa_drive_photo_public.jpg',
          alt: 'Yaskawa variable-frequency drive used in industrial control systems',
          caption: 'Drive-programming hardware reference',
          className: 'image-frame--product',
        } satisfies ImageAsset,
      },
      {
        title: 'Motor and product database',
        body: 'Structured product information for engineering, selection, and reference work.',
        tags: ['Database', 'Engineering'],
        image: {
          src: '/images/baldor_motor_photo_public.jpg',
          alt: 'Baldor industrial electric motor',
          caption: 'Motor reference image',
          className: 'image-frame--product',
        } satisfies ImageAsset,
      },
      {
        title: 'Manufacturing and engineering utilities',
        body: 'Small internal tools that reduce repeated manual work across production and engineering.',
        tags: ['Manufacturing', 'Utilities'],
      },
      {
        title: 'HomeEMS digital and lead-generation system',
        body: 'Digital workflow supporting lead intake and follow-up around a small business operating system.',
        tags: ['Software', 'Business'],
      },
      {
        title: 'Operational logging and forecasting system',
        body: 'Internal logging and planning support for tracking demand, activity, and expected work.',
        tags: ['Logging', 'Forecasting'],
        image: {
          src: '/images/hydro_basil_rack_photo_my_garage.jpg',
          alt: 'Hydroponic growing rack used for operational logging and forecasting experiments',
          caption: 'Vision-supported garage horticulture rack',
          className: 'image-frame--wide-card',
        } satisfies ImageAsset,
      },
    ],
  },
  pathways: {
    label: 'Consulting and projects',
    title: 'Professional work, consulting, and independent projects each have a different role here.',
    intro: [
      'The work above is professional evidence.',
      'Consulting is bounded engineering work clients can hire me for. Projects are independent engineering efforts I am actively building and occasionally want overlapping expertise, spaces, venues, or other support around.',
    ],
    cards: [
      {
        label: 'Consulting',
        title: 'Fixed-scope engineering work with clear deliverables and clean handoff.',
        body:
          'Two defined offers: controls audit and design-for-hire, plus process and information-flow audit work.',
        href: '/consulting',
        actionLabel: 'View consulting',
      },
      {
        label: 'Projects',
        title: 'Independent engineering work I am actively building now.',
        body:
          'Experimental systems, field notes, current questions, and places where the right collaborators or venues could matter.',
        href: '/projects',
        actionLabel: 'View projects',
      },
    ],
  },
  problems: {
    id: 'problems',
    label: 'Where I fit best',
    title: 'Bring me the problems that sit between roles.',
    intro: [
      'The best fit is usually a real operational problem touching several systems at once.',
      'The important part is that we can draw a boundary around it, define a useful output, and hand it back cleanly.',
    ],
    items: [
      'A product is difficult to configure, test, or commission',
      "Important knowledge lives in a few people's heads",
      'Equipment, controls, and software do not communicate cleanly',
      'Production or engineering lacks visibility',
      'A repeated task needs to become a tool',
      'A problem crosses departments and nobody owns the whole thing',
      'A small business has outgrown the systems it began with',
    ],
  },
  approach: {
    id: 'approach',
    label: 'How I work',
    title: 'Start with the real work, then build the right layer.',
    intro: [
      'Before deciding that the answer is a dashboard, control change, or new piece of software, I want to understand what the equipment does, how the process works today, and where the information or decisions stop lining up.',
    ],
    steps: [
      {
        index: '01',
        title: 'See the work in context',
        body: 'Talk to the people doing it, inspect the equipment, and understand the current workflow.',
      },
      {
        index: '02',
        title: 'Find the actual bottleneck',
        body: 'Separate the visible frustration from the underlying technical or operational constraint.',
      },
      {
        index: '03',
        title: 'Build the smallest useful system',
        body: 'Create enough structure to improve the work without overbuilding around assumptions.',
      },
      {
        index: '04',
        title: 'Test it under real conditions',
        body: 'Use the system with the equipment, data, and people it was designed to support.',
      },
      {
        index: '05',
        title: 'Document it and hand it off',
        body: 'Capture the important logic, respond to real use, and leave the client with something they can own without indefinite dependence on the builder.',
      },
    ],
  },
  contact: {
    id: 'contact',
    label: 'Start a conversation',
    title: 'You do not need a polished brief.',
    intro: [
      'Send me the messy version.',
      'If the problem is real, the scope can be defined, and there is a useful deliverable on the other side, that is enough to start the conversation.',
      'Tell me what the equipment or team is trying to do, how the process works today, where it becomes difficult, and what a better result or handoff would look like.',
      'I can usually tell fairly quickly whether my background is useful to the problem.',
    ],
    helper:
      'Helpful context: how you handle it today, what makes it difficult, and what decision, deliverable, or handoff would help.',
    success:
      'Required details are in place. Sending opens an email draft so we can continue the conversation.',
    error: 'Please fill in the required fields before sending the note.',
    submitLabel: 'Start the scoped conversation',
    image: {
      src: '/images/tre-work-contact-normalized.jpg',
      alt: 'Tre standing beside industrial road-treatment equipment',
      className: 'contact-photo-image',
    } satisfies ImageAsset,
  },
} as const;
