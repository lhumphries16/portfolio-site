import { getScheduleLink } from '../profile';

export const siteContent = {
  home: {
    title: 'I build the systems between an idea and a working machine.',
    intro: [
      'Product and systems engineering across physical equipment, controls, automation, test systems, and the software around them.',
      'I work best on bounded technical problems where someone needs a clear owner from fuzzy requirements through prototype, commissioning, and handoff.',
    ],
    reputationPoints: [
      { label: 'Core strength', value: 'End-to-end technical ownership' },
      { label: 'Best fit', value: 'Complex physical + software systems' },
      { label: 'Delivery model', value: 'Scoped project, tested result, clean handoff' },
    ],
    capabilityPoints: [
      'Product development — architecture, prototypes, electromechanical systems, embedded hardware and software',
      'Controls & automation — PLC/HMI, VFDs, BAS, Modbus/BACnet, commissioning and troubleshooting',
      'Test & diagnostic systems — fixtures, automated test workflows, field tooling and validation',
      'Engineering software — internal tools, data systems, and software around physical operations',
    ],
  },
  web: {
    title: 'Websites and digital systems for established service businesses and local brands.',
    intro:
      'Built for operating businesses that already do real work in the world and need a site that finally looks as credible as the business behind it.',
    audience: [
      'Established service businesses with real crews, customers, equipment, or locations',
      'Local brands with real substance that need clearer presentation and customer flow',
      'Owners who want fixed scope, fixed pricing, and client ownership after launch',
    ],
    offer: [
      'Site strategy and structure',
      'Responsive custom design and build',
      'Core service or offering pages',
      'Contact, quote, or intake flow',
      'Foundational search structure',
      'Launch, documentation, and client ownership',
    ],
    process: [
      'Clarify the business, the customer path, and the pages that matter.',
      'Design and build the right amount of site.',
      'Review the working site against the real business before launch.',
      'Launch with structure, metadata, and a clean handoff.',
    ],
    boundaries: [
      'No indefinite retainer by default',
      'Ongoing maintenance is optional, not required',
      'Extra workflow, intake, or search work can be scoped separately when needed',
    ],
    pricing:
      'Website engagements typically start around $3,000. Final pricing is fixed upfront based on scope.',
  },
  controls: {
    title: 'Scoped controls engineering for teams that need senior clarity and a bounded deliverable.',
    intro:
      'Written for OEMs, controls teams, engineering managers, and technical operators who need a bounded review or design package their own team can act on.',
    proofNote:
      'Selected engineering work from prior roles across HVAC controls, machine systems, robotics, and internal engineering tools.',
    fit: [
      'A defined machine, panel, sequence, or workflow',
      'An owner who can name the current ambiguity, failure mode, or handoff risk',
      'A useful deliverable that can be described before the work starts',
    ],
    boundaries: [
      'No staff augmentation positioning',
      'No open-ended maintenance ownership',
      'Controls implementation only if separately scoped',
    ],
    steps: [
      'Confirm one system, workflow, or project and define the deliverable.',
      'Review or design the work independently with limited clarification as needed.',
      'Walk through the result together and close with a clean handoff.',
    ],
  },
  about: {
    title: 'A product and systems engineer who likes owning the whole technical problem.',
    paragraphs: [
      'My background spans mechanical systems, controls, robotics, field commissioning, internal engineering tools, and independent product work. The through-line is taking ambiguous technical requirements and turning them into something that works in the real world.',
      'I am strongest when hardware, controls, software, and field reality overlap — especially when a problem does not fit neatly inside one discipline or one person needs to carry it from architecture through test and handoff.',
      'The independent practice is intentionally small and project-based. The goal is clear ownership during the hard part, then a clean exit once the system is usable and documented.',
    ],
    pillars: [
      {
        title: 'Physical systems first',
        body: 'Mechanical constraints, wiring, actuators, sensors, operators, installation, and field conditions are part of the design — not afterthoughts around the software.',
      },
      {
        title: 'Front-to-back ownership',
        body: 'I am comfortable moving between architecture, controls, software, debugging, documentation, and commissioning when that is what it takes to get the system over the line.',
      },
      {
        title: 'Bounded by design',
        body: 'The best engagements have a real definition of done: a working prototype, a tested design, a commissioning result, or a handoff-ready technical package.',
      },
    ],
  },
  contact: {
    title: 'Bring me the technical problem.',
    intro:
      'If the work crosses hardware, controls, software, test, or field operations and needs a clear owner, send the current situation and what a good finished state would look like.',
  },
  offers: [
    {
      title: 'Controls Audit',
      summary:
        'A short, fixed-scope review of one existing controls system to identify ambiguity, risk, and likely failure modes before they keep surfacing in the field.',
      meta: [
        { label: 'Typical scope', value: 'One system, panel, machine, or project' },
        { label: 'Duration', value: '3 to 10 business days' },
        { label: 'Fee', value: '$3,000 to $15,000 fixed fee' },
      ],
      bullets: [
        'Sequence and control logic intent',
        'I/O mapping and signal assumptions',
        'Interlocks and fault handling',
        'Documentation versus program behavior',
        'Handoff risk between engineering and field',
      ],
    },
    {
      title: 'Controls Design-for-Hire',
      summary:
        'A defined design package for one system or project, built so an internal team or integrator can implement it without confusion about states, modes, or edge cases.',
      meta: [
        { label: 'Typical scope', value: 'One system, panel, machine, or project' },
        { label: 'Duration', value: '3 to 10 business days' },
        { label: 'Fee', value: '$3,000 to $15,000 fixed fee' },
      ],
      bullets: [
        'Sequence of operations',
        'Mode and state definitions',
        'Signal intent and assumptions',
        'Fault and recovery behavior',
        'Commissioning and verification checklist',
      ],
    },
    {
      title: 'Process & Information Flow Audit',
      summary:
        'A fixed-scope review of one workflow where information, decisions, or ownership are breaking down, ending with one lightweight practical workflow improvement and a clean closeout.',
      meta: [
        { label: 'Typical scope', value: 'One workflow' },
        { label: 'Duration', value: '2 to 3 weeks' },
        { label: 'Fee', value: '$5,000 to $10,000 fixed fee' },
      ],
      bullets: [
        'Current-state conversations and artifact review',
        'Three to five prioritized friction points',
        'One lightweight practical workflow improvement',
        'Documentation and clearly bounded follow-on scope',
      ],
    },
  ],
} as const;

export const ctaLinks = {
  project: getScheduleLink('project'),
  web: getScheduleLink('web'),
  controls: getScheduleLink('controls'),
} as const;
