import { ButtonLink } from '../components/ButtonLink';
import { ContactForm } from '../components/ContactForm';
import { RouteMeta } from '../components/RouteMeta';
import { ctaLinks, siteContent } from '../data/siteContent';
import { profile } from '../data/profile';

export function ContactPage() {
  return (
    <>
      <RouteMeta
        title="Contact | Tre Humphries"
        description="Contact Tre Humphries for a project call or controls consultation."
      />

      <section className="hero-shell">
        <div className="page-wrap grid gap-6 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-end">
          <div className="grid gap-4">
            <p className="eyebrow">Contact</p>
            <h1 className="m-0 max-w-[9ch] text-[clamp(2.8rem,4.9vw,4.65rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-carbon">
              {siteContent.contact.title}
            </h1>
          </div>
          <p className="body-lead max-w-[40rem]">{siteContent.contact.intro}</p>
        </div>
      </section>

      <section className="section-shell section-block">
        <div className="content-wrap grid gap-4 lg:grid-cols-2">
          <article className="surface-card grid gap-4 p-5">
            <div className="grid gap-2">
              <p className="eyebrow">Web &amp; Digital</p>
              <h2 className="m-0 text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.04em] text-carbon">
                {ctaLinks.web.label}
              </h2>
              <p className="body-copy">{ctaLinks.web.description}</p>
            </div>
            <ButtonLink external={ctaLinks.web.external} href={ctaLinks.web.href}>
              {ctaLinks.web.label}
            </ButtonLink>
          </article>

          <article className="surface-dark grid gap-4 p-5 text-white">
            <div className="grid gap-2">
              <p className="m-0 text-[0.8rem] font-semibold tracking-[0.08em] text-white/60">Controls Engineering</p>
              <h2 className="m-0 text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
                {ctaLinks.controls.label}
              </h2>
              <p className="m-0 text-[1rem] leading-relaxed text-white/76">{ctaLinks.controls.description}</p>
            </div>
            <ButtonLink external={ctaLinks.controls.external} href={ctaLinks.controls.href} variant="secondary">
              {ctaLinks.controls.label}
            </ButtonLink>
          </article>
        </div>
      </section>

      <section className="section-shell pb-14 pt-2 md:pb-18">
        <div className="content-wrap grid gap-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(20rem,0.94fr)] lg:items-start">
          <ContactForm email={profile.brand.email} helper={profile.contact.helper} />

          <aside className="surface-soft grid gap-4 p-5">
            <div className="grid gap-2">
              <p className="eyebrow">Direct</p>
              <h2 className="m-0 text-[1.55rem] font-semibold leading-[1.02] tracking-[-0.04em] text-carbon">
                Reach Tre directly
              </h2>
            </div>

            <div className="grid gap-3">
              {profile.contact.methods.map((method) => (
                <a
                  key={method.href}
                  className="rounded-[1.2rem] border border-carbon/10 bg-white px-4 py-4 transition-colors duration-200 hover:border-cobalt/24"
                  href={method.href}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                >
                  <p className="m-0 text-[0.84rem] font-semibold tracking-[0.04em] text-carbon/48">{method.label}</p>
                  <p className="m-0 pt-1 text-[0.98rem] leading-relaxed text-carbon">{method.value}</p>
                </a>
              ))}
            </div>

            <div className="rounded-[1.2rem] border border-carbon/10 bg-white px-4 py-4">
              <p className="m-0 text-[0.84rem] font-semibold tracking-[0.04em] text-carbon/48">Location</p>
              <p className="m-0 pt-1 text-[0.98rem] leading-relaxed text-carbon/72">{profile.brand.location}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
