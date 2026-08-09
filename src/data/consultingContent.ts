export const consultingContent = {
  hero: {
    label: 'Consulting',
    title: 'Scoped engineering work with clear deliverables and a clean handoff.',
    paragraphs: [
      'This is not indefinite system ownership, open-ended support, or staff augmentation.',
      'It is short, fixed-scope engineering work where the boundary is clear, the output is useful, and the client can own what comes next.',
    ],
    notes: [
      'Fixed scope',
      'Clear deliverables',
      'Short engagement',
      'High-trust handoff',
    ],
  },
  controls: {
    label: 'Offer 01',
    title: 'Controls audit and design-for-hire',
    summary:
      'A short, fixed-scope controls engagement for clarity, risk reduction, and clean handoff.',
    auditFocus: [
      'Sequence and control intent',
      'I/O and signal assumptions',
      'Interlocks and fault handling',
      'Documentation versus program behavior',
      'Commissioning risks',
      'Engineering and field handoff risks',
    ],
    outcome:
      'A prioritized written set of findings and corrective recommendations, or a defined controls design package ready for implementation by the client or integrator.',
    designDeliverables: [
      'Sequence of operations',
      'Modes and states',
      'Auto/manual and start/stop behavior',
      'Fault and recovery behavior',
      'Signal intent and assumptions',
      'Edge-case guidance',
      'Commissioning and verification checklist',
    ],
    typicalEngagement: [
      'One machine, panel, system, or project',
      'Fixed deliverables',
      'Roughly 3 to 10 business days',
      'Typically $3k to $15k',
    ],
    boundaries: [
      'No open-ended on-call support',
      'No indefinite ownership',
      'No assumed maintenance responsibility',
      'Implementation separately scoped if needed',
    ],
  },
  process: {
    label: 'Offer 02',
    title: 'Process and information flow audit',
    summary:
      'A fixed-scope review of one real workflow where information, decisions, or ownership break down.',
    examples: [
      'Sales to engineering',
      'Engineering to field',
      'Field to design feedback',
      'Quoting to execution',
      'Project intake to delivery',
    ],
    focus: [
      'How work actually happens',
      'Where information gets lost',
      'Where assumptions disappear',
      'Where ownership becomes unclear',
      'Where rework and surprises are introduced',
    ],
    processSteps: [
      'Scope confirmation',
      'Current-state review',
      'Identify 3 to 5 major friction points',
      'Implement one practical improvement',
      'Document and hand off',
    ],
    improvements: [
      'Handoff checklist',
      'Decision and change log',
      'Standardized intake form',
      'Clarification workflow',
      'Lightweight SOP or process note',
    ],
    typicalEngagement: [
      'One workflow',
      'Roughly 2 to 3 weeks',
      'Typically $5k to $10k fixed fee',
    ],
  },
  adjacent: {
    label: 'Adjacent work',
    title: 'I occasionally take on other tightly scoped engineering work that strongly fits this same background.',
    paragraphs: [
      'That can include work across controls, physical systems, software, and operations when the fit is unusually strong.',
      'The common requirement is still the same: clear problem, clear deliverable, clean handoff.',
    ],
    action: {
      href: '/#contact',
      label: 'Start a conversation',
    },
  },
} as const;
