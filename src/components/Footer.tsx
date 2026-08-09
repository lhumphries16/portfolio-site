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
    <footer className="site-footer">
      <div className="site-frame site-footer__inner">
        <div className="site-footer__lead">
          <p className="site-footer__title">{brand.name}</p>
          <p>{brand.role}</p>
          <p>{brand.location}</p>
          <p>{note}</p>
        </div>
        <div className="site-footer__meta">
          <p>&copy; {new Date().getFullYear()} {brand.name}</p>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
