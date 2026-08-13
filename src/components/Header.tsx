import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import type { NavItem } from '../data/types';

type HeaderProps = {
  brand: {
    name: string;
    role: string;
  };
  navItems: NavItem[];
};

export function Header({ brand, navItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

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
    <header className="sticky top-0 z-50 border-b border-bone/10 bg-carbon/94 backdrop-blur">
      <div className="mx-auto flex min-h-[4.6rem] max-w-[1440px] items-center justify-between gap-6 px-4 md:px-6 lg:px-8 xl:px-12">
        <Link className="grid gap-0.5" to="/" onClick={closeMenu}>
          <span className="font-display text-[1.55rem] uppercase tracking-[0.04em] text-bone md:text-[1.75rem]">
            {brand.name}
          </span>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-steel">
            {brand.role}
          </span>
        </Link>
        <nav className="relative" aria-label="Primary">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-3 border border-bone/14 px-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bone lg:hidden"
            aria-expanded={isOpen}
            aria-controls="primary-menu"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="grid gap-1" aria-hidden="true">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
            <span>Menu</span>
          </button>
          <div
            className={`absolute top-[calc(100%+0.85rem)] right-0 ${isOpen ? 'flex' : 'hidden'} w-[min(24rem,calc(100vw-2rem))] flex-col border border-bone/12 bg-carbon px-4 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] lg:static lg:flex lg:w-auto lg:flex-row lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none`}
            id="primary-menu"
          >
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  className="min-h-11 border-b border-bone/10 py-3 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-steel transition-colors duration-200 hover:text-bone lg:min-h-0 lg:border-b-0 lg:px-0 lg:py-0"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ) : item.href.startsWith('/#') ? (
                <Link
                  key={item.href}
                  className={`min-h-11 border-b border-bone/10 py-3 font-mono text-[0.66rem] uppercase tracking-[0.22em] transition-colors duration-200 lg:min-h-0 lg:border-b-0 lg:px-0 lg:py-0 ${
                    location.pathname === '/' && location.hash === item.href.slice(1)
                      ? 'text-cobalt'
                      : 'text-steel hover:text-bone'
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
                    `min-h-11 border-b border-bone/10 py-3 font-mono text-[0.66rem] uppercase tracking-[0.22em] transition-colors duration-200 lg:min-h-0 lg:border-b-0 lg:px-0 lg:py-0 ${isActive ? 'text-cobalt' : 'text-steel hover:text-bone'}`
                  }
                  to={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
