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

export type BrowserPreviewMedia =
  | {
      type: 'image';
      image: ImageAsset;
      caption?: string;
    }
  | {
      type: 'video';
      src: string;
      title: string;
      poster?: string;
      caption?: string;
    }
  | {
      type: 'iframe';
      src: string;
      title: string;
      caption?: string;
    }
  | {
      type: 'placeholder';
      title: string;
      note: string;
      lines: readonly string[];
      caption?: string;
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
  media: BrowserPreviewMedia;
  liveUrl?: string;
  caseStudyHref?: string;
  featured?: boolean;
};

export type ProjectLink = {
  href: string;
  label: string;
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
  hero?: ImageAsset;
  externalLink?: ProjectLink;
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
