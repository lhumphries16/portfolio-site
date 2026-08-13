import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import type { NavItem } from '../data/types';
import { ContactCTA } from './ContactCTA';

type HeaderProps = {
  brand: {
    name: string;
    role: string;
  };
  contact: {
    ctaLabel: string;
    methods: readonly {
      label: string;
      href: string;
      value: string;
    }[];
  };
  navItems: NavItem[];
};

export function Header({ brand, contact, navItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);
  const isHashLinkActive = (href: string) => {
    const [pathname, hash] = href.split('#');
    return location.pathname === (pathname || '/') && location.hash === (hash ? `#${hash}` : '');
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 992px)');
    const handleChange = () => {
      if (mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.hash, location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-carbon/8 bg-bone/94 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex min-h-[5rem] items-center justify-between gap-6 py-3 lg:min-h-[5.6rem]">
          <Link className="grid gap-1 pr-4" to="/" onClick={closeMenu}>
            <span className="text-[0.88rem] font-semibold uppercase tracking-[0.14em] text-carbon md:text-[0.96rem]">
              {brand.name}
            </span>
            <span className="text-[0.95rem] leading-none tracking-[-0.01em] text-carbon/58 md:text-[1rem]">
              {brand.role}
            </span>
          </Link>

          <nav className="relative flex items-center" aria-label="Primary">
            <button
              type="button"
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-carbon/10 bg-white/76 px-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-carbon transition-colors duration-200 hover:border-carbon/18 hover:bg-white lg:hidden"
              aria-expanded={isOpen}
              aria-controls="primary-menu"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="grid gap-1" aria-hidden="true">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
              <span>Menu</span>
            </button>

            <div
              className={`absolute top-[calc(100%+0.9rem)] right-0 ${isOpen ? 'grid' : 'hidden'} w-[min(24rem,calc(100vw-2rem))] gap-3 rounded-[1.5rem] border border-carbon/10 bg-[#f7f4ee] p-4 shadow-[0_24px_80px_rgba(16,19,23,0.12)] lg:static lg:flex lg:w-auto lg:items-center lg:gap-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none xl:gap-10`}
              id="primary-menu"
            >
              <div className="grid gap-1.5 lg:flex lg:items-center lg:gap-8 xl:gap-10">
                {navItems.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      className="min-h-12 border-b border-carbon/10 px-0 py-3 text-[0.94rem] font-medium tracking-[-0.01em] text-carbon/62 transition-colors duration-200 hover:text-cobalt lg:min-h-0 lg:border-b-0 lg:px-0 lg:py-0"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </a>
                  ) : item.href.includes('#') ? (
                    <Link
                      key={item.href}
                      className={`min-h-12 border-b border-carbon/10 px-0 py-3 text-[0.94rem] font-medium tracking-[-0.01em] transition-colors duration-200 lg:min-h-0 lg:border-b-0 lg:px-0 lg:py-0 ${
                        isHashLinkActive(item.href)
                          ? 'text-cobalt'
                          : 'text-carbon/62 hover:text-cobalt'
                      }`}
                      to={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <NavLink
                      key={item.href}
                      className={({ isActive }) =>
                        `min-h-12 border-b border-carbon/10 px-0 py-3 text-[0.94rem] font-medium tracking-[-0.01em] transition-colors duration-200 lg:min-h-0 lg:border-b-0 lg:px-0 lg:py-0 ${isActive ? 'text-cobalt' : 'text-carbon/62 hover:text-cobalt'}`
                      }
                      to={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
              </div>

              <ContactCTA
                className="lg:ml-2"
                ctaLabel={contact.ctaLabel}
                dialogTitle="Reach Tre directly"
                methods={contact.methods}
                variant="header"
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
