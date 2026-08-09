type FooterProps = {
  brand: {
    name: string;
    role: string;
    location: string;
    email: string;
  };
  socialLink: {
    href: string;
    label: string;
  };
};

export function Footer({ brand, socialLink }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-frame site-footer__inner">
        <div className="site-footer__lead">
          <p className="site-footer__title">{brand.name}</p>
          <p>{brand.role}</p>
          <p>{brand.location}</p>
          <p>Controls, software, and operations work built to hold up in the field.</p>
        </div>
        <div className="site-footer__meta">
          <p>&copy; {new Date().getFullYear()} {brand.name}</p>
          <a href={`mailto:${brand.email}`}>{brand.email}</a>
          <a href={socialLink.href} target="_blank" rel="noreferrer">
            {socialLink.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
