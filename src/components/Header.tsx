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
  const resolveAnchorHref = (href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      return href.slice(1);
    }

    return href;
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
    <header className="site-header">
      <div className="site-frame site-header__inner">
        <Link className="site-brand" to="/" onClick={closeMenu}>
          <span className="site-brand__name">{brand.name}</span>
          <span className="site-brand__role">{brand.role}</span>
        </Link>
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
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  className="nav-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ) : item.href.startsWith('/#') ? (
                <a key={item.href} className="nav-link" href={resolveAnchorHref(item.href)} onClick={closeMenu}>
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.href}
                  className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
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
