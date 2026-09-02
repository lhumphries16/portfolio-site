import { ButtonLink } from './ButtonLink';
import type { PortfolioItem } from '../data/siteContent';

type ProjectCardProps = {
  item: PortfolioItem;
  className?: string;
  variant?: 'feature' | 'standard' | 'compact';
  showAction?: boolean;
};

const imageAspectByVariant = {
  feature: 'aspect-[16/10] lg:h-full lg:min-h-[25rem]',
  standard: 'aspect-[16/11]',
  compact: 'aspect-[4/3]',
} as const;

const titleClassByVariant = {
  feature: 'text-[clamp(2rem,4vw,3rem)]',
  standard: 'text-[1.5rem]',
  compact: 'text-[1.18rem]',
} as const;

const articleClassByVariant = {
  feature:
    'grid gap-5 rounded-[2rem] border border-carbon/10 bg-white p-4 shadow-[0_22px_70px_rgba(24,34,45,0.08)] md:p-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start',
  standard:
    'grid gap-4 rounded-[1.7rem] border border-carbon/10 bg-white p-4 shadow-[0_18px_55px_rgba(24,34,45,0.07)] md:p-5',
  compact:
    'grid gap-3 rounded-[1.45rem] border border-carbon/10 bg-white p-3 shadow-[0_14px_40px_rgba(24,34,45,0.06)] md:p-4',
} as const;

export function ProjectCard({
  item,
  className = '',
  variant = 'standard',
  showAction = true,
}: ProjectCardProps) {
  const action =
    item.caseStudy
      ? { href: `/work/${item.slug}`, label: 'Read case study', external: false }
      : item.liveUrl
        ? { href: item.liveUrl, label: 'View live site', external: true }
        : null;

  return (
    <article className={`${articleClassByVariant[variant]} ${className}`.trim()}>
      <div className="overflow-hidden rounded-[1.35rem] border border-carbon/8 bg-bone">
        <img
          className={`${imageAspectByVariant[variant]} w-full object-cover object-top`}
          src={item.primaryAsset.src}
          alt={item.primaryAsset.alt}
        />
      </div>

      <div className="grid gap-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-carbon/42">
          <span>{item.relationshipLabel}</span>
          <span>{item.year}</span>
        </div>

        <div className="grid gap-2">
          {variant === 'compact' ? null : (
            <p className="m-0 text-[0.98rem] leading-relaxed text-carbon/58">{item.context}</p>
          )}
          <h3 className={`m-0 font-semibold leading-[0.96] tracking-[-0.04em] text-carbon ${titleClassByVariant[variant]}`}>
            {item.shortTitle ?? item.title}
          </h3>
          <p className={`m-0 leading-relaxed text-carbon/74 ${variant === 'compact' ? 'text-[0.96rem]' : 'text-[1rem]'}`}>
            {item.summary}
          </p>
        </div>

        {item.caution ? (
          <p className={`m-0 leading-relaxed text-carbon/58 ${variant === 'compact' ? 'hidden text-[0.82rem] md:block' : 'text-sm'}`}>
            {item.caution}
          </p>
        ) : null}

        {showAction && action ? (
          <div className="pt-1">
            <ButtonLink external={action.external} href={action.href} variant="text">
              {action.label}
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </article>
  );
}
