export const eraIds = [
  'high-school',
  'purdue',
  'innerspec',
  'mainstream',
  'gaf-roads',
  'independent-work',
] as const;

export type EraId = (typeof eraIds)[number];

export type Era = {
  id: EraId;
  label: string;
  span: string;
  date: {
    start: string;
    end?: string;
  };
  summary: string;
  themes: readonly string[];
};
