import type { ClientWorkRecord } from './types';

export const clientWork = [
  {
    id: 'all-seasons',
    client: 'All Seasons',
    years: '2021',
    title: 'Website delivery and client-managed web presence',
    summary:
      'Independent delivery work around a client website that needed to be practical, editable, and usable by the business after handoff.',
    detail:
      'This record stays intentionally compact because there is no approved public media in the repo yet, but it marks the early client-work stream that later expanded into broader digital and systems work.',
    domains: ['Website delivery', 'Client handoff', 'Content management'],
    technologies: ['Static site delivery', 'Client-controlled content'],
    preview: {
      previewMode: 'iframe',
      previewSrc: 'https://allseasonsmo.com/home/',
      previewTitle: 'All Seasons live site preview',
      previewCaption: 'Live site preview loaded from the public website.',
    },
    previewPlaceholder: {
      title: 'Client preview reserved',
      note: 'No approved browser capture is stored in this repo yet.',
      lines: ['public site', 'content ownership', 'handoff'],
      caption: 'Preview slot ready for a client-safe capture.',
    },
    liveUrl: 'https://allseasonsmo.com',
  },
  {
    id: 'homeems',
    client: 'HomeEMS',
    years: '2024',
    title: 'Website + lead / service-area system',
    summary:
      'A contractor website and operating system supporting lead generation, service-area management, project imagery, analytics, and client-controlled content.',
    detail:
      'The interesting part here was not only the public site. It was the system around it: content ownership, lead intake, geography, media management, and the business logic required for a small operator to keep using it after launch.',
    domains: ['Webflow', 'CMS', 'GIS', 'Analytics', 'Lead intake'],
    technologies: ['Webflow', 'Forms', 'Mapping logic', 'Client-controlled content'],
    preview: {
      previewMode: 'iframe',
      previewSrc: 'https://www.home-ems.net/',
      previewTitle: 'HomeEMS live site preview',
      previewCaption: 'Live site preview loaded from the public website.',
    },
    previewPlaceholder: {
      title: 'Browser preview ready',
      note: 'No approved site capture is stored in the repo yet, so the live link is wired while preview media stays deliberate.',
      lines: ['service areas', 'lead intake', 'project imagery', 'content updates'],
      caption: 'BrowserPreview is ready for image, video, or iframe when approved media is available.',
    },
    liveUrl: 'https://home-ems.net',
    featured: true,
  },
  {
    id: 'scoped-consulting',
    client: 'Independent client work',
    years: '2025-now',
    title: 'Scoped engineering delivery',
    summary:
      'Short, bounded engineering engagements where the problem is clear, the deliverable is useful, and the handoff is clean.',
    detail:
      'This work sits between consulting and delivery: one defined problem, one usable output, and no assumption that I become the default owner afterward.',
    domains: ['Controls', 'Operations', 'Workflows', 'Handoffs'],
    technologies: ['Audit delivery', 'Design packages', 'Process notes'],
    previewPlaceholder: {
      title: 'Client work in progress',
      note: 'Representative artifacts will be added record by record as they can be shared.',
      lines: ['fixed scope', 'clear deliverable', 'clean handoff'],
    },
    caseStudyUrl: '/consulting',
  },
] as const satisfies readonly ClientWorkRecord[];
