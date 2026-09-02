import { ButtonLink } from './ButtonLink';
import type { PortfolioItem } from '../data/siteContent';

type ProjectCardProps = {
  item: PortfolioItem;
  className?: string;
  variant?: 'feature' | 'standard' | 'compact';
  showAction?: boolean;
};

const imageAspectByVariant = {
  feature: 'aspect-[16/10] lg:h-full lg:min-h-[28rem]',
  standard: 'aspect-[16/11]',
  compact: 'aspect-[16/11]',
} as const;

const titleClassByVariant = {
  feature: 'text-[clamp(2rem,4vw,3.05rem)]',
  standard: 'text-[1.58rem]',
  compact: 'text-[1.24rem]',
} as const;

const articleClassByVariant = {
  feature:
    'grid gap-5 rounded-[2rem] border border-carbon/8 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-5 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] lg:items-start',
  standard:
    'grid gap-4 rounded-[1.8rem] border border-carbon/8 bg-white p-4 shadow-[0_18px_56px_rgba(15,23,42,0.07)] md:p-5',
  compact:
    'grid gap-3 rounded-[1.65rem] border border-carbon/8 bg-white p-3 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:p-4',
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
      <div className="overflow-hidden rounded-[1.45rem] border border-carbon/8 bg-paper">
        <img
          className={`${imageAspectByVariant[variant]} w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]`}
          src={item.primaryAsset.src}
          alt={item.primaryAsset.alt}
        />
      </div>

      <div className="grid gap-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.88rem] text-carbon/48">
          <span className="font-medium text-carbon/62">{item.relationshipLabel}</span>
          <span aria-hidden="true">&bull;</span>
          <span>{item.year}</span>
        </div>

        <div className="grid gap-2">
          <p className={`m-0 font-medium leading-relaxed text-cobalt ${variant === 'compact' ? 'text-[0.92rem]' : 'text-[0.95rem]'}`}>
            {item.context}
          </p>
          <h3 className={`m-0 font-semibold leading-[1.02] tracking-[-0.04em] text-carbon ${titleClassByVariant[variant]}`}>
            {item.shortTitle ?? item.title}
          </h3>
          <p className={`m-0 leading-relaxed text-carbon/72 ${variant === 'compact' ? 'text-[0.95rem]' : 'text-[1rem]'}`}>
            {item.summary}
          </p>
        </div>

        {item.caution ? (
          <p className={`m-0 rounded-[1.2rem] bg-paper/80 px-4 py-3 leading-relaxed text-carbon/56 ${variant === 'compact' ? 'hidden text-[0.82rem] md:block' : 'text-sm'}`}>
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
