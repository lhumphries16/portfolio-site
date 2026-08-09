import { useEffect, useState } from 'react';
import type { NavItem } from '../data/siteContent';

type HeaderProps = {
  brand: {
    name: string;
    role: string;
  };
  navItems: NavItem[];
  socialLink: {
    href: string;
    label: string;
  };
};

export function Header({ brand, navItems, socialLink }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <header className="site-header">
      <div className="site-frame site-header__inner">
        <a className="site-brand" href="#top" onClick={closeMenu}>
          <span className="site-brand__name">{brand.name}</span>
          <span className="site-brand__role">{brand.role}</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-controls="primary-menu"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="nav-toggle__bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="nav-toggle__label">Menu</span>
          </button>
          <div className={`nav-menu${isOpen ? ' nav-menu--open' : ''}`} id="primary-menu">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a
              className="nav-menu__social"
              href={socialLink.href}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              {socialLink.label}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
