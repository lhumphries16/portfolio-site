type FooterProps = {
  brand: {
    name: string;
    role: string;
    location: string;
    email: string;
  };
  socialLinks: readonly {
    href: string;
    label: string;
  }[];
  note: string;
};

export function Footer({ brand, socialLinks, note }: FooterProps) {
  return (
    <footer className="border-t border-bone/10 bg-carbon">
      <div className="mx-auto grid max-w-[1700px] gap-8 px-4 py-10 md:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-8 xl:px-12">
        <div className="grid gap-3">
          <p className="font-display text-[2rem] uppercase tracking-[0.04em] text-bone">{brand.name}</p>
          <p className="text-sm tracking-[-0.01em] text-steel">{brand.role}</p>
          <p className="max-w-[34rem] text-sm leading-relaxed text-steel">{note}</p>
        </div>
        <div className="grid gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-steel lg:justify-items-end">
          <p>{brand.location}</p>
          <a className="transition-colors duration-200 hover:text-bone" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              className="transition-colors duration-200 hover:text-bone"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
          <p>&copy; {new Date().getFullYear()} {brand.name}</p>
        </div>
      </div>
    </footer>
  );
}
