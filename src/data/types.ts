export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ImageAsset = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export type MediaPlaceholder = {
  title: string;
  note: string;
  lines?: readonly string[];
  caption?: string;
};

export type BrowserPreviewMode = 'image' | 'video' | 'iframe';

export type BrowserPreviewRecord = {
  previewMode: BrowserPreviewMode;
  previewSrc: string;
  previewTitle: string;
  previewAlt?: string;
  previewCaption?: string;
  previewPosterSrc?: string;
  previewAutoplay?: boolean;
  previewLoop?: boolean;
  previewMuted?: boolean;
  previewObjectPosition?: string;
  previewObjectFit?: 'cover' | 'contain';
};

export type ExperienceRecord = {
  id: string;
  company: string;
  role: string;
  years: string;
  timelineYear: string;
  summary: string;
  detail: string;
  domains: readonly string[];
  technologies: readonly string[];
  responsibilities: readonly string[];
  image?: ImageAsset;
  featured?: boolean;
};

export type ClientWorkRecord = {
  id: string;
  client: string;
  years: string;
  title: string;
  summary: string;
  detail: string;
  domains: readonly string[];
  technologies: readonly string[];
  preview?: BrowserPreviewRecord;
  previewPlaceholder: MediaPlaceholder;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
};

export type ProjectExternalLink = {
  label: string;
  url: string;
  type: string;
};

export type ProjectHeroMediaType = 'image' | 'video';

export type ProjectHeroPlaceholder = {
  ariaLabel: string;
  meta: readonly {
    label: string;
    value: string;
  }[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  timelineLabel: string;
  status: string;
  statusTone?: 'default' | 'active';
  seekingSupport?: string;
  summary: string;
  tags: readonly string[];
  currentStage: string;
  overview: readonly string[];
  currentWork: readonly string[];
  questions: readonly string[];
  lookingFor: readonly string[];
  lastUpdated: string;
  heroMediaType?: ProjectHeroMediaType;
  heroMediaSrc?: string;
  heroMediaAlt?: string;
  heroMediaTitle?: string;
  heroMediaCaption?: string;
  posterSrc?: string;
  heroPlaceholder?: ProjectHeroPlaceholder;
  externalLinks?: readonly ProjectExternalLink[];
  featured?: boolean;
};

export type ConsultingOffer = {
  id: string;
  index: string;
  label: string;
  title: string;
  summary: string;
  meta: readonly {
    label: string;
    value: string;
  }[];
  sections: readonly {
    title: string;
    items?: readonly string[];
    body?: string;
    ordered?: boolean;
    tone?: 'default' | 'boundary';
  }[];
};

export type SystemRecord = {
  id: string;
  index: string;
  title: string;
  metadata: string;
  href: string;
  status?: string;
};
