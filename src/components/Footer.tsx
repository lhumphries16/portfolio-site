import { Link } from 'react-router-dom';

type FooterProps = {
  brand: {
    name: string;
    role: string;
    location: string;
    email: string;
  };
  note: string;
  socialLinks: readonly {
    href: string;
    label: string;
  }[];
};

export function Footer({ brand, note, socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-carbon/10 bg-paper">
      <div className="page-wrap grid gap-8 px-4 py-12 md:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8 xl:px-12">
        <div className="grid gap-3">
          <p className="m-0 text-[1.2rem] font-semibold tracking-[-0.03em] text-carbon">{brand.name}</p>
          <p className="m-0 text-[0.96rem] text-carbon/56">{brand.role}</p>
          <p className="m-0 max-w-[40rem] text-[0.96rem] leading-relaxed text-carbon/68">{note}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2 text-[0.95rem] text-carbon/66">
            <p className="m-0 font-semibold text-carbon">Navigate</p>
            <Link className="transition-colors duration-200 hover:text-cobalt" to="/web">
              Web
            </Link>
            <Link className="transition-colors duration-200 hover:text-cobalt" to="/controls">
              Controls
            </Link>
            <Link className="transition-colors duration-200 hover:text-cobalt" to="/work">
              Work
            </Link>
            <Link className="transition-colors duration-200 hover:text-cobalt" to="/about">
              About
            </Link>
            <Link className="transition-colors duration-200 hover:text-cobalt" to="/contact">
              Contact
            </Link>
          </div>

          <div className="grid gap-2 text-[0.95rem] text-carbon/66">
            <p className="m-0 font-semibold text-carbon">Direct</p>
            <p className="m-0">{brand.location}</p>
            <a className="transition-colors duration-200 hover:text-cobalt" href={`mailto:${brand.email}`}>
              {brand.email}
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                className="transition-colors duration-200 hover:text-cobalt"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
            <p className="m-0 pt-2 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-carbon/42">
              &copy; {new Date().getFullYear()} {brand.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
