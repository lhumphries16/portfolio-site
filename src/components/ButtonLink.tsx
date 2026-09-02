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
    'inline-flex min-h-12 items-center justify-center rounded-full bg-cobalt px-6 text-[0.96rem] font-semibold tracking-[-0.02em] text-white shadow-[0_16px_40px_rgba(191,77,45,0.2)] transition-transform duration-200 hover:-translate-y-[1px] hover:bg-carbon',
  secondary:
    'inline-flex min-h-12 items-center justify-center rounded-full border border-carbon/14 bg-white px-6 text-[0.96rem] font-semibold tracking-[-0.02em] text-carbon transition-transform duration-200 hover:-translate-y-[1px] hover:border-carbon/28 hover:bg-paper',
  ghost:
    'inline-flex min-h-12 items-center justify-center rounded-full border border-carbon/12 bg-transparent px-6 text-[0.96rem] font-semibold tracking-[-0.02em] text-carbon transition-colors duration-200 hover:border-carbon/26 hover:bg-white/72',
  text:
    'inline-flex items-center gap-2 text-[0.96rem] font-semibold tracking-[-0.02em] text-carbon transition-colors duration-200 hover:text-cobalt',
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
