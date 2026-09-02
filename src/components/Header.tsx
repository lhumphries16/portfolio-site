import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

type HeaderProps = {
  brand: {
    name: string;
    role: string;
  };
  navItems: readonly {
    label: string;
    href: string;
  }[];
};

export function Header({ brand, navItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-50 border-b border-carbon/8 bg-bone/92 backdrop-blur-xl">
      <div className="page-wrap px-4 md:px-6 lg:px-8 xl:px-12">
        <div className="flex min-h-[4.8rem] items-center justify-between gap-6 py-3">
          <Link className="grid gap-1" to="/">
            <span className="text-[1.02rem] font-semibold tracking-[-0.03em] text-carbon md:text-[1.08rem]">
              {brand.name}
            </span>
            <span className="text-[0.82rem] leading-none tracking-[0.01em] text-carbon/52">
              {brand.role}
            </span>
          </Link>

          <button
            aria-controls="site-navigation"
            aria-expanded={isOpen}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-carbon/12 bg-white px-4 text-sm font-semibold tracking-[-0.02em] text-carbon lg:hidden"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
          >
            Menu
          </button>

          <nav
            className={`${isOpen ? 'grid' : 'hidden'} absolute inset-x-4 top-[calc(100%-0.4rem)] gap-2 rounded-[1.5rem] border border-carbon/10 bg-white p-4 shadow-[0_24px_80px_rgba(24,34,45,0.12)] lg:static lg:flex lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
            id="site-navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-[0.96rem] font-semibold tracking-[-0.02em] transition-colors duration-200 ${
                    isActive ? 'text-cobalt' : 'text-carbon/62 hover:text-carbon'
                  }`
                }
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
