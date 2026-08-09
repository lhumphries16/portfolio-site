import { clientWork } from './clientWork';
import { experience } from './experience';
import { projects } from './projects';

export type CareerStreamItem = {
  id: string;
  years: string;
  title: string;
  subtitle: string;
  detail: string;
  domains: readonly string[];
  href: string;
  status?: string;
};

export const careerStreams = [
  {
    id: 'corporate',
    label: 'Corporate Engineering',
    items: experience.map((record) => ({
      id: record.id,
      years: record.timelineYear,
      title: record.company,
      subtitle: record.role,
      detail: record.summary,
      domains: record.domains,
      href: `/experience#${record.id}`,
    })),
  },
  {
    id: 'client',
    label: 'Client Work',
    items: clientWork.map((record) => ({
      id: record.id,
      years: record.years.split('-')[0],
      title: record.client,
      subtitle: record.title,
      detail: record.summary,
      domains: record.domains,
      href: record.caseStudyHref ?? `/client-work#${record.id}`,
    })),
  },
  {
    id: 'rd',
    label: 'R&D / Projects',
    items: projects.map((record) => ({
      id: record.slug,
      years: record.timelineLabel,
      title: record.title,
      subtitle: record.status,
      detail: record.summary,
      domains: record.tags,
      href: `/projects/${record.slug}`,
      status: record.statusTone === 'active' ? record.status : undefined,
    })),
  },
] as const;
