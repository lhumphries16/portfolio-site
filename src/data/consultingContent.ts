import type { ConsultingOffer } from './types';

export const consultingContent = {
  hero: {
    label: 'Consulting',
    title: 'Scoped engineering work with clear deliverables and a clean handoff.',
    paragraphs: [
      'This is independent engineering work for defined problems, not open-ended ownership, staff augmentation, or indefinite maintenance.',
      'The useful version is bounded: one system, one workflow, one deliverable, and a handoff the client can own afterward.',
    ],
    notes: [
      'Fixed scope',
      'Clear deliverables',
      'Short engagement',
      'High-trust handoff',
    ],
  },
  offers: [
    {
      id: 'controls-audit-design',
      index: '01',
      label: 'Offer 01',
      title: 'Controls Audit & Design-for-Hire',
      summary:
        'A short, fixed-scope controls engagement for clarity, risk reduction, and clean handoff.',
      meta: [
        { label: 'Typical scope', value: 'One machine, panel, system, or project' },
        { label: 'Duration', value: '3 to 10 business days' },
        { label: 'Fee', value: '$3k to $15k fixed scope' },
        { label: 'Handoff', value: 'Written findings or a defined design package' },
      ],
      sections: [
        {
          title: 'Controls systems audit',
          items: [
            'Sequence and control intent',
            'I/O and signal assumptions',
            'Interlocks and fault handling',
            'Documentation versus program behavior',
            'Commissioning risks',
            'Engineering and field handoff risks',
          ],
        },
        {
          title: 'Outcome',
          body: 'A prioritized written set of findings and corrective recommendations, or a defined controls design package ready for implementation by the client or integrator.',
        },
        {
          title: 'Controls design-for-hire',
          items: [
            'Sequence of operations',
            'Modes and states',
            'Auto/manual and start/stop behavior',
            'Fault and recovery behavior',
            'Signal intent and assumptions',
            'Edge-case guidance',
            'Commissioning and verification checklist',
          ],
        },
        {
          title: 'Typical engagement',
          items: [
            'One machine, panel, system, or project',
            'Fixed deliverables',
            'Roughly 3 to 10 business days',
            'Typically $3k to $15k',
          ],
        },
        {
          title: 'What I do not own',
          items: [
            'No open-ended on-call support',
            'No indefinite ownership',
            'No assumed maintenance responsibility',
            'Implementation separately scoped if needed',
          ],
          tone: 'boundary',
        },
      ],
    },
    {
      id: 'process-information-flow',
      index: '02',
      label: 'Offer 02',
      title: 'Process & Information Flow Audit',
      summary:
        'A fixed-scope review of one real workflow where information, decisions, or ownership break down.',
      meta: [
        { label: 'Typical scope', value: 'One workflow' },
        { label: 'Duration', value: '2 to 3 weeks' },
        { label: 'Fee', value: '$5k to $10k fixed fee' },
        { label: 'Handoff', value: 'One implemented improvement plus documentation' },
      ],
      sections: [
        {
          title: 'Examples',
          items: [
            'Sales to engineering',
            'Engineering to field',
            'Field to design feedback',
            'Quoting to execution',
            'Project intake to delivery',
          ],
        },
        {
          title: 'Focus',
          items: [
            'How work actually happens',
            'Where information gets lost',
            'Where assumptions disappear',
            'Where ownership becomes unclear',
            'Where rework and surprises are introduced',
          ],
        },
        {
          title: 'Typical process',
          items: [
            'Scope confirmation',
            'Current-state review',
            'Identify 3 to 5 major friction points',
            'Implement one practical improvement',
            'Document and hand off',
          ],
          ordered: true,
        },
        {
          title: 'Possible improvements',
          items: [
            'Handoff checklist',
            'Decision and change log',
            'Standardized intake form',
            'Clarification workflow',
            'Lightweight SOP or process note',
          ],
        },
      ],
    },
  ] satisfies readonly ConsultingOffer[],
  adjacent: {
    label: 'Adjacent work',
    title: 'I occasionally take on other tightly scoped engineering work that strongly fits this same background.',
    paragraphs: [
      'That can include work across controls, physical systems, software, and operations when the fit is unusually strong.',
      'The common requirement stays the same: clear problem, clear deliverable, clean handoff.',
    ],
    action: {
      href: '/#contact',
      label: 'Start a conversation',
    },
  },
} as const;
