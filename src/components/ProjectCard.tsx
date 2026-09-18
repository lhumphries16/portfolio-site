import { ButtonLink } from './ButtonLink';
import type { PortfolioItem } from '../data/siteContent';

type ProjectCardProps = {
  item: PortfolioItem;
  className?: string;
  variant?: 'feature' | 'standard' | 'compact';
  showAction?: boolean;
};

const imageAspectByVariant = {
  feature: 'aspect-[16/10]',
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
    'group relative grid gap-5 overflow-hidden rounded-[2rem] border border-carbon/10 bg-white p-4 shadow-[0_28px_86px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/24 hover:shadow-[0_34px_100px_rgba(15,23,42,0.14)] md:p-5 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] lg:items-start',
  standard:
    'group relative grid gap-4 overflow-hidden rounded-[1.8rem] border border-carbon/10 bg-white p-4 shadow-[0_18px_56px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/24 hover:shadow-[0_26px_70px_rgba(15,23,42,0.12)] md:p-5',
  compact:
    'group relative grid gap-3 overflow-hidden rounded-[1.65rem] border border-carbon/10 bg-white p-3 shadow-[0_14px_40px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/24 md:p-4',
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
        <span className="editorial-rule" aria-hidden="true" />
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
