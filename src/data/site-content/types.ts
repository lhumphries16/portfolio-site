export type PortfolioCategory = 'web' | 'controls';
export type PortfolioTreatment = 'flagship' | 'case-study' | 'project-card';

export type PortfolioAsset = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudySection = {
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type CaseStudyData = {
  eyebrow: string;
  intro: readonly string[];
  facts: readonly {
    label: string;
    value: string;
  }[];
  highlights: readonly string[];
  assets: readonly PortfolioAsset[];
  sections: readonly CaseStudySection[];
};

export type PortfolioItem = {
  slug: string;
  title: string;
  shortTitle?: string;
  year: string;
  category: PortfolioCategory;
  treatment: PortfolioTreatment;
  relationshipLabel: string;
  context: string;
  summary: string;
  whatItProves: string;
  caution?: string;
  liveUrl?: string;
  primaryAsset: PortfolioAsset;
  supportingAssets?: readonly PortfolioAsset[];
  caseStudy?: CaseStudyData;
};
