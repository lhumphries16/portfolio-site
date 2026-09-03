import { getScheduleLink } from '../profile';

export const siteContent = {
  home: {
    title: 'Serious websites and digital systems for established businesses that do real work.',
    intro: [
      'Tre builds professional websites, intake flows, and practical digital systems for established service businesses and local brands that already have substance.',
      'When the problem sits closer to the machine, the sequence, or the engineering handoff, the same practice also takes on scoped controls work with a defined deliverable.',
    ],
    reputationPoints: [
      { label: 'Web engagements', value: 'Typically start around $3,000' },
      { label: 'Delivery model', value: 'Fixed scope, fixed fee, clean handoff' },
      { label: 'Controls work', value: 'Senior review or design on defined problems' },
    ],
    webPoints: [
      'Fixed-scope website and search foundation',
      'Client-owned launch, documentation, and handoff',
      'Digital systems that fit the business instead of dressing around it',
    ],
    controlsPoints: [
      'One system, panel, machine, or workflow per engagement',
      'Senior review or design clarity without open-ended ownership',
      'Useful findings, design notes, and handoff-ready deliverables',
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
    title: 'One practice that stays close to the business, the system, and the handoff.',
    paragraphs: [
      'The through-line is not lots of unrelated technology. It is understanding how a real business or technical system works, finding where requirements get messy, and turning that into something clear enough to build and hand off.',
      'That can look like a contractor website with a better intake path, a service-area system, a controls review before commissioning, or internal workflow tooling that removes guesswork from engineering work.',
      'The practice is intentionally small, direct, and bounded. The goal is useful work with clear ownership after delivery, not permanent attachment to the client.',
    ],
    pillars: [
      {
        title: 'Mechanical and controls foundation',
        body: 'A large part of the judgment here comes from real equipment, field conditions, commissioning logic, and engineering handoffs, not from treating every problem like abstract software.',
      },
      {
        title: 'Business-facing web delivery',
        body: 'The web side is strongest when a business already has substance and just needs the digital system to represent that substance clearly.',
      },
      {
        title: 'Bounded scope by design',
        body: 'Projects are sold to end with a useful result and clear ownership, not to create dependence on an always-on freelancer.',
      },
    ],
  },
  contact: {
    title: 'Start with the real problem.',
    intro:
      'Choose the path that matches the work. If it helps to send context first, use the outline form and Tre can reply directly with the next step.',
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
  web: getScheduleLink('web'),
  controls: getScheduleLink('controls'),
} as const;
