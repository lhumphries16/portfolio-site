import type { EraId } from '../eras/types';

export const artifactTypes = ['project', 'experiment', 'experience', 'writing'] as const;
export const artifactDomains = [
  'physical',
  'controls',
  'embedded',
  'software',
  'web',
  'operations',
  'data',
  'media',
  'design',
  'aerospace',
] as const;
export const artifactMediaTypes = [
  'image',
  'video',
  'pdf',
  'iframe',
  'preserved-site',
  'interactive',
  'audio',
] as const;

export type ArtifactType = (typeof artifactTypes)[number];
export type ArtifactDomain = (typeof artifactDomains)[number];
export type ArtifactMediaType = (typeof artifactMediaTypes)[number];
export type ArtifactDatePrecision = 'day' | 'month' | 'year' | 'approximate';
export type ArtifactWeight = 'marker' | 'card' | 'feature';
export type ArtifactDetailTemplate =
  | 'standard'
  | 'archive'
  | 'case-study'
  | 'experience'
  | 'paper';
export type ArtifactSurface = 'home' | 'industrial' | 'web';

export type ArtifactLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ArtifactMedia = {
  type: ArtifactMediaType;
  src: string;
  title?: string;
  poster?: string;
  alt?: string;
  caption?: string;
  featured?: boolean;
  display?: {
    variant?: 'default' | 'wide' | 'compact';
  };
};

export type Artifact = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  date: {
    start: string;
    end?: string;
    precision?: ArtifactDatePrecision;
  };
  sortDate: string;
  type: ArtifactType;
  domains: readonly ArtifactDomain[];
  era?: EraId;
  summary: string;
  story?: string;
  status?: string;
  highlights?: readonly string[];
  links?: readonly ArtifactLink[];
  display: {
    weight: ArtifactWeight;
    featured?: boolean;
    current?: boolean;
  };
  media?: readonly ArtifactMedia[];
  placement?: Partial<Record<ArtifactSurface, boolean>>;
  order?: Partial<Record<ArtifactSurface, number>>;
  detail?: {
    enabled: boolean;
    template?: ArtifactDetailTemplate;
  };
  visibility?: {
    published?: boolean;
    safeForPublic?: boolean | 'pending-review';
  };
};

export type ArtifactTypeFilter = 'all' | ArtifactType;
export type ArtifactDomainFilter = 'all' | ArtifactDomain;
export type ArtifactYearRange = {
  start: number;
  end: number;
};
export type ArtifactYearBounds = {
  min: number;
  max: number;
};

export type ArtifactFilters = {
  type: ArtifactTypeFilter;
  domain: ArtifactDomainFilter;
  years: ArtifactYearRange;
};
