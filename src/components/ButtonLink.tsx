import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'text';
};

const variantClassNames = {
  primary:
    'inline-flex min-h-12 items-center justify-center rounded-full bg-carbon px-6 text-[0.96rem] font-semibold tracking-[-0.02em] text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#172240]',
  secondary:
    'inline-flex min-h-12 items-center justify-center rounded-full border border-carbon/12 bg-white px-6 text-[0.96rem] font-semibold tracking-[-0.02em] text-carbon shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-[1px] hover:border-carbon/24 hover:bg-paper/90',
  ghost:
    'inline-flex min-h-12 items-center justify-center rounded-full border border-carbon/12 bg-transparent px-6 text-[0.96rem] font-semibold tracking-[-0.02em] text-carbon transition-colors duration-200 hover:border-carbon/22 hover:bg-white/72',
  text:
    'inline-flex items-center gap-2 text-[0.96rem] font-semibold tracking-[-0.02em] text-cobalt transition-colors duration-200 hover:text-carbon',
} as const;

export function ButtonLink({
  children,
  href,
  className = '',
  external = false,
  variant = 'primary',
}: ButtonLinkProps) {
  const classes = `${variantClassNames[variant]} ${className}`.trim();

  if (external) {
    return (
      <a className={classes} href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={href}>
      {children}
    </Link>
  );
}
